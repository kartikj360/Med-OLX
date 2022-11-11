import React from "react";
import "./Subtotal.css";
import  {getBasketTotal} from "./reducer.js";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
const[{basket},dispatch]=useStateValue();


  return (
    <div className="subtotal">
      <CurrencyFormat
        // renderText={(value) => {
        //   {<>
          
        //     <p>
        //       MRP Total {(basket.length)} :<strong>{value}</strong>
        //       {/* Netmeds Discount :<strong>-discount</strong> */}
        //       {/* Total amount* <strong>Total</strong> */}
        //       {/* <h1>TOTAL SAVINGS RS.VALUE</h1> */}
        //     </p>
        //   </>; } 
        // }}
        decimalScale={2}
        value={getBasketTotal([basket])}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <p>TOTAL AMOUNT Rs.VALUE</p>
      <button>PROCEED</button>
    </div>
  );
}

export default Subtotal;
