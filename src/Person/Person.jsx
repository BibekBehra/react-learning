import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props)=>{
const style ={
    '@media (min-widht:500px)':{
        widht:'450px'
    }
};

return (
<div className="Person" style={style}>
<p onClick={props.click}>I am {props.name} having age {props.age} person </p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>
)
};

export default Radium(person);