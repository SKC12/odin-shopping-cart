import CartItem from "./CartItem";

function Cart(props) {
  const populateCart = props.cart.map((item, key) => (
    <CartItem item={item} key={key} removeFromCart={props.removeFromCart} />
  ));

  function total() {
    let total = props.cart.reduce((acc, item) => acc + item.price, 0);
    return total;
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      {populateCart}
      <button className="clear-cart" onClick={props.clearCart}>
        Clear Cart
      </button>
      <div className="check-out-container">
        <div>Total: ${total()}</div>
        <button>Check-out</button>
      </div>
    </div>
  );
}

export default Cart;
