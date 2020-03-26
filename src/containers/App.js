import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons.js";
import Cockpit from "../components/Cockpit/Cockpit.js";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Bibek", age: "22" },
      { id: 2, name: "vivek", age: "24" },
      { id: 3, name: "Viku", age: "29" }
    ],
    showPerson: false
  };
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
  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletepersonHandler}
          changed={this.nameChangedHandler}
        ></Persons>
      );
    }

    return (
      <div className="App">
        <Cockpit
          title={this.props.apptitle}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.switchNameHandler}
          toogled={this.tooglePersonHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
