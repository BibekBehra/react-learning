import React, { Component } from "react";
 
class App extends Component {
  
  state = {
    persons: [
      { id: 1, name: "Bibek", age: 22 },
      { id: 2, name: "vivek", age: 24 },
      { id: 3, name: "Viku", age: 9 }
    ] 
  };
   
  
  render() {
    //console.log('[App.js] rendering');
    let persons = null;
  
    
    return (
      <p>Hello</p>
    );
  }
}

export default App;
