import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.jsx";
import Radium,{StyleRoot} from 'radium';
class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Bibek', age: '22' },
      { id: 2, name: 'vivek', age: '24' },
      { id: 3, name: 'Viku', age: '29' }
    ],
    showPerson: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { id: 1, name: newName, age: '22' },
        { id: 2, name: 'vivek', age: '24' },
        { id: 3, name: 'Viku', age: '30' }
      ]
    });
  }
  nameChangedHandler = (event,id) => {
    //If we see below code we never play around this original person state object.We take a copy put of it , update the copy then finally set he state object using setState();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const updatedperson = {...this.state.persons[personIndex]};
    updatedperson.name = event.target.value;
    const newUpdatedArray =[...this.state.persons];
    newUpdatedArray[personIndex] =updatedperson;
    this.setState({persons:newUpdatedArray});
  }
  deletepersonHandler = (personIndex) => {
    //const persons=this.state.persons //returns pointer to original persons array present in state. Hence directly mutates the state
    //const persons=this.state.persons.slice(); old style returns copy of state persons array
    const updatedperson = [...this.state.persons]; //ES6 .New style returns copy of state persons array.Always Update state in immutable state. create a copy update and set state.
    updatedperson.splice(personIndex, 1); // splice update the array by removing the element from personIndex to 1
    this.setState({ persons: updatedperson });
  }

  tooglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
    };
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletepersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}  // Add key to improve performance for list. Since while rendering react compares new virtual DOM with the old one and for this it needs an unique identifier which states what got changed
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      )
    }
    let classes =[];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    // <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Okay</Person>
    // <Person name={this.state.persons[1].name} 
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'from paragraph')}
    //         changed={this.nameChangedHandler} />
    // <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    return (
    <StyleRoot>
      <div className="App">
        <h1> Hi i am a react app </h1>
        <p className={classes.join(' ')} style={style}>This is really working</p>
        <button onClick={() => this.switchNameHandler('from button')}> switch name </button>
        <button onClick={this.tooglePersonHandler}> toggle </button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
