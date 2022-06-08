import React, {useState, useEffect} from 'react'
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
const Home = () => {
    // because App.js is the only link between Form and Post
    const [currentId, setCurrentId] = useState(null)
    const dispatch = useDispatch();

    // after every SUBMIT, we get get a new post on the page
    // without manually refreshing the page
    useEffect (() => {
        dispatch(getPosts());
    }, [currentId,dispatch]);

  return (
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
  );
};

export default Home