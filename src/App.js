import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import ProfileContainer from './components/Profile/ProfileContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
// import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/login/LoginContainer';
import React from 'react';
import { connect } from 'react-redux';
import { setUploadDataStatusWithGetUserData } from './redux/app-reducer';
import Preloader from './components/commons/preloader/Preloader';
import withSuspense from './hoc/withSuspense';



const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const SuspendedUsers = withSuspense(UsersContainer)


class App extends React.Component {


  componentDidMount() {
    this.props.setUploadDataStatusWithGetUserData()
        
  }


  render() {
    if (!this.props.getUserDataStatus) {
      return <Preloader />
    }
    
    return (


      <Router>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper__content'>
            <Routes>
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/profile/:userId?/' element={<ProfileContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/users' element={<SuspendedUsers/>}  /> 
              
              <Route path='/login' element={<LoginContainer />} />
            </Routes>
          </div>
        </div>
      </Router>

    );
  }
}

const mapStateToProps = (state) => {
  return {

    getUserDataStatus: state.app.uploadDataStatus
  }
  
}

export default connect (mapStateToProps, {setUploadDataStatusWithGetUserData}) (App);


