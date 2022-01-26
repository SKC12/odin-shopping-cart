import { useState } from "react";

function Card(props) {
  const [quantity, setQuantity] = useState(1);

  function handleChange(ev) {
    setQuantity(ev.target.value);
  }

  function addItem() {
    // console.log(quantity);
    let itemArray = [];
    for (let i = 0; i < quantity; i++) {
      // console.log(i);
      itemArray.push(props.item);
    }
    // console.log(itemArray);
    props.addToCart(itemArray);
  }

  return (
    <div className="item-card">
      <div
        className="card-color"
        style={{
          backgroundColor: props.item.color,
        }}
      ></div>
      <div>{props.item.name}</div>
      <div>${props.item.price}</div>
      <input
        className="quantity-input"
        type="number"
        defaultValue={1}
        onChange={handleChange}
      />
      <button className="add-button" onClick={addItem}>
        Add to cart
      </button>
    </div>
  );
}

export default Card;
