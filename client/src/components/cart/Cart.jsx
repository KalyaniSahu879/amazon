import { Divider } from '@mui/material';
import React from 'react';
import './cart.css';
const Cart = () => {
  return (
    <div className='cart_section'>
      <div className="cart_container">
        <div className="left_cart">
          <img src="https://th.bing.com/th/id/OIP.CbPr6fu6FH2KuAK79dlLVgHaJ9?pid=ImgDet&rs=1" alt="cart_img" />
          <div className="cart_btn">
            <button className='cart_btn1'>Add To Cart</button>
            <button className='cart_btn2'>Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>Pepsi For You</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, mollitia dolores delectus eos nobis repellendus nostrum</h4>
          <Divider />
          <p className='mrp'>M.R.P. : $111</p>
          <p className=''>Deal of the Day : <span style={{ color: "#b12704" }}> $625.00 </span></p>
          <p className=''>You Save : <span style={{ color: "#b12704" }}> $25.00 (9%)</span></p>

          <div className="discount_box">
            <h5 >Discount : <span style={{ color: "#111" }}>Extra 10% Off</span> </h5>
            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
          </div>
          <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium repudiandae praesentium laboriosam! Suscipit labore quidem cum ipsam quam cupiditate repudiandae. Porro quas dolorum rem nam eos vel voluptate expedita inventore! </span></p>
        </div>
      </div>
    </div>
  )
}

export default Cart