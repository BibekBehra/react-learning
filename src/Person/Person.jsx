import React from 'react';
import './Person.css';


const person = (props)=>{
return (
<div className="Person">
<p onClick={props.click}>I am {props.name} having age {props.age} person </p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</div>
)
};

export default person;