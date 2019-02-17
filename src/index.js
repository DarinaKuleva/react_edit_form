import React, { PureComponent } from "react";
import { render } from "react-dom";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Information from "./containers/Information";
import FormContainer from "./containers/FormContainer";
import { store } from './store/index'
import { Provider } from 'react-redux'

class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <HashRouter>
            <div>
              <Information/>
            </div>
            <div>
              <Route path="/FormContainer" component={FormContainer}/>
            </div>
          </HashRouter>
        </Provider>
      </div>
    );
  }
}

render(<App/>, document.getElementById("root"));
