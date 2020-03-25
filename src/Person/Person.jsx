import React from 'react';
import './Person.css';
import styled from 'styled-components';

const StyleDiv=styled.div`
width:60%;
margin:auto;
border:3px solid #eeeeee;
box-shadow: 0 2px 3px #cccccc;
padding:16px;
text-align:center;
@media (min-width:500px){ 
    width:450px
}
`;
const person = (props)=>{
// const style ={
//     '@media (min-widht:500px)':{
//         widht:'450px'
//     }
// };

return (
//<div className="Person" style={style}>
<StyleDiv>
<p onClick={props.click}>I am {props.name} having age {props.age} person </p>
<p>{props.children}</p>
<input type="text" onChange={props.changed} value={props.name}></input>
</StyleDiv>
)
};

export default person;