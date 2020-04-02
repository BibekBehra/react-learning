import React, { useContext } from 'react';
import classes from './Backdrop.module.css';
import AuthContext from '../../context/auth-context.js';

const BackDrop = (prop) => {
   const authContext = useContext(AuthContext);
//    authContext.show ? <div className={classes.Backdrop} onClick={authContext.clicked}></div> : null
};
 
export default BackDrop;