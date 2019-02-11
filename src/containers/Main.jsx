import React, { PureComponent } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Informaition from "./Informaition";
import FormContainer from "./FormContainer";

class Main extends PureComponent {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <li><NavLink to="/Informaition">Informaition</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/Informaition" component={Informaition}/>
                        <Route path="/FormContainer" component={FormContainer}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
