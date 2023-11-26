import React from "react";
import styles from './User.module.scss';
import userPhoto from '../../assets/Images/user.png';
import { NavLink } from "react-router-dom";






let User = ({user, followingInProgress, followSucces, unfollowSucces}) => {

  return <div>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img alt="avatar" src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto} />
            </NavLink>
          </div>
          <div className={styles.follow}>
            {user.followed
              ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollowSucces(user.id) }}>UnFollow</button>
              : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { followSucces(user.id) }}>Follow</button>}
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
      </div>
    

}

export default User;