const Line = ({children, appendClass, smHide}) => <div class={appendClass || `col-span-2 sm:col-span-1 border border-gray-600 content-center ${smHide ? "hidden sm:block" : ""} `}>{children}</div>

function BetHeader({count}) {
  return (
    <div className='w-full bg-yellow-200 text-s text-center'>
      <div class="grid grid-cols-22 min-h-10">
        <Line appendClass="col-span-7 sm:col-span-4 order border-gray-600 content-center">Event count : {count}</Line>
        <Line appendClass="col-span-3 sm:col-span-1 border border-gray-600 content-center">Yorumlar</Line>
        <Line></Line>
        <Line>1</Line>
        <Line>x</Line>
        <Line>2</Line>
        <Line>Alt</Line>
        <Line>Üst</Line>
        <Line smHide>H1</Line>
        <Line smHide>1</Line>
        <Line smHide>x</Line>
        <Line smHide>2</Line>
        <Line smHide>H2</Line>
        <Line smHide>1-X</Line>
        <Line smHide>1-2</Line>
        <Line smHide>X-2</Line>
        <Line smHide>Var</Line>
        <Line smHide>Yok</Line>
        <Line smHide>+99</Line>
      </div>
    </div>
  )
}

export default BetHeader;