import React from "react";
import "./registerationRecied.css";
import { useLocation } from "react-router-dom";
import QRCode from "react-qr-code";

const RegisterationRecied = () => {
  const location = useLocation();
  const Title = location.state?.eventTitle;
  const email = location.state?.personEmail;
  const phone = location.state?.personPhone;
  const cnic = location.state?.cnic;
  const status = location.state?.status;
  const fee = location.state?.fee;

  const testData = `
  Event: ${Title}
  Email: ${email}
  Phone: ${phone}
  CNIC: ${cnic}
  Fee: ${fee}
  `;
  return (
    <div className="recied-container">
      <div className="recied-info">
        <h1>Name: {location.state?.personName}</h1>
        <h2>Registred in: {Title}</h2>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>CNIC: {cnic}</p>
        <p>Fee: Rs.{fee}</p>
        <p>Payment: {status}</p>
      </div>
      <div className="recied-qrcode">
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "80%" }}
          value={testData}
          viewBox={`0 0 256 256`}
        />
      </div>
    </div>
  );
};

export default RegisterationRecied;
