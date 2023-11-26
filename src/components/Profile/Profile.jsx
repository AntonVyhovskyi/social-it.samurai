
import Preloader from '../commons/preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  if (!props.profile) {
    return (
      <Preloader />
    )
  } else {
    
    return (
      <div className='content'>
        
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} statusUpdateStatus={props.statusUpdateStatus}/>
        <MyPostsContainer  store={props.store} />
      </div>
    )
  }
   
};

export default Profile;

// {/* <MyPostsContainer  newPostText={props.profilePage.newPostText} 
// postData={ props.profilePage.postData }  
// dispatch={props.dispatch} store={props.store} /> */}