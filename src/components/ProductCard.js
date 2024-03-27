import "./ProductCard.css";
import { useDispatch } from "react-redux";
import {add, remove} from "../store/cartSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ProductCard = ({product}) => {
  const [isInCart, setIsInCart] = useState(false);
  const dispatch = useDispatch();
  const {id, name, price, image} = product;
  const products = useSelector(state => state.cartState.cartList);

  useEffect(() => {
    const inCart = products.find(element => element.id === id);
    if (inCart){
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [products, id]);

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isInCart? <button className="remove" onClick={() => dispatch(remove(product))}>Remove</button> 
        : <button onClick={() => dispatch(add(product))}>Add To Cart</button> }
        
      </div>
    </div>
  )
}
