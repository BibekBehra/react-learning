import React, { Component } from "react";
import Layout from "../component/Layout/Layout.js";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder.js";
import AuthContext from "../context/auth-context.js";
import Aux from "../hoc/Auxilary.js";

class App extends Component {
  render() {
    return (
      <Aux>
         
        <div>
          <Layout>
            <BurgerBuilder />
          </Layout>
        </div>
         
      </Aux>
    );
  }
}
export default App;
