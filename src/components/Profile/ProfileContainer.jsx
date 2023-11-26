import Profile from './Profile';
import './Profile.css'
import React from 'react';
import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component  {
  
  componentDidMount() {
    
    let userId = this.props.router.params.userId
    if (!this.props.router.params.userId) {
      userId = '30177'
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)


  }
  render () {

    return (
          <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}  />
        )
  } 

};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile, 
  status: state.profilePage.status, 
  statusUpdateStatus: state.profilePage.statusUpdateStatus
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
  connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
  withRouter,
  withAuthRedirect,

)(ProfileContainer)

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile}) (withRouter(ProfileContainer)));
