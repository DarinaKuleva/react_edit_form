import React, { PureComponent } from "react";
import {HashRouter, NavLink} from "react-router-dom";
import fullName from "./FormContainer";

class Informaition extends PureComponent {
    render() {
        return (
            <HashRouter>
                <div>
                    <p>hjhjhbnb</p>
                    <button>
                        <NavLink to="/FormContainer">Изменить</NavLink>
                    </button>
                </div>
            </HashRouter>
        );
    }
}

export default Informaition;
