import React from "react";

import Paginator from "../commons/paginators/Paginator";
import User from "./User";





let Users = (props) => {


  return <div>
    <Paginator currentPage={props.currentPage} totalUsersCount={props.totalUsersCount}  pageSize={props.pageSize} onPageChanged={props.onPageChanged}/>
    {
      
      props.users.map(u => <User user={u} 
        key={u.id}  
        followingInProgress={props.followingInProgress}
        followSucces={props.followSucces}
        unfollowSucces={props.unfollowSucces}
        /> )
    }
    
    

  </div>

}

export default Users;