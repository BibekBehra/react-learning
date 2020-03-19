import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.jsx";

class App extends Component {
state ={
persons:[
  {name:'Bibek',age:'22'},
  {name:'vivek',age:'24'},
  {name:'Viku',age:'29'}
]
}
switchNameHandler= (newName) => {
this.setState({
    persons:[
      {name:newName,age:'22'},
      {name:'vivek',age:'24'},
      {name:'Viku',age:'30'}
    ]
});
}
nameChangedHandler = (event)=>{
  this.setState({
    persons:[
      {name:'Bibek',age:'22'},
      {name:event.target.value,age:'24'},
      {name:'Viku',age:'30'}
    ]
});

}
render() {
  
return (
  <div className="App">
    <h1> Hi i am a react app </h1> 
    <button onClick={()=>  this.switchNameHandler('from button')}> switches </button> 
    <div>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Okay</Person> 
    <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
    click={this.switchNameHandler.bind(this,'from paragraph')}
    changed={this.nameChangedHandler}/>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
    </div>
  </div>
);
}
}

export default App;
