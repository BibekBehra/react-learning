import React, { Component } from "react";
import Cockpit from "../components/Cockpit/Cockpit.js";
import classes from "./App.module.css";
import Persons from "../components/Persons/persons.js";
import WithClass from "../hoc/WithClass.js";
import Aux from "../hoc/Auxilary.js";

class App extends Component {
  constructor(props) {
    super(props);
    //console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { id: 1, name: "Bibek", age: 22 },
      { id: 2, name: "vivek", age: 24 },
      { id: 3, name: "Viku", age: 9 }
    ],
    showPerson: false,
    showCockpit: false,
    changeCounter:0,
    Authenticated:false
  };
   
  switchNameHandler = newName => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: 22 },
        { id: 2, name: "vivek", age: 24 },
        { id: 3, name: "Viku", age: 30 }
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
    this.setState((prevState, props) => {
      return {
        persons: newUpdatedArray,
        changeCounter: prevState.changeCounter + 1
      };
    });
  };
  deletepersonHandler = personIndex => {
    //const persons=this.state.persons //returns pointer to original persons array present in state. Hence directly mutates the state
    //const persons=this.state.persons.slice(); old style returns copy of state persons array
    const updatedperson = [...this.state.persons]; //ES6 .New style returns copy of state persons array.Always Update state in immutable state. create a copy update and set state.
    updatedperson.splice(personIndex, 1); // splice update the array by removing the element from personIndex to 1
    this.setState({ persons: updatedperson });
  };
  LoginHandler = () => {
    const isAuthenticated = this.state.Authenticated;
    this.setState({Authenticated : isAuthenticated });
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
          personlength={this.state.persons.length}
          clicked={this.switchNameHandler}
          toogled={this.tooglePersonHandler}
          logged={this.LoginHandler}
        />
      );
    }
    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletepersonHandler}
          changed={this.nameChangedHandler}
          Authenticated = {this.state.isAuthenticated}
        />
      );
    }
    return (
      <Aux>
        <button className={classes.Red} onClick={this.toogleCockpitHandler}>
          toogleCockpit
        </button>
        {cockpit}
        {persons}
      </Aux>
    );
  }
}

export default WithClass(App, classes.App);
