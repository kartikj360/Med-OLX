 import React from 'react'
import  './Home.css';
import Product from './Product';

 
 function Home() {
   return (
  
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
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>  
    
    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
      <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>

    <div className='home_row'>
       <Product/> 
      <Product/>
      <Product/>
      <Product/>
      <Product/>
    </div>
     
    </div>
  </div>
    

   )
 }
 
 export default Home