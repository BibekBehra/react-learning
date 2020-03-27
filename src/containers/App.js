import React, { Component } from "react";
import Cockpit from "../components/Cockpit/CockpitLifeCycle.js";
import classes from "./App.module.css";
import Persons from "../components/Persons/personsLifeCycle.js";

class App extends Component {
  constructor(props){
    super(props);
    //console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 1, name: "Bibek", age: "22" },
      { id: 2, name: "vivek", age: "24" },
      { id: 3, name: "Viku", age: "29" }
    ],
    showPerson: false,
    showCockpit:false
  };
  // static getDerivedStateFromProps(props,state){
  //   console.log('[App.js] inside getDerivedStateFromProps')
  //   return state;
  // }
  // componentDidMount(){ //Not used so often
  //   console.log('[App.js] componentDidMount');
  // }
  // componentWillMount(){ //Removed in future release
  //   console.log('[App.js] inside componentWillMount');
  // }
  // shouldComponentUpdate(nextprops,nextState){
  //   console.log('[App.js] shouldComponentUpdate');
  //   return true;
  // }
  // componentDidUpdate(){
  //   console.log('[App.js] componentDidUpdate');
  // }
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: "22" },
        { id: 2, name: "vivek", age: "24" },
        { id: 3, name: "Viku", age: "30" }
      ]
    });
  };
  nameChangedHandler = (event, id) => {
    //If we see below code we never play around this original person state object.We take a copy put of it , update the copy then finally set he state object using setState();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const updatedperson = { ...this.state.persons[personIndex] };
    updatedperson.name = event.target.value;
    const newUpdatedArray = [...this.state.persons];
    newUpdatedArray[personIndex] = updatedperson;
    this.setState({ persons: newUpdatedArray });
  };
  deletepersonHandler = personIndex => {
    //const persons=this.state.persons //returns pointer to original persons array present in state. Hence directly mutates the state
    //const persons=this.state.persons.slice(); old style returns copy of state persons array
    const updatedperson = [...this.state.persons]; //ES6 .New style returns copy of state persons array.Always Update state in immutable state. create a copy update and set state.
    updatedperson.splice(personIndex, 1); // splice update the array by removing the element from personIndex to 1
    this.setState({ persons: updatedperson });
  };

  tooglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  };
  toogleCockpitHandler = () => {
    const doesShow = this.state.showCockpit;
    this.setState({ showCockpit: !doesShow });
  };
  render() {
    //console.log('[App.js] rendering');
    let persons = null;
    let cockpit = null;
    if (this.state.showCockpit) {
      cockpit = (
        <Cockpit
          title={this.props.apptitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.switchNameHandler}
          toogled={this.tooglePersonHandler}
        />
      );
    }
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletepersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }
    return (
      <div className={classes.App}>
        <button className={classes.Red}  onClick={this.toogleCockpitHandler}> toogleCockpit</button>
        {cockpit}
        {persons}
      </div>
    );
  }
}

export default App;
