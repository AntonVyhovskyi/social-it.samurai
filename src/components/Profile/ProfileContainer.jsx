import Profile from './Profile';
import './Profile.css'
import React from 'react';
import { getUserProfile, getUserStatus, updateUserStatus, savePhoto } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
  
  refreshProfile() {
    let userId = this.props.router.params.userId
    if (!this.props.router.params.userId) {
      userId = this.props.authProfile
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)

  }

  componentDidMount() {
    
    this.refreshProfile()

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId ) {
      this.refreshProfile()
    }
  }
  render () {

    return (
          <Profile {...this.props}
          isOwner={!this.props.router.params.userId}
           profile={this.props.profile} 
           status={this.props.status}
            updateUserStatus={this.props.updateUserStatus} 
            savePhoto={this.props.savePhoto} />
        )
  } 

};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.status, 
  statusUpdateStatus: state.profilePage.statusUpdateStatus,
  authProfile: state.auth.id
})

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <Component
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
  withRouter,
  withAuthRedirect,

)(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile}) (withRouter(ProfileContainer)));
