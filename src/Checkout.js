import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal'; 
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return ( 
    <div className='checkout'>
        <div className='checkout_left'></div>
          <div className='home_top_slide'></div>
          <div className='checkout_tab'>
            <h2 className='checkout_title'>Order Summary</h2>
            
            {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              discount={item.discount} />))}

            
          </div>
        <div className='checkout_right'>
            <h2> PAYMENT DETAILS</h2>
            {/* <Subtotal/> */}

        </div>
    </div>
  )
}

export default Checkout