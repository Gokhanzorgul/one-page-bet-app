import { CartContext, useContext } from './context/CartContext';

function Cart() {
  const { cartItems } = useContext(CartContext);
  const sumValues = obj => obj.reduce((n, { rate }) => n * Number(rate), cartItems.length === 0 ? 0 : 1);

  const total = sumValues(cartItems).toFixed(2);

  return (
    <div class="fixed right-0 bottom-0 border border-gray-600 bg-white p-2 overflow-auto max-h-full">
      {cartItems.map((item, index) => {
        return (
          <div class="px-2 py-2 border-b border-black">{item.mbs} Kod: {item.c} Maç: {item.n}
            <span class="font-semibold">&nbsp;Oran: {item.rate}</span>
          </div>
        )
      })}
      <div class="py-2 text-l font-semibold">Toplam Tutar: {total} TL</div>
    </div>
  )
}

export default Cart;