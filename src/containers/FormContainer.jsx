import React, { PureComponent } from "react";

import Input from "../components/Input";
import TextArea from "../components/TextArea";
import Button from "../components/Button";

class FormContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: "",
                surname: "",
                lastname: "",
                age: "",
                address: "",
                job: "",
                post: ""
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
                    about: value
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
                    about: value
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
                    about: value
                }
            }),
            () => console.log(this.state.newUser)
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        window.location = 'react-Edit-Form/src/containers/Information.jsx';

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
            <form onSubmit={this.handleFormSubmit}>
                <Input
                    inputType={"text"}
                    title={"Name"}
                    name={"name"}
                    value={this.state.newUser.name}
                    placeholder={"Enter your name"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Name of the user */}
                <Input
                    inputType={"text"}
                    title={"Surname"}
                    name={"surname"}
                    value={this.state.newUser.surname}
                    placeholder={"Enter your surname"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Surname of the user */}
                <Input
                    inputType={"text"}
                    title={"Lastname"}
                    name={"lastname"}
                    value={this.state.newUser.lastname}
                    placeholder={"Enter your lastname"}
                    handleChange={this.handleInput}
                />{" "}
                {/* Lastname of the user */}
                <Input
                    inputType={"number"}
                    name={"age"}
                    title={"Age"}
                    value={this.state.newUser.age}
                    placeholder={"Enter your age"}
                    handleChange={this.handleAge}
                />{" "}
                {/* Age */}
                <TextArea
                    title={"Address"}
                    rows={2}
                    value={this.state.newUser.address}
                    name={"address"}
                    handleChange={this.handleAddress}
                    placeholder={"Enter your address"}
                />
                {/* Address */}
                <TextArea
                    title={"Job"}
                    rows={2}
                    value={this.state.newUser.job}
                    name={"job"}
                    handleChange={this.handleJob}
                    placeholder={"Enter your job"}
                />
                {/* Job */}
                <TextArea
                    title={"Post"}
                    rows={2}
                    value={this.state.newUser.post}
                    name={"post"}
                    handleChange={this.handlePost}
                    placeholder={"Enter your post"}
                />
                {/* Post */}
                <Button
                    action={this.handleFormSubmit}
                    type={"primary"}
                    title={"Save"}
                />{" "}
                {/*Submit */}
                <Button
                    action={this.handleClearForm}
                    type={"secondary"}
                    title={"Clear"}
                />{" "}
                {/* Clear the form */}
            </form>
        );
    }
}

export default FormContainer;
