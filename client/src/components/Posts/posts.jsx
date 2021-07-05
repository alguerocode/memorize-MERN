import React from 'react';
import Post from './post/post';
import useStyles from './style';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';


const Posts = ({setCurrentId}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return !posts ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems="stretch"
      spacing={3}>
      {posts &&
        posts.map((post) => (
          <Grid item  xs={12} sm={6} key={post._id}>
            <Post post={post} setCurrentId={setCurrentId}/>
          </Grid>
        ))}
    </Grid>
  );
};

export default Posts;
