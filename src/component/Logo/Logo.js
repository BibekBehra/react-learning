import React from 'react';
import burgerlogo from '../../Assets/Images/original.png';
import classes from './Logo.module.css';

const logo = (props) => (
  <div className={classes.Logo}>
      <img src={burgerlogo}></img>
  </div>
);
 
export default logo;