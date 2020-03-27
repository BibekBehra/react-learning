import React, { Component } from "react";
import Person from "./Person/PersonLifeCycle.js";

class PersonsLifeCycle extends Component {
//      static getDerivedStateFromProps(props, state) {
//     console.log('[PersonsLifeCycle.js] getDerivedStateFromProps');
//     return state;
//   }

  // componentWillReceiveProps(props) {
  //   console.log('[PersonsLifeCycle.js] componentWillReceiveProps', props);
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[PersonsLifeCycle.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[PersonsLifeCycle.js] getSnapshotBeforeUpdate');
    return { message: 'Snapshot!' };
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[PersonsLifeCycle.js] componentDidUpdate');
    console.log(snapshot);
  }
componentWillUnmount(){
  console.log('[PersonsLifeCycle.js] componentWillUnmount');
}
  render() {
    console.log('[PersonsLifeCycle.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}
export default PersonsLifeCycle;
 

 