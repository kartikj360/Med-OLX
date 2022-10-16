import React from 'react';
import "./Product.css";

function Product() {
  return (
    <div className='product'>
        {/* <div className='product_img'> */}
            <img src='https://www.netmeds.com/images/product-v1/150x150/362506/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg'>
            </img>
            {/* </div>  */}
        <div className='product_info'>
            <p>
               Scalpe Plus Anti Dandruff Shampoo 
            </p>
            <p className='product_price'>
                <small>Rs.</small>
                <strong>224.0</strong>
                </p>
            <div className='product_discount'>
                <p>UPTO 20% Off </p>
                </div>  
                  
            </div> 
        <button className='add_to_cart_btn'>ADD TO CART  </button>        
    </div>
  )
}

export default Product