import React, {Component} from 'react'
import UserServiceSingleton from "../services/UserServiceSingleton";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

        usernameChanged = (event) => {
            let user = this.state.user;
            user.username = event.target.value;
            this.setState({user: user})
        };

        passwordChanged = (event) => {
            let user = this.state.user;
            user.password = event.target.value;
            this.setState({user: user});
            // console.log(this.state.user)
        };

    render() {
        return (
            <div>
                {/*<nav className="navbar navbar-dark bg-primary">*/}
                    {/*<FontAwesomeIcon icon="bars" color="white"/>*/}
                    {/*<a className="navbar-brand justify-content-center" href="../../public/index.html">Course Manager</a>*/}
                    {/*<form className="form-inline">*/}
                        {/*<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>*/}
                        {/*<FontAwesomeIcon icon="plus-circle" size='2x' inverse={true}/>*/}
                    {/*</form>*/}
                {/*</nav>*/}
                <span>
                    <div className="col-3">
                        <label htmlFor="text" className="my-2"><h4> Username </h4></label>
                        <input className="form-control mb-2" type="text"
                               placeholder="username" aria-label="Search"
                               onChange={this.usernameChanged}/>
                        <label htmlFor="text" className="my-2"><h4> Password </h4></label>
                        <input className="form-control mb-2" type="password"
                               placeholder="password" aria-label="Search"
                                   onChange={this.passwordChanged}/>
                        <button type="button" className="btn btn-primary my-3"
                                onClick={() =>
                                    {
                                    UserServiceSingleton.userLogin(this.state.user).then(data =>
                                    {
                                        if(Object.keys(data).length === 0)
                                            alert('Wrong username or password');
                                        else {
                                            this.props.setUserId(data.id);
                                            this.props.loginToggle();
                                            this.props.whiteBoardToggle();
                                            // console.log(data.courses);
                                        }
                                    })
                                    }
                                }>
                            Login</button>
                        <button type="button" className="btn btn-primary my-3 mx-2" onClick={() => this.props.loginToggle()}>Register</button>
                    </div>
                </span>
            </div>
        );
    };
}