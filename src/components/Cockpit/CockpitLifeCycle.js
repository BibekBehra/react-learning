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

// Mount = When component gets inserted inside DOM
// UnMount = When component gets deleted from  DOM
// Update = when there's a prop or state updates it trigereed the render of the component

// Default = Mount + update
// [] Empty Array = Mount
// [props.person] = Mount + update to ONLY person state
// return inside useEffect = unmount

//scenario :: 1
// This will be helpful when we want code to execute only during Mount and update
  // useEffect(() => {
  //   console.log("[Cockpit_LC.js] useEffect ");
  // });
  

  //scenario :: 2

  // This will be helpful when we want code to execute during mount and update in only person state
  // useEffect(() => {
  //   console.log("[Cockpit_LC.js] useEffect ");
  // },[props.persons]); 
  

  //scenario :: 3
  
  // This will be helpful when we want code to execute only during Mount
  // useEffect(() => {
  //   console.log("[Cockpit_LC.js] useEffect ");
  // },[]); 
  
 
  
  
  //Scenario :: 4
  
  // This will be helpful when we want specific  code to execute only during Mount and UnMount
 useEffect(() => {
    console.log("[Cockpit.js] useEffect"); // This statement alone gets called during mount coz of empty string
    return () => {												// This statement alone gets called during unmount
      console.log("[Cockpit.js] cleanup work  useEffect");
    };
  },[]); // Gets called ONLY during component mount
  
  
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
