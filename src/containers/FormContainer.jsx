import React, { PureComponent } from "react";

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";
import {NavLink} from "react-router-dom";

class FormContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "Ivan",
                surname: "Vania",
                lastname: "Ivanovich",
                age: "7",
                address: "Lenengrad",
                job: "Ivan",
                post: "Vanusha"
            },
        };
        this.handleName = this.handleName.bind(this);
        this.handleSurname = this.handleSurname.bind(this);
        this.handleLastname = this.handleLastname.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleJob = this.handleJob.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleName(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},);
   /*     let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        ); */
    }

    handleSurname(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleLastname(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    name: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleAge(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    age: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleInput(e) {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    [name]: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleAddress(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    address: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleJob(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    job: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handlePost(e) {
        let value = e.target.value;
        this.setState(
            prevState => ({
                newUser: {
                    ...prevState.newUser,
                    post: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        const Employee = {
            name: this.state.newUser.name,
            surname: this.state.newUser.surname,
            lastname: this.state.newUser.lastname,
            age: this.state.newUser.age,
            address: this.state.newUser.address,
            job: this.state.newUser.job,
            post: this.state.newUser.post
        };
        console.log(JSON.stringify(Employee));
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newUser: {
                name: "",
                surname: "",
                lastname: "",
                age: "",
                address: "",
                job: "",
                post: ""
            }
        });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Name"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Enter your name"}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    inputType={"text"}
                    title={"Surname"}
                    name={"surname"}
                    value={this.state.newUser.surname}
                    placeholder={"Enter your surname"}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    inputType={"text"}
                    title={"Lastname"}
                    name={"lastname"}
                    value={this.state.newUser.lastname}
                    placeholder={"Enter your lastname"}
                    handleChange={this.handleInput}
                />{" "}
                <Input
                    inputType={"number"}
                    name={"age"}
                    title={"Age"}
                    value={this.state.newUser.age}
                    placeholder={"Enter your age"}
                    handleChange={this.handleAge}
                />{" "}
                <TextArea
                    title={"Address"}
                    rows={2}
                    value={this.state.newUser.address}
                    name={"address"}
                    handleChange={this.handleAddress}
                    placeholder={"Enter your address"}
                />
                <TextArea
                    title={"Job"}
                    rows={2}
                    value={this.state.newUser.job}
                    name={"job"}
                    handleChange={this.handleJob}
                    placeholder={"Enter your job"}
                />
                <TextArea
                    title={"Post"}
                    rows={2}
                    value={this.state.newUser.post}
                    name={"post"}
                    handleChange={this.handlePost}
                    placeholder={"Enter your post"}
                />
                <Button onClick={this.handleFormSubmit} title={"SAVE"}>
                </Button>{" "}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                />{" "}
                <button>
                    <NavLink to="/Information">UNDO</NavLink>
                </button>
            </form>
                <div>
                    <p>Name: {this.state.newUser.name}</p>
                    <p>Surname: {this.state.newUser.surname}</p>
                    <p>Lastname: {this.state.newUser.lastname}</p>
                    <p>Age: {this.state.newUser.age}</p>
                    <p>Address: {this.state.newUser.address}</p>
                    <p>Job: {this.state.newUser.job}</p>
                    <p>Post: {this.state.newUser.post}</p>
                </div>
        </div>
        )
    }
}

export default FormContainer;
