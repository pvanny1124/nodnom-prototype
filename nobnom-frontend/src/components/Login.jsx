import React, { Component } from 'react';
import {Redirect, Link, withRouter} from 'react-router-dom'
import '../css/Login.css'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: "",
            password: "",
            exists: false
        }
    }

    handleEmailChange(event){
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event){
        this.setState({password: event.target.value});
    }


    handleSubmit(event){
        event.preventDefault();
        fetch("/login", {
            method: "post",
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(user => {

            //check if the user is either a user or a vendor... 
            if(user.isUser){

                //Save user in App.js state

                //create new user object with the old keys but add the isUser field as well
                //to let the client know that this is a user.
                let user = Object.assign({}, user.userData, {isUser: true});
                this.props.getUser(user);

                //Get user's id to pass into url
                let userId = user.id;
                let userRoute = `/user/${userId}/dashboard`;

                //Bring the user to their dashboard on the client
                this.props.history.push(userRoute);

            } else if(user.isVendor){

                //Save user (vendor) data in App.js state

                //create new vendor object with the old keys but add the isUser field as well
                //to let the client know that this is a user.
                let vendor = Object.assign({}, user.vendorData, {isVendor: true});
                this.props.getUser(vendor);

                //Get user's id to pass into vendorRoute url
                let vendorId = vendor.id;
                let vendorRoute = `/vendor/${vendorId}/dashboard`;

                //Bring the vendor to their dashboard on the client
                this.props.history.push(vendorRoute);
            }
        })
        .catch(error => {

            //If the guest is not a user or a vendor... They do not have an account.
            //Display "password entered does not match email" to throw away pesky hackers. :)
            this.setState({exists: true})
        })
    }

    render() { 
     
        return ( 

                <form className="login_container" onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="login_form">
                    { this.state.exists && <div> The password you entered does not match the email provided </div>}
                    <div className="login_title">
                        <h1>Log In</h1>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" name="email" placeholder="email" required onChange={(event) => this.handleEmailChange(event)}/>
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="password" name="password" placeholder="Password" required onChange={(event) => this.handlePasswordChange(event)}/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="login-btn btn btn-dark">Log In</button>
                    </div>
                        <Link className="not-user" to="/signup/users">Not a user? Create an account here!</Link>
                    </div>
                    <div>
                        <Link className="not-user" to="/signup/vendors">Want to enroll as a Vendor? Create your business' account here!</Link>
                    </div>
                </form>
        
         );
    }
}
 
export default withRouter(Login);