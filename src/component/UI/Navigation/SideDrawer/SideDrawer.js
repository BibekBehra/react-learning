import React from 'react';
import Logo from '../../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const SideDrawer = () => {
    return (
        <div className={classes.SideDrawer}>
            <Logo height="11%"/>
            <nav>
               <NavigationItems/>
            </nav>
        </div>
    )

};
export default SideDrawer;