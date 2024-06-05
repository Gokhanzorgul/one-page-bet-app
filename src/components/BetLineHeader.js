function BetLineHeader({ betData }) {
  const { D, DAY, LN, OCG } = betData;
  const baseLineClass = "col-span-2 sm:col-span-1 border border-gray-600 content-center";
  const smHideClass = " hidden sm:block";

  return (
    <div className='w-full  text-xs'>
      <div class="grid grid-cols-22 text-center">
        <div class="col-span-7 sm:col-span-4 border border-gray-600 content-center text-left pl-2">{D} {DAY} {LN}</div>
        <div class={"col-span-3 sm:col-span-1 border border-gray-600 content-center"}>Yorumlar</div>
        <div class={baseLineClass}></div>
        <div class={baseLineClass}>1</div>
        <div class={baseLineClass}>x</div>
        <div class={baseLineClass}>2</div>
        <div class={baseLineClass}>Alt</div>
        <div class={baseLineClass}>{OCG["5"]?.["OC"]?.["26"]?.["N"]}</div>
        <div class={baseLineClass + smHideClass}>H1</div>
        <div class={baseLineClass + smHideClass}>1</div>
        <div class={baseLineClass + smHideClass}>x</div>
        <div class={baseLineClass + smHideClass}>2</div>
        <div class={baseLineClass + smHideClass}>H2</div>
        <div class={baseLineClass + smHideClass}>{OCG["2"]?.["OC"]?.["3"]?.["N"]}</div>
        <div class={baseLineClass + smHideClass}>1-2</div>
        <div class={baseLineClass + smHideClass}>{OCG["2"]?.["OC"]?.["5"]?.["N"]}</div>
        <div class={baseLineClass + smHideClass}>Var</div>
        <div class={baseLineClass + smHideClass}>Yok</div>
        <div class={baseLineClass + smHideClass}>+99</div>
      </div>
    </div>
  )
}

export default BetLineHeader;