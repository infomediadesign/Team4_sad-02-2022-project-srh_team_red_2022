import React, { useState,useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from './images/memories.png';
import useStyles from './styles';
const App = () => {
    // because App.js is the only link between Form and Post
    const [currentId, setCurrentId] = useState(null)

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect (() => {
        dispatch(getPosts());

    }, [dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} varient="h2" align="center">POSTAGRAM : Memories Application</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />

            </AppBar>
            <Grow in>
                <Container>
              <Grid Container justify="space-between" alignItems="stretch" spacing={3}  style={{display: "flex"}}>

               <Grid item xs={12} sm={7}>
                              <Posts setCurrentId = {setCurrentId}/>
                          </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId = {setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;