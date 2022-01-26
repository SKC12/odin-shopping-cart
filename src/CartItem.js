function CartItem(props) {
  function removeItem(ev) {
    props.removeFromCart(ev.target);
  }
  return (
    <div className="cart-item-container">
      <div
        className="cart-color"
        style={{
          backgroundColor: props.item.color,
        }}
      ></div>
      <p>{props.item.name}</p>
      <p>${props.item.price}</p>
      <button
        className="cart-del-button"
        onClick={() => props.removeFromCart(props.item)}
      >
        Del
      </button>
    </div>
  );
}

export default CartItem;
