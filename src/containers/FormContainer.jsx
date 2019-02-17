import React, { PureComponent } from "react";

import Input from "../components/Input";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";
import saveForm from '../action/saveForm';
import clearForm from '../action/clearForm'
import { connect } from 'react-redux'

class FormContainer extends PureComponent {

  state = {
    name: this.props.name,
    surname: this.props.surname,
    lastname: this.props.lastname,
    age: this.props.age,
    address: this.props.address,
    job: this.props.job,
    post: this.props.post
  };

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const Employee = {
      name: this.state.name,
      surname: this.state.surname,
      lastname: this.state.lastname,
      age: this.state.age,
      address: this.state.address,
      job: this.state.job,
      post: this.state.post
    };
    this.props.dispatch(saveForm(this.state.name, this.state.surname, this.state.lastname, this.state.age, this.state.address, this.state.job, this.state.post))
  }


  handleClearForm = () => {
    this.setState({
      name: "",
      surname: "",
      lastname: "",
      age: "",
      address: "",
      job: "",
      post: ""
    });
    this.props.dispatch(clearForm(this.state.name, this.state.surname, this.state.lastname, this.state.age, this.state.address, this.state.job, this.state.post))
  }

  render() {
    return (
      <div>
        <ul>
          <li><NavLink to="/">Personal information</NavLink></li>
        </ul>
        <form onSubmit={this.handleFormSubmit}>
          <Input
            inputType="text"
            title={"Name"}
            name={"name"}
            value={this.state.name}
            placeholder={"Enter your name"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="text"
            title={"Surname"}
            name={"surname"}
            value={this.state.surname}
            placeholder={"Enter your surname"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="text"
            title={"Lastname"}
            name={"lastname"}
            value={this.state.lastname}
            placeholder={"Enter your lastname"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="number"
            name={"age"}
            title={"Age"}
            value={this.state.age}
            placeholder={"Enter your age"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="text"
            name={"address"}
            title={"Address"}
            value={this.state.address}
            placeholder={"Enter your address"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="text"
            name={"job"}
            title={"Job"}
            value={this.state.job}
            placeholder={"Enter your job"}
            handleChange={this.handleInput}
          />
          <Input
            inputType="text"
            name={"post"}
            title={"Post"}
            value={this.state.post}
            placeholder={"Enter your post"}
            handleChange={this.handleInput}
          />
          <Button handleClick={this.handleFormSubmit} title={"SAVE"} type="button">
          </Button>
          <Button
            handleClick={this.handleClearForm}
            type={"secondary"}
            title={"Clear"}
          />
        </form>
        <div>
          {Object.keys(this.state).map(key => <p key={key}>{`${key}: ${this.state[key]}`}</p>)}
        </div>
      </div>
    )
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
})(FormContainer)
