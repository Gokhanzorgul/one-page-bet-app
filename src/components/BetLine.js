import { useEffect, useState } from 'react';
import { CartContext, useContext } from '../context/CartContext';

function BetLine({ betData, addBet, index }) {
  const { C, N, T, OCG } = betData;
  const { cartItems } = useContext(CartContext);
  const [selectedColumnId, setSelectedColumnId] = useState("");


  useEffect(() => {
    const hasThisColumnInTheCart = cartItems.find(item => item.c === betData.C)?.colId;

    if (!hasThisColumnInTheCart && selectedColumnId) {
      document.getElementById(`${index}-${selectedColumnId}`).style.backgroundColor = null;
      setSelectedColumnId("");
    } else if (!hasThisColumnInTheCart) {
      return;
    } else if (selectedColumnId && selectedColumnId !== hasThisColumnInTheCart) {
      document.getElementById(`${index}-${selectedColumnId}`).style.backgroundColor = null;
      document.getElementById(`${index}-${hasThisColumnInTheCart}`).style.backgroundColor = 'rgb(255,255,0)';
      setSelectedColumnId(hasThisColumnInTheCart)
    } else {
      document.getElementById(`${index}-${hasThisColumnInTheCart}`).style.backgroundColor = 'rgb(255,255,0)';
      setSelectedColumnId(hasThisColumnInTheCart)
    }
  }, [cartItems]);

  const baseLineClass = "col-span-2 sm:col-span-1 border-l border-r border-gray-600 content-center cursor-pointer";
  const smHideClass = " hidden sm:block";

  return (
    <div className='w-full text-xs text-center'>
      <div class="grid grid-cols-22 min-h-10 ">
        <div class="col-span-7 sm:col-span-4 border-l border-r border-gray-600 content-center text-left pl-2">
          <span class='font-bold'>{C}</span>&nbsp;{T} {N}
        </div>
        <div class={"col-span-3 sm:col-span-1 border-l border-r border-gray-600 content-center cursor-pointer"}>Yorumlar</div>
        <div class={baseLineClass}>{OCG["1"]?.["MBS"]}</div>
        <div class={baseLineClass} id={`${index}-1-OC-0-O`} onClick={() => addBet({ betData, rate: OCG["1"]?.["OC"]?.["0"]?.["O"], colId: "1-OC-0-O" })} >{OCG["1"]?.["OC"]?.["0"]?.["O"]}</div>
        <div class={baseLineClass} id={`${index}-1-OC-1-O`} onClick={() => addBet({ betData, rate: OCG["1"]?.["OC"]?.["1"]?.["O"], colId: "1-OC-1-O" })} >{OCG["1"]?.["OC"]?.["1"]?.["O"]}</div>
        <div class={baseLineClass}></div>
        <div class={baseLineClass} id={`${index}-5-OC-25-O`} onClick={() => addBet({ betData, rate: OCG["5"]?.["OC"]?.["25"]?.["O"], colId: "5-OC-25-O" })} >{OCG["5"]?.["OC"]?.["25"]?.["O"]}</div>
        <div class={baseLineClass} id={`${index}-5-OC-26-O`} onClick={() => addBet({ betData, rate: OCG["5"]?.["OC"]?.["26"]?.["O"], colId: "5-OC-26-O" })} >{OCG["5"]?.["OC"]?.["26"]?.["O"]}</div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass} id={`${index}-2-OC-3-O`} onClick={() => addBet({ betData, rate: OCG["2"]?.["OC"]?.["3"]?.["O"], colId: "2-OC-3-O" })} >{OCG["2"]?.["OC"]?.["3"]?.["O"]}</div>
        <div class={baseLineClass + smHideClass} id={`${index}-2-OC-4-O`} onClick={() => addBet({ betData, rate: OCG["2"]?.["OC"]?.["4"]?.["O"], colId: "2-OC-4-O" })} >{OCG["2"]?.["OC"]?.["4"]?.["O"]}</div>
        <div class={baseLineClass + smHideClass} id={`${index}-2-OC-5-O`} onClick={() => addBet({ betData, rate: OCG["2"]?.["OC"]?.["5"]?.["O"], colId: "2-OC-5-O" })} >{OCG["2"]?.["OC"]?.["5"]?.["O"]}</div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}></div>
        <div class={baseLineClass + smHideClass}>3</div>
      </div>
    </div>
  )
}

export default BetLine;