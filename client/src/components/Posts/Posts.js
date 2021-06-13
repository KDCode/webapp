import React  from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js'
import useStyles from './styles.js';


const Posts =()=>{
  const classes = useStyles();
  const posts = useSelector((state))

    return(
        <>
        <h1>POSTS</h1>
        <Post/>
        <Post/>
      </>  
    );
}
export default Posts;