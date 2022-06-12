import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { cartActions } from './store';
function Home() {
  const datas = [
    "shirt", "pant", "shoes"
  ];
  const dispactch = useDispatch();
  const carts = useSelector(state => state.cart);
  useEffect(()=>{
    console.log(carts.cart)
  },[carts])
  const sendToCart = (data) =>{
    dispactch(cartActions.changeCart(data))
  }
  return (
    <div>
      <div>
        {datas.map((data, index)=>(
          <div key={index} onClick={() => sendToCart(data)}>{data}</div>
        ))}
      </div>
    </div>
  )
}

export default Home