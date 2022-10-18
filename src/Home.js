import React from 'react'
import  './Home.css';
import Product from './Product';

 
 function Home() {

   return (
  <>
    <div className='home'>
    <div className='home_container'>  
    <div className='home_1stcontainer'>
     <div className='home_top'>
     {/* <div className='home_1stcontainer'> */}
      
      <ul className='top_list'>
        <li className='top_list_item'>
          <div className="top_list_item_element1">Medicine</div>
          </li>
        <li className='top_list_item'>
          <div className="top_list_item_element2">Wellness</div>
        </li>
        <li className='top_list_item'>
          <div className="top_list_item_element3">Lab Test</div>
        </li>
        <li className='top_list_item'>
          <div className="top_list_item_element4">Beauty</div>
        </li>
        <li className='top_list_item'>
         <div className="top_list_item_element5">Health Wellness</div>
        </li>
      </ul>
      </div>
     </div>
    <div className='home_2ndcontainer'>
      <div c lassName='home_top2'>
      <ul className='top_2list'>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">COVID Essentials</div>
          </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Diabetes</div>
          </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Eyewear</div>
          </li>             
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Ayush</div>
          </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Ayurvedic</div>
          </li> 
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Homeopathy</div>
          </li>     
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Fitness</div>
        </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Mom & Bab</div>
        </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Devices</div>
        </li>
        <li className='top_2list_item'>
         <div className="top_2list_item_element">Sexual Wellness</div>
        </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Treatments</div>
          </li>
        <li className='top_2list_item'>
          <div className="top_2list_item_element">Medicine</div>
          </li>  
      </ul>
      
        </div>
      </div>
    
    <div className='home_top_slide'>
    </div>
    
    <div className='home_row'>
      <Product
      title="Scalpe Plus Anti Dandruff Shampoo 75 ml"
      price={224.00}
      image="https://www.netmeds.com/images/product-v1/150x150/…6/scalpe_plus_anti_dandruff_shampoo_75_ml_0_1.jpg"
      discount="UPTO 20%"/> 

      
      <Product
      title="Cetaphil Oily Skin Cleanser 125ml"
      price={479.60}
      image="https://www.netmeds.com/images/product-v1/150x150/828337/cetaphil_oily_skin_cleanser_125ml_0_0.jpg"
      discount="UPTO 12 % off"/>
       
      <Product
      title="Lacto Calamine Oil Balance for Oily Skin Lotion 120 ml"
      price={240.00}
      image="https://www.netmeds.com/images/product-v1/150x150/…e_oil_balance_for_oily_skin_lotion_120_ml_0_3.jpg"
      discount="UPTO 11% off"/>

      <Product
      title="Indulekha Bringha Oil 100 ml "
      price={432.00}
      image="	https://www.netmeds.com/images/product-v1/150x150/404896/indulekha_bringha_oil_100_ml_0.jpg"
      discount="UPTO 10 % off"/> 

      <Product
      title="CGG Cosmetics Sunshield Serum-For All Skin Types 50 ml"
      price={650.00}
      image="https://www.netmeds.com/images/product-v1/150x150/…eld_serum_for_all_skin_types_50_ml_423209_0_0.jpg"
      discount="UPTO 65% off"/> 
    </div>

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>   */}
    
    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}
{/* 
    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}
{/* 
    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div> */}

    {/* <div className='home_row'>
       <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
      */}
    </div>
  </div>
    
</>
   )
 }
 
 export default Home