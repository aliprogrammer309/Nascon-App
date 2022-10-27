import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );

export default function Blogs() {
  return (<>
  <Typography my={4} variant='h3' align='center'>
        NaSCon Blogs
      </Typography>
  <Container sx={{py: 1}} maxWidth="lg">
  <Grid container spacing={5}>
            {/* {myCards.map((card) => ( */}
              <Grid item xs={12} sm={6}>
    <Card sx={{ minWidth: 275, maxWidth: 500 }} elevation="3">
      <CardContent>
        <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom >
          Word of the Day
        </Typography>
        <Typography variant="h4" component="div">
          Title of Blog
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Any adjective
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui tempore atque! Quod dolorum temporibus atque esse aliquid magnam soluta perspiciatis expedita ad, asperiores quos ab deserunt qui. Non, autem error? Nesciunt quia dolorum commodi itaque aliquid quae perferendis quis.
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card sx={{ minWidth: 275, maxWidth: 500 }} elevation="3">
      <CardContent>
        <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom >
          Word of the Day
        </Typography>
        <Typography variant="h4" component="div">
          Title of Blog
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Any adjective
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui tempore atque! Quod dolorum temporibus atque esse aliquid magnam soluta perspiciatis expedita ad, asperiores quos ab deserunt qui. Non, autem error? Nesciunt quia dolorum commodi itaque aliquid quae perferendis quis.
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card sx={{ minWidth: 275, maxWidth: 500 }} elevation="3">
      <CardContent>
        <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom >
          Word of the Day
        </Typography>
        <Typography variant="h4" component="div">
          Title of Blog
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Any adjective
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui tempore atque! Quod dolorum temporibus atque esse aliquid magnam soluta perspiciatis expedita ad, asperiores quos ab deserunt qui. Non, autem error? Nesciunt quia dolorum commodi itaque aliquid quae perferendis quis.
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} sm={6}>
    <Card sx={{ minWidth: 275, maxWidth: 500 }} elevation="3">
      <CardContent>
        <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom >
          Word of the Day
        </Typography>
        <Typography variant="h4" component="div">
          Title of Blog
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Any adjective
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify"}}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius qui tempore atque! Quod dolorum temporibus atque esse aliquid magnam soluta perspiciatis expedita ad, asperiores quos ab deserunt qui. Non, autem error? Nesciunt quia dolorum commodi itaque aliquid quae perferendis quis.
          <br />
          {/* {'"a benevolent smile"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>


    </Grid>
    </Container>
    </>
  );
}
