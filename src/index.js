import React, {PureComponent} from "react";
import {render} from "react-dom";
import Main from "./containers/Main";

class App extends PureComponent {
    render() {
        return (
            <div>
                <h3>Personal data</h3>
                <Main />
            </div>
        );
    }
}

render(<App />, document.getElementById("root"));
