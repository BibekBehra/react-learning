import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../component/Logo/Logo.js';

const Toolbar = (props) => (
    <header className={classes.Toolbar}>
    
    <div>MENU</div>
    <Logo/>
    <div>LOGO</div>
    <nav>
        ... 
    </nav>
</header>
);
 
export default Toolbar