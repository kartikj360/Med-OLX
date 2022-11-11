import React from 'react'
import { useStateValue } from './StateProvider'
// import '/CheckoutProduct.css'

function CheckoutProduct({id , title , price , discount , image}) {

    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
    //removing the product from basket
    dispatch({

        type: 'REMOVE_FROM_BASKET',
        id:id,
    })
}


    return (
    <div className='checkoutProduct'>
        <img  className='checkoutProduct_image' src={image}/>
        <div className='checkProduct_info' >
            <p className='checkProduct_title'>
                {title}
                <strong>{discount}</strong>
                <small>
                    Rs.
                </small>
                <strong>
                    {price}  
                </strong>
            </p>
            
            <button onClick={removeFromBasket}>Remove the product</button>
            <button>Save for later</button>
            

        </div>
    </div>
  )
}

export default CheckoutProduct