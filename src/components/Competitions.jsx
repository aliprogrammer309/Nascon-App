import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { CardActionArea } from '@mui/material';


// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const myCards = [{
  id: 1,
  name: "Badminton",
  pic: '../assets/badminton.jpeg',
  desc: "blah blah blah"
},
{
  id: 2,
  name: "eGaming",
  pic: '../assets/eGaming.jpeg',
  desc: "blah blah blah"
},{
  id: 3,
  name: "Badminton",
  pic: '../assets/badminton.jpeg',
  desc: "blah blah blah"
},{
  id: 4,
  name: "Badminton",
  pic: '../assets/badminton.jpeg',
  desc: "blah blah blah"
},{
  id: 5,
  name: "Electrical",
  pic: '../assets/badminton.jpeg',
  desc: "blah blah blah"
},{
  id: 6,
  name: "Football",
  pic: '../assets/badminton.jpeg',
  desc: "blah blah blah"
}
]


const Competitions = () => {
  return (
    <>
      <Typography my={2} variant='h3' align='center'>
        Competitions
      </Typography>
      <Container sx={{ py: 2 }}  maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={7}>
            {myCards.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345 }} elevation="3">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      // width="10%"
                      src={require('../assets/football.jpeg')}
                      // image = {require('../assets/football.jpeg')}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" variant='outlined' color="secondary">
                      Apply Now
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </>
  )
}

export default Competitions