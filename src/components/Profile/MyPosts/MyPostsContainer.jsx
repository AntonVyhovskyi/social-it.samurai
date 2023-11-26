

import {addPostActionCreator }  from '../../../redux/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';




let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}


const MyPostsContainer = connect(mapStateToProps, {addPostActionCreator}) (MyPosts); 

export default MyPostsContainer;



