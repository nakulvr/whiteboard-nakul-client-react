import React, {Component} from 'react'
import Login from "./Login";
import Register from "./Register";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import WhiteBoard from "./WhiteBoard";
import UserServiceSingleton from "../services/UserServiceSingleton";
import Profile from "./Profile";
export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin : true,
            showWhiteBoard : false,
            showProfile : false,
            userId : ''
        }
    }

    setUserId = (userId) => {
        this.setState({
            userId : userId
        })
    };

    loginToggle = () => {
        this.setState(
            prevState => ({
                showLogin: !prevState.showLogin
            })
        )
    };

    whiteBoardToggle = () => {
        this.setState(
            prevState => ({
                showWhiteBoard: !prevState.showWhiteBoard
            })
        )
    };

    profileToggle = () => {
        this.setState(
            prevState => ({
                showProfile: !prevState.showProfile
            })
        )
    };


    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary">
                    {!this.state.showLogin && (this.state.showWhiteBoard || this.state.showProfile) &&
                        <span>
                            <button type="button"
                                    className="btn btn-primary btn-lg"
                                    onClick={ () => {
                                        this.whiteBoardToggle();
                                        this.profileToggle();
                                    }
                                    }>Profile</button>
                            <a href="../../public/index.html">
                                <button type="button"
                                        className="btn btn-primary btn-lg mx-2"
                                        onClick={() => {
                                            UserServiceSingleton.userLogout();
                                            // this.loginToggle();
                                            // this.whiteBoardToggle();
                                            }
                                        }>Logout
                                </button>
                            </a>
                        </span>}
                    {!this.state.showWhiteBoard && !this.state.showProfile && <FontAwesomeIcon icon="bars" color="white"/>}
                    <a className="navbar-brand justify-content-center" href="../../public/index.html">Course Manager</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <FontAwesomeIcon icon="plus-circle" size='2x' inverse={true}/>
                    </form>
                </nav>
                {this.state.showLogin ? <Login loginToggle={this.loginToggle} whiteBoardToggle={this.whiteBoardToggle}
                                               setUserId={this.setUserId}/>
                    : !this.state.showWhiteBoard && !this.state.showProfile && <Register loginToggle={this.loginToggle}/>}
                {!this.state.showLogin && this.state.showWhiteBoard && !this.state.showProfile &&
                <WhiteBoard userId={this.state.userId}/>
                }
                {!this.state.showLogin && !this.state.showWhiteBoard && this.state.showProfile &&
                <Profile profileToggle={this.profileToggle}
                         whiteBoardToggle={this.whiteBoardToggle}/>
                }
            </div>
        );
    }
}