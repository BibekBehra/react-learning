import React from "react";
import styled from "styled-components";
import classes from "./Cockpit.module.css";

const StyledButton = styled.button`
  background-color: green;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
    color: black;
  }
`;

const cockpit = props => {
  const assignedClass = [];
  // let btnClass='';
  // btnClass=classes.red;
  // if (props.persons.length <= 2) {
  //     classes.push('red');
  //   }
  //   if (props.persons.length <= 1) {
  //     classes.push('bold');
  //   }
  // if(props.showPerson){
  //   btnClass=
  // }
  return (
    <div>
      <h1>{props.title}</h1>
      <p>This is really working</p>
      <button onClick={() => props.clicked("from button")}>
        switch name 
      </button>
      <StyledButton onClick={props.toogled}> toggle </StyledButton>
    </div>
  );
};

export default cockpit;
