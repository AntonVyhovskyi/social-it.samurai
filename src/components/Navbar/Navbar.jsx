import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
      <nav className={classes.nav}>
        <div className={classes.item}><NavLink to='/profile' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>Profile</NavLink></div>
        <div className={classes.item}><NavLink to='/dialogs' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>Masages</NavLink></div>
        <div className={classes.item}><NavLink to='/news' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>News</NavLink></div>
        <div className={classes.item}><NavLink to='/music' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>Music</NavLink></div>
        <div className={classes.item}><NavLink to='/settings' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>Settings</NavLink></div>
        <div className={classes.item}><NavLink to='/users' className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? `${classes.active}` : ""
  }>Users</NavLink></div>
        
      </nav>
    )
};

export default Navbar;