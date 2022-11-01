import React from 'react';
import './Checkout.css';
// import Subtotal from './Subtotal'; 

function Checkout() {
  return ( 
    <div className='checkout'>
        <div className='checkout_left'></div>
          <div className='home_top_slide'></div>
          <div className='checkout_tab'>
            <h2 className='checkout_title'>Order Summary</h2>
            {/* <Basket/>
            <Basket/>
            <Basket/>
            <Basket/> */}

            
          </div>
        <div className='checkout_right'>
            <h2> PAYMENT DETAILS</h2>
            {/* <Subtotal/> */}

        </div>
    </div>
  )
}

export default Checkout