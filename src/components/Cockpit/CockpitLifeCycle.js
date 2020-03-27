import React, { useEffect } from 'react';

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

const Cockpit = props => {
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   // Http request...
  //   setTimeout(() => {
  //     alert('Saved data to cloud!');
  //   }, 1000);
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //   };
  // }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  // useEffect();

  let btnClass = classes.simple;
  if (props.showPerson) {
    btnClass = classes.Violet;
  }

  return (
    <div className={classes.Cockpit}>
    {/* Adding cockpit styling inside a div is necassary to apply only cockpit css scope in below items else App scope will be overridden on it */}
      <h1>{props.title}</h1>
      <p>This is really working</p>
      <button className={btnClass} onClick={() => props.clicked("from button")}>
        switch name 
      </button>
      <StyledButton onClick={props.toogled}> toggle </StyledButton>
    </div>
  );
};

export default Cockpit;