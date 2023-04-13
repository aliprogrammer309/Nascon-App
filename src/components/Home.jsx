import React from "react";
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { CardActionArea, Paper } from '@mui/material';
import "../App.css";
import logo from "../assets/logo.png";
// import { width } from '@mui/system';
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import ideafest from '../assets/ideafest.jpg'
// background: "#E7EBF0",

const Home = () => {
  return (
    <>
      <Container sx={{ my: 3 }} maxWidth="lg">
        {/* <Typography variant='h2' align='Center'>
          Hello NaSCon
        </Typography> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              align="center"
              style={{ color: "#9C27B0" }}
            >
              NaSCon Event
            </Typography>
            <Typography gutterBottom variant="h6" align="justify">
              NaSCon is one of the biggest events that is organized annually by
              FAST National University, Islamabad campus. This event comprises
              of Different Computer Science, Engineering and Business
              competitions. Teams from all over the country participate in the
              competitions and show their mettle. <br /> Apart from the
              educational and technical events, there are a lot of entertainment
              events held so that participants and visitors enjoy the event to
              the core.
            </Typography>
            <Link to="/blogs" style={{ textDecoration: "none" }}>
              <Button color="secondary" variant="contained">
                Blogs
              </Button>
            </Link>
            <Link to="/competitions" style={{ textDecoration: "none" }}>
              <Button
                color="secondary"
                sx={{ margin: "2%" }}
                variant="outlined"
              >
                Competitions
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={logo} alt="NasCon logo" width="90%" />
          </Grid>
        </Grid>
        {/* <section className="home-banner2">

        </section> */}
        <Grid container spacing={2} style={{margin: "100px 0 100px 0"}}>
          <Grid item xs={12} md={6}>
            <img src={ideafest} alt="NasCon logo" width="90%" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              align="center"
              style={{ color: "#9C27B0" }}
            >
              IdeaFest
            </Typography>
            <Typography gutterBottom variant="h6" align="justify">
              An event in which students would be setting up stalls to sell
              their products. The core purpose of this is to help the students
              become good entrepreneurs and make them aware of the challenges
              faced by businesses.
            </Typography>
            
          </Grid>
        </Grid>

        <FAQ />
      </Container>
    </>
  );
};

export default Home;
