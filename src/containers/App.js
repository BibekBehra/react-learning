import React, { PureComponent } from "react";
import Layout from "../component/Layout/Layout.js";
import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder.js";
import Aux from "../hoc/Auxilary.js";

class App extends PureComponent {
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
