import * as React from "react";
import { useState, useEffect } from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import { Link, Navigate } from "react-router-dom";
import { doc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebase‐config";
// import Grid from '@mui/material/Grid';
// import Box from "@mui/material/Box";
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import AddIcon from "@mui/icons-material/Add";
import "./EventRegisteration.scss";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { db } from "../firebase‐config";
// import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="/" style={{textDecoration: "none"}}>
//         NaSCon
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

export default function EventRegisteration(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cnic, setCnic] = useState("");
  const [status, setStatus] = useState("pending");

  const navigate = useNavigate();
  // console.log(props.location);
  const location = useLocation();
  const eventTitle = location.state?.eventTitle;
  const fee = location.state?.fee;
  // const eventID = location.state?.eventID;
  // console.log(test);
  // const [disableBtn, setDisableBtn] = useState(true);

  //   const handleInputs = () =>{
  //     if (name.trim()!=null && email.includes("@") && phone.trim()!=null){
  //       setDisableBtn(false);
  //     }
  // }

  // const EventParticipants = collection(db, "EventParticipants");

  // const createBlog = async () => {
  //     await addDoc(blogsCollectionRef, { title: newTitle, description: newDescription });
  //   };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(name, email, phone);
    try {
      await addDoc(collection(db, "EventParticipants"), {
        name: name,
        email: email,
        phone: phone,
        cnic: cnic,
        eventName: eventTitle,
        fee: fee,
        status: status,
      });
      alert("Registered in " + eventTitle);
      // navigate("/registerationRecied");
      navigate(
        "/registerationRecied",
        {
          state: {
            eventTitle: eventTitle,
            personName: name,
            personEmail: email,
            personPhone: phone,
            cnic: cnic,
            status: status,
            fee: fee
            // eventID: event.id
          },
        }
        // style={{ textDecoration: "none", color: "white" }}
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form className="event-registeration-container" onSubmit={handleSubmit}>
        <h2>Resgister For {eventTitle}</h2>
        {/* <p>Event ID: {eventID}</p> */}
        <div className="input-cell">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="input-cell">
          <label htmlFor="cnic">CNIC:</label>
          <input
            type="text"
            id="cnic"
            name="cnic"
            required
            onChange={(e) => {
              setCnic(e.target.value);
            }}
          />
        </div>
        <div className="input-cell">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-cell">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        {/* <Link
          to="/registerationRecied"
          type="submit"
          state={{
            eventTitle: eventTitle,
            personName: name,
            personEmail: email,
            personPhone: phone,
            cnic: cnic,
            status: status
            // eventID: event.id
          }}
          style={{ textDecoration: "none", color: "white" }}
        > */}
        <Button
          variant="outlined"
          type="submit"
          size="medium"
          color="secondary"
        >
          Register Now
        </Button>
        {/* </Link> */}
      </form>
    </>
  );
}
