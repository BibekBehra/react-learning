import React, { PureComponent } from "react";
import Person from "./Person/PersonLifeCycle.js";

class PersonsLifeCycle extends PureComponent {
//      static getDerivedStateFromProps(props, state) {
//     console.log('[Persons_LC.js] getDerivedStateFromProps');
//     return state;
//   }

  // componentWillReceiveProps(props) {
  //   console.log('[Persons_LC.js] componentWillReceiveProps', props);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // personLifeCycle component going to be updated ONLY when there is an update on only on the name roperty of 0th index of person array.
  //   if(nextProps.persons[0].name !== this.props.persons[0].name){
  //     console.log('[Persons_LC.js] shouldComponentUpdate and its going to updated');
  //     return true;
  //   }
  //   console.log('[PersonsLifeCycle.js]  shouldComponentUpdate and its not going updated');
  //   return false ;
  // }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     console.log('[Persons_LC.js] getSnapshotBeforeUpdate');
//     return { message: 'Snapshot!' };
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log('[Persons_LC.js] componentDidUpdate');
//     console.log(snapshot);
//   }
// componentWillUnmount(){
//   console.log('[Persons_LC.js] componentWillUnmount');
// }
  render() {
    //console.log('[Persons_LC.js] rendering...');
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
 

 