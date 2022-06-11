import React from 'react';
import './buynow.css';
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';
const BuyNow = () => {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select All Items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>
                <div className="item_container">
                    <img src="https://th.bing.com/th/id/OIP.CbPr6fu6FH2KuAK79dlLVgHaJ9?pid=ImgDet&rs=1" alt="..." />
                    <div className="item_details">
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <h3>Pepsi drinks</h3>
                        <h3 className='diffrentprice'>$4049.00</h3>
                        <div className="unusuall">Usually dispatched in 8 days.</div>
                        <p>Eligible for free Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                        <Option />
                    </div>
                    <h3 className='item_price'>$4049.00</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default BuyNow