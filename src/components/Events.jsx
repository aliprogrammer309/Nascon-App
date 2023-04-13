import "./Events.scss";
import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase‐config";
import { Button, Stack } from "@mui/material";
// import Sidebar from "../../components/sidebar/Sidebar";
// import Navbar from "../../components/navbar/Navbar";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function Events(props) {
  const [data, setData] = React.useState([]);
  // const test = { name: "John", age: 30 };
  // console.log(test.age);
  // const navigate = useNavigate();

  // function handleClick() {
  //   navigate('/', { state: { test } });
  // }

  React.useEffect(() => {
    // const fetchData = async () => {
    //   let list = [];
    //   try {
    //     const querySnapshot = await getDocs(collection(db, "event"));
    //     querySnapshot.forEach((doc) => {
    //       list.push({ id: doc.id, ...doc.data() });
    //     });
    //     setData(list);
    //     console.log(list);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // fetchData();

    // LISTEN (REALTIME)
    const unsub = onSnapshot(
      collection(db, "event"),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  console.log(data);

  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div>
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1>All Events</h1>
          </div>
          <div className="bottom">
            {data.map((event) => (
              <div className="card" key={event.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    title={event.title.title}
                    subheader={
                      "Ticket Price: " + event.ticketPrice.ticketPrice + " PKR"
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={event.img}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2">
                      {"Event Date: " + event.eventDate.date}
                    </Typography>
                    <Typography variant="body2">
                      {"Event Time: " + event.eventTime.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.description.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Link
                      to="/EventRegisteration"
                      state={{
                        eventTitle: event.title.title,
                        fee: event.ticketPrice.ticketPrice,
                        // eventID: event.id
                      }}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button variant="outlined" size="small" color="secondary">
                        Register Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
