import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          <>
            <p>
              MRP Total :<strong>value</strong>
              {/* Netmeds Discount :<strong>-discount</strong> */}
              {/* Total amount* <strong>Total</strong> */}
              {/* <h1>TOTAL SAVINGS RS.VALUE</h1> */}
            </p>
          </>;
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <CurrencyFormat
        renderText={(value) => {
          <>
            <p>
              {/* MRP Total :<strong>value</strong> */}
              Netmeds Discount :<strong>-discount</strong>
              {/* Total amount* <strong>Total</strong> */}
              {/* <h1>TOTAL SAVINGS RS.VALUE</h1> */}
            </p>
          </>;
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <CurrencyFormat
        renderText={(value) => {
          <>
            <p>
              {/* MRP Total :<strong>value</strong> */}
              {/* Netmeds Discount :<strong>-discount</strong> */}
              Total amount* <strong>Total</strong>
              {/* <h1>TOTAL SAVINGS RS.VALUE</h1> */}
            </p>
          </>;
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <CurrencyFormat
        renderText={(value) => {
          <>
            <p>
              {/* MRP Total :<strong>value</strong> */}
              {/* Netmeds Discount :<strong>-discount</strong> */}
              {/* Total amount* <strong>Total</strong> */}
              <h1>TOTAL SAVINGS RS.VALUE</h1>
            </p>
          </>;
        }}
        decimalScale={2}
        value={0}
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
