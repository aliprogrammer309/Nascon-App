import * as React from 'react';
import { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Grid } from '@mui/material';
import { db } from "../firebase‐config";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//   >
//     •
//   </Box>
// );






export default function Blogs() {

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setnewDescription] = useState("");

  const [blogs, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, "blog");

  const createBlog = async () => {
    await addDoc(blogsCollectionRef, { title: newTitle, description: newDescription });
  };

  // const updateUser = async (id, age) => {
  //   const userDoc = doc(db, "users", id);
  //   const newFields = { age: age + 1 };
  //   await updateDoc(userDoc, newFields);
  // };

  // const deleteUser = async (id) => {
  //   const userDoc = doc(db, "users", id);
  //   await deleteDoc(userDoc);
  // };

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);



  return (<>
  <Typography my={4} variant='h3' align='center'>
        NaSCon Blogs
      </Typography>
  <Container sx={{py: 1}} maxWidth="lg">
  <Grid container spacing={5}>
            {/* {myCards.map((card) => ( */}
    
  {blogs.map((blog) => {
    return(
    <Grid item xs={12} sm={6}>
      <Card sx={{ minWidth: 275, maxWidth: 500 }} elevation="3">
        <CardContent>
          <Typography sx={{ fontSize: 14}} color="text.secondary" gutterBottom >
            Word of the Day
          </Typography>
          <Typography variant="h4" component="div">
            {blog.title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Any adjective
          </Typography>
          <Typography variant="body2" sx={{ textAlign: "justify"}}>
            {blog.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
    )
})}    
    </Grid>
    </Container>
    </>
  );
}
