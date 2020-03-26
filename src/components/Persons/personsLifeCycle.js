import React from "react";
import Person from "./Person/Person.js";

const PersonsLifeCycle = prop =>
  prop.persons.map((person, index) => {
    return (
      <Person
        click={() => prop.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id} // Add key to improve performance for list. Since while rendering react compares new virtual DOM with the old one and for this it needs an unique identifier which states what got changed
        changed={event => prop.changed(event, person.id)}
      />
    );
  });

export default PersonsLifeCycle;
