import { connect } from "react-redux";
import Login from "./Login";
import React from "react";
import { getAuthUserData, logIn } from "../../redux/auth-reducer";




class LoginContainer extends React.Component {
    
    componentDidMount() {
        this.props.getAuthUserData()
    }



    render() {
        
        return (
          <Login auth={this.props.auth} logIn={this.props.logIn} getAuthUserData={this.props.getAuthUserData} loginFall={this.props.loginFall}/>
        )
}
}

let mapStateToProps = (state) => {
    return {
        auth: state.auth.isAuth,
        loginFall: state.auth.loginFall
    }
}

export default  connect(mapStateToProps, {getAuthUserData, logIn})(LoginContainer);