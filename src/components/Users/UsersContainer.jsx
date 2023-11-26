
import React from "react";
import { connect } from 'react-redux';
import {  followSucces, unfollowSucces, getUsers,} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../commons/preloader/Preloader.jsx';
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUsersSelector, getCurrentPag, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from "../../redux/users-selectors";



class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }
   
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }

  
  render() {
   return <>
        
          { this.props.isFetching ?  <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}

                      followingInProgress={this.props.followingInProgress}
                      unfollowSucces={this.props.unfollowSucces}
                      followSucces={this.props.followSucces}

        />
   </>
  }
}


let mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPag(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }

}

export default compose(
  connect (mapStateToProps, {
       getUsers,
       unfollowSucces,
       followSucces
     }),
  withAuthRedirect
)(UsersContainer)

