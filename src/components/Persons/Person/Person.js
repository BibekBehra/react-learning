import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Auxilary.js";
import WithClass from "../../../hoc/WithClass.js";
import PropTypes from 'prop-types';

class Person  extends Component {
  constructor(props){
    super(props)
    this.inputElementRef=React.createRef();

  }
  componentDidMount(){
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person_LC.js] rendering..."+this.props.isAuth);
    return (
      <Aux>
        {this.props.isAuth==true?<p>Autenticated</p>:null}
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes={
  click :PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed :PropTypes.func
};
export default WithClass(Person,classes.Person);
