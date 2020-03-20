import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.jsx";

class App extends Component {
  state = {
    persons: [
      { name: 'Bibek', age: '22' },
      { name: 'vivek', age: '24' },
      { name: 'Viku', age: '29' }
    ],
    showPerson: false
  }
  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: '22' },
        { name: 'vivek', age: '24' },
        { name: 'Viku', age: '30' }
      ]
    });
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Bibek', age: '22' },
        { name: event.target.value, age: '24' },
        { name: 'Viku', age: '30' }
      ]
    });

  }
  deletepersonHandler = (personIndex)=>{
      const persons=this.state.persons;
      persons.splice(personIndex,1);
      this.setState({persons:persons});
  }
  tooglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({ showPerson: !doesShow });
  }
  render() {
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={()=>this.deletepersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      )
    }
    // <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Okay</Person>
    // <Person name={this.state.persons[1].name} 
    //         age={this.state.persons[1].age}
    //         click={this.switchNameHandler.bind(this, 'from paragraph')}
    //         changed={this.nameChangedHandler} />
    // <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
    return (
      <div className="App">
        <h1> Hi i am a react app </h1>
        <button onClick={() => this.switchNameHandler('from button')}> switch name </button>
        <button onClick={this.tooglePersonHandler}> toggle </button>
        {persons}
      </div>
    );
  }
}

export default App;
