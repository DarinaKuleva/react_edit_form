import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import info from '../styles/info.module.css'
import btn from '../styles/btn.module.css'

class Information extends PureComponent {

  render() {
    return (
      <div className={info.information}>
        <h1 className={info.title}>Personal information</h1>
        <section>
          <div className={info.text}>
          <p>Name: {this.props.name}</p>
          <p>Surname: {this.props.surname}</p>
          <p>Lastname: {this.props.lastname}</p>
          <p>Age: {this.props.age}</p>
          <p>Address: {this.props.address}</p>
          <p>Job: {this.props.job}</p>
          <p>Post: {this.props.post}</p>
          </div>
            <NavLink to="/FormContainer" className={btn.change}>Изменить</NavLink>
        </section>
      </div>
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
