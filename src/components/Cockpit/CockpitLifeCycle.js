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
  
  // This is perfect example of let useEffect being called when there is a specifc code to execute during component mount () and component unmount independently.
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    return () => {                                            // This return statement decides that it will get called during component unmount aswell
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // Empty array here decides that being called over only component mount.

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
