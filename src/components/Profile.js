import React, {Component} from 'react'
import UserServiceSingleton from "../services/UserServiceSingleton";

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : {}
        }
    }

    componentDidMount() {
        UserServiceSingleton.getUserProfile().then(
            data => this.setState({user : data})
        );
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

    firstNameChanged = (value) => {
        let user = this.state.user;
        // user.firstName = event.target.value;
        user.firstName = value;
        this.setState({user : user});
    };

    lastNameChanged = (event) => {
        let user = this.state.user;
        user.lastName = event.target.value;
        this.setState({user : user});
    };
    render() {
        let text;
        // console.log(this.state.user);
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
                               value={this.state.user.username} aria-label="Search"
                               readOnly/>
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
                               value={this.state.user.password} aria-label="Search"
                               onChange={this.passwordChanged}/>
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
                               value={this.state.user.firstName} aria-label="Search"
                               onChange={() => {
                                 this.firstNameChanged(text.value)
                               }}
                               ref={node => text = node}
                        />
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
                               value={this.state.user.lastName} aria-label="Search"
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
                                        UserServiceSingleton.updateUserProfile(this.state.user);
                                        this.props.whiteBoardToggle();
                                        this.props.profileToggle();                                    }
                                    }>Save</button>
                        </span>
                        <button type="button" className="btn btn-danger mx-2"
                                onClick={() => {
                                    this.props.whiteBoardToggle();
                                    this.props.profileToggle();
                                }}
                        >Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}