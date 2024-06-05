import { useEffect, useState } from 'react';
import { CartContext } from './context/CartContext';

// ** BET COMPONENTS ** //
import BetHeader from './components/BetHeader';
import BetLineHeader from './components/BetLineHeader';
import BetLine from './components/BetLine';

// ** CART COMPONENTS ** //
import Cart from './Cart';
import { getBetsRequest } from './api/BetsApi';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [betData, setBetData] = useState([]);
  const [displayItemLength, setDisplayItemLength] = useState(40);

  const data = {
    cartItems,
    setCartItems,
  };


  useEffect(() => {
    // It increases the number of matches displayed on the screen when the page is scrolled.
    onscroll = () => {
      setDisplayItemLength(displayItemLength + window.scrollY / 10 / 6)
    }

    // When the page is first opened, it pulls the matches from the API.
    getBetsRequest().then((betList) => {
      setBetData(betList)
    })
  }, []);



  const addBetHandler = ({ betData, rate, colId }) => {
    if (!!cartItems.find(item => item.colId === colId && item.c === betData.C)) {
      // Clicking again on the current rate removes it from the cart.
      setCartItems([
        ...cartItems.filter((item) => item.c !== betData.C),
      ])
    } else {
      // When a new rate is clicked, it is added to the cart.
      setCartItems([
        ...cartItems.filter((item) => item.c !== betData.C),
        {
          mbs: betData["OCG"]?.["1"]?.["MBS"],
          c: betData.C,
          n: betData["N"],
          rate,
          colId
        }
      ])
    }
  }

  return (
    <CartContext.Provider value={data}>
      <Cart />
      <BetHeader count={betData.length}/>
      {betData.map((betItem, index) => {
        if (index > displayItemLength)
          return null
        return (
          <>
            <BetLineHeader betData={betItem} />
            <BetLine betData={betItem} addBet={addBetHandler} index={index} />
          </>
        )
      })}
    </CartContext.Provider>
  );
}

export default App;
