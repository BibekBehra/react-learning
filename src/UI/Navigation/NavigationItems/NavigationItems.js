import React from "react";
 import NavigationItem from './NavigationItem/NavigationItem.js';
import classes from '../NavigationItems/NavigationItems.module.css';

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);

export default navigationItems;
