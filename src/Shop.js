import { useEffect } from "react";
import Card from "./ItemCard";

function Shop(props) {
  //   useEffect(() => {

  //   }, [props.stock]);
  const populateShop = props.stock.map((item, index) => (
    <Card item={item} addToCart={props.addToCart} key={index} />
  ));

  return (
    <div>
      <h1>Shop</h1>
      <div className="cards-container">{populateShop}</div>
    </div>
  );
}

export default Shop;
