import React, { useRef } from "react";
import "./challanForm.css";
// import { useReactToPrint } from "react-to-print";
import ReactToPrint from 'react-to-print';

const EventFeeChallan = () => {
  <style type="text/css">
    {"@media print{@page {size: landscape}}"}
  </style>
  const componentRef = useRef();
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

  return (
    <div>
      <div>
        {/* <button onClick={handlePrint} style={{margin: "0 auto"}}>Print this out!</button> */}
        <ReactToPrint
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
        documentTitle='new document'
        pageStyle="print"
        
      />
      </div>
      <div ref={componentRef} className="challan-container">
        <div className="bank-copy">
          <p>Bank Copy</p>
          <h2>Faysal Bank Limited</h2>
          <h3>NASCON FAST-ISD</h3>
          <p>Fee can be paid at all Faysal Bank Limited branches across</p>
          <div className="challan-row">
            Due Date: <b>20-Mar-2023</b>
          </div>
          <div className="challan-row">
            Name: <b>Usama Zafar</b>
          </div>
          <div className="challan-row">
            Event Name: <b>Bonfire Night</b>
          </div>
          <div className="challan-row">
            Regsitration Fee: <b>Rs. </b>
          </div>
          <div className="signatures">
            <b>Deposited by: </b>
            <b>Bank Officer Stamp and Signature:</b>
          </div>
        </div>
        <div className="applicant-copy">
          <p>Applicant Copy</p>

          <h2>Faysal Bank Limited</h2>
          <h3>NASCON FAST-ISD</h3>
          <p>Fee can be paid at all Faysal Bank Limited branches across</p>
          <div className="challan-row">
            Due Date:<b>20-Mar-2023</b>
          </div>
          <div className="challan-row">
            Name: <b>Usama Zafar</b>
          </div>
          <div className="challan-row">
            Event Name: <b>Bonfire Night</b>
          </div>
          <div className="challan-row">
            Regsitration Fee: <b>Rs. </b>
          </div>
          <div className="signatures">
            <b>Deposited by: </b>
            <b>Bank Officer Stamp and Signature:</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventFeeChallan;
