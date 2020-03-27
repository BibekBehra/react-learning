import React, { useEffect } from "react";

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
  
  //by default useEffect() being called always for the very first time load of the component.

  //scenario :: 1
  useEffect(() => {
    console.log("[Cockpit_LC.js] useEffect when there is a change in person state");
  },[props.persons]); // In addition to default loading being called when there is a change in person state

  //scenario :: 2

  // useEffect(() => {
  //   console.log("[Cockpit_LC.js] useEffect when there is a change in person state");
  // },[]); // In addition to default loading called when there is a component mount happens

  //scenario :: 3

  // useEffect(() => {
  //   console.log("[Cockpit_LC.js] useEffect when there is a change in person state");
  // }); // Being called each time there is a component mount/unmount happens

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
      <StyledButton onClick={props.toogled}> togglePerson </StyledButton>
    </div>
  );
};

export default Cockpit;
