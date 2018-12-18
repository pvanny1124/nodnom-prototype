import React, { Component } from 'react';
import {Link, Route, Redirect, withRouter} from 'react-router-dom';


class SignupAsUser extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            password: "",
            username: "",
            age: "",
            country: "",
            wrongPassword: false,
            emailExists: false,
            usernameExists: false
        }
    }

    handleFirstNameChange(event){
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value});
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handleAgeChange(event){
        this.setState({age: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }

    handleCountryChange(event){
        this.setState({country: event.target.value});
    }

    handleUsernameChange(event){
        this.setState({username: event.target.value});
    }

    handleSubmit(event){
        event.preventDefault();
        //make request to backend api to signup user
        fetch("/signup/users", {
            method: "post",
            headers: new Headers({
              'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                firstName: this.state.firstName, 
                lastName: this.state.lastName,
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                age: this.state.age,
                country: this.state.country
            })
          })
          .then((response) => {
                console.log(response);
                return response.json();
          })

          .then((message) => {
              console.log(message);

              //authenticate user in the backend to save them in "session," or in this case, our app.js' state...
              if(message.userCreated){
                    fetch("/login", {
                        method: "post",
                        headers: new Headers({
                            "Content-Type": "application/json"
                        }),
                        body: JSON.stringify({
                            email: this.state.email,
                            password: this.state.password
                        })
                    })
                    .then(response => {
                        console.log(response)
                        if(response === 200){
                            console.log("successfully authenticated user");
                        }
                    })
                    .then(() => {

                        //Save user in App.js state
                        this.props.getUser(message.userData);

                        //Get user's id to pass into url
                        let userId = message.userData.id;
                        let userRoute = `/user/${userId}/dashboard`;

                        //Bring the user to their dashboard on the client
                        this.props.history.push(userRoute);
                    })
                    
              } 
          })
          .catch((err) => {
              
          })
    }
    render(){
        return (
            
            <form onSubmit={(event) => this.handleSubmit(event)} className="signup_container">
                <div className="signup_form">

                <div class="login_title">
                    <h1>Sign Up</h1>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="first_name" placeholder="First Name" onChange={(event) => this.handleFirstNameChange(event)}/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="last_name" placeholder="Last Name" onChange={(event) => this.handleLastNameChange(event)} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Username" onChange={(event) => this.handleUsernameChange(event)} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="email" placeholder="Email" onChange={(event) => this.handleEmailChange(event)} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={(event) => this.handlePasswordChange(event)} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="age" placeholder="Age" onChange={(event) => this.handleAgeChange(event) }/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="country" placeholder="Country" onChange={(event) => this.handleCountryChange(event)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-dark">Sign Up</button>
                </div>
                <Link className="not-user" to="/login">Already a user? Log in here.</Link>
                </div>
            </form>
        );
    }
    
}

export default withRouter(SignupAsUser);;