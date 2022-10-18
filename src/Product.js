import React from 'react';
import "./Product.css";

function Product({id,title,image,price,discount}) {
  return (
    <div className='product'>
        {/* <div className='product_img'> */}
            <img src={image}></img>
            {/* </div>  */}
        <div className='product_info'>
            <p>
                {title}
               {/* Scalpe Plus Anti Dandruff Shampoo  */}
            </p>
            <p className='product_price'>
                <small>Rs.</small>
                <strong>
                    {/* 224.0 */}
                    {price}
                    </strong>
                </p>
            <div className='product_discount'>
                <p>
                    {discount}
                    {/* UPTO 20% Off  */}
                    </p>
                </div>  
                  
            </div> 
        <button className='add_to_cart_btn'>ADD TO CART  </button>        
    </div>
  )
}

export default Product