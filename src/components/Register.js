import React, {Component} from 'react'
import UserServiceSingleton from "../services/UserServiceSingleton";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        }
    }

    usernameChanged = (event) => {
        let user = this.state.user;
        user.username = event.target.value;
        this.setState({user : user})
    };

    passwordChanged = (event) => {
        let user = this.state.user;
        user.password = event.target.value;
        this.setState({user : user});
        // console.log(this.state.user)
    };

    firstNameChanged = (event) => {
      let user = this.state.user;
      user.firstName = event.target.value;
      this.setState({user : user});
    };

    lastNameChanged = (event) => {
      let user = this.state.user;
      user.lastName = event.target.value;
      this.setState({user : user});
    };

    render() {

        return (
            <div>
                <div className="row my-3">
                    <div className="col-2">
                        <label htmlFor="text">
                            <h5 className="my-1">Username</h5>
                        </label>
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text"
                               placeholder="username" aria-label="Search"
                               onChange={this.usernameChanged}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2">
                        <label htmlFor="text">
                            <h5 className="my-1">Password</h5>
                        </label>
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="password"
                               placeholder="password" aria-label="Search"
                               onChange={this.passwordChanged}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2">
                        <label htmlFor="text">
                            <h5>Verify Password</h5>
                        </label>
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="password" placeholder="password" aria-label="Search"/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2">
                        <label htmlFor="text">
                            <h5 className="my-1">First-name </h5>
                        </label>
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text"
                               placeholder="first name" aria-label="Search"
                               onChange={this.firstNameChanged}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2">
                        <label htmlFor="text">
                            <h5 className="my-1">Last-name </h5>
                        </label>
                    </div>
                    <div className="col-6">
                        <input className="form-control" type="text"
                               placeholder="last name" aria-label="Search"
                               onChange={this.lastNameChanged}/>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-2">
                    </div>
                    <div className="col-6">
                        <span>
                            <button type="button"
                                    className="btn btn-success mx-auto"
                                    onClick={() => {
                                            UserServiceSingleton.userRegister(this.state.user);
                                            this.props.loginToggle()
                                            }
                                        }>Register</button>
                        </span>
                        <button type="button" className="btn btn-danger mx-2"
                                onClick={() => this.props.loginToggle()}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}