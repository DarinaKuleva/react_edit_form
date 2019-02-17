import React, { PureComponent } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Information extends PureComponent {

  render() {

    return (
      <HashRouter>
        <div>
          <p>Name: {this.props.name}</p>
          <p>Surname: {this.props.surname}</p>
          <button>
            <NavLink to="/FormContainer">Изменить</NavLink>
          </button>
        </div>
      </HashRouter>
    );
  }
}

export default connect(state => {
  return {
    name: state.name,
    surname: state.surname,
    lastname: state.lastname,
    age: state.age,
    address: state.address,
    job: state.job,
    post: state.post
  }
})(Information)