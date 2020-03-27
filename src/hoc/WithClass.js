import React from "react";
//Its a normal function which returns a functional component
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent />
    </div>
  );
};
export default withClass;
