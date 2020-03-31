import React, { useContext } from "react";
import classes from "../BuildControl/BuildControl.module.css";
 

const BuildControl = props => {
   

  return (
    <div className={classes.BuildControl}>
      <div className={classes.label}>{props.label}</div>
      <button className={classes.Less}
                  onClick={props.removed} 
                  disabled={!props.isDisabled}  >
        Less
      </button>
      <button className={classes.More}
              onClick={props.added}  >
        More
      </button>
    </div>
  );
};

export default  React.memo(BuildControl);
