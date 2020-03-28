import React, { useEffect, useRef } from "react";

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
  const tooglebuttonRef = useRef(null);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    tooglebuttonRef.current.click();
  }, []);

  let btnClass = classes.simple;
  if (props.personlength <= 2) {
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
      <button className={btnClass} onClick={props.logged}>
        Log In
      </button>
      <StyledButton onClick={props.toogled} ref={tooglebuttonRef}>
        togglePerson
      </StyledButton>
    </div>
  );
};

export default React.memo(Cockpit);
//export default Cockpit;
