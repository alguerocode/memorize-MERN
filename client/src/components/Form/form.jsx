import React, {useEffect, useState} from 'react';
import useStyles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase64 from 'react-file-base64';
import {createPost, updatePost} from '../../redux/slices/post/asyncActions';


const Form = ({currentId, setCurrentId}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const post = useSelector((state) => currentId ? state.posts.find((message) => message._id === currentId) : null);

  useEffect(() =>{
    if(post) {
      setPostData(post);
    }
  },[post])
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost({currentId, postData}));
      clear();
    } else {
      dispatch(createPost(postData));
      clear();
    }
  };
  const clear = () => {
    setCurrentId(null);
    setPostData({creator: '',title: '',message: '',tags: '',selectedFile: ''});
  };
  return (
    <Paper className={classes.paper}>
      <form
        className={`${classes.form} ${classes.root}`}
        noValidate
        autoComplete="off"
        onSubmit={submitHandler}>
        <Typography variant="h6">{currentId ?"Editing":"Creating"} a Memory</Typography>
        <TextField
          variant="outlined"
          name="creator"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({...postData, creator: e.target.value})}
          required
        />
        <TextField
          variant="outlined"
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({...postData, title: e.target.value})}
          required
        />
        <TextField
          variant="outlined"
          name="message"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({...postData, message: e.target.value})}
          required
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({...postData, tags: e.target.value.split(',')})
          }
        />
        <div className={classes.fileInput}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={({base64}) =>
              setPostData({...postData, selectedFile: base64})
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          fullWidth>
          Submit
        </Button>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          size="small"
          color="primary"
          onClick={clear}
          fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
