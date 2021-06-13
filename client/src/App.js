import React,{useEffect} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form';
import useStyles from './styles.js';
import {useDispatch} from 'react-redux';
import { getPosts } from './actions/posts';


import memories from './images/memories.png';
// import { mergeClasses } from '@material-ui/styles'
const App =()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
      }, [currentId, dispatch]);
    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className ={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className ={classes.image}  src={memories} alt ="memories" height="60"></img>
            </AppBar>
            <Grid in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing="3">
                        <Grid item xs={12} sm={7}>
                            <Posts/>
                        </Grid>
                        <Grid>
                            <Form/>
                        </Grid>
                    </Grid>
                </Container>

            </Grid>
        </Container>
    );
}

export default App;
