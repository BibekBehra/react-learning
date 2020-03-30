import React, { Component } from "react";
import Aux from "../../hoc/Auxilary.js";
import Burger from "../../component/Burger/Burger.js";

class BurgerBuilder extends Component  {
  state = {
      ingredients:{
          salad:1,
          bacon:1,
          cheese:2,
          meat:2
      }
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Burger Builder</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
