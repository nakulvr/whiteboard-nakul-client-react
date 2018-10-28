let USER_LOGIN_API_URL = "http://localhost:8080/api/login";
let USER_API_URL = "http://localhost:8080/api/user";
let USER_LOGOUT_API_URL = "http://localhost:8080/api/logout";
let USER_REGISTER_API_URL = "http://localhost:8080/api/register";
let USER_PROFILE_API_URL = "http://localhost:8080/api/profile";

export default class UserServiceSingleton {

    static userLogin = user => {
        return (fetch(USER_LOGIN_API_URL, {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST'
        }).then(response => {
                // console.log(response.json());
                return response.text().then(text => {return text ? JSON.parse(text) : {}})
            }
        ))
    };

    static userLogout = () =>
        fetch(USER_LOGOUT_API_URL, {
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            credentials: 'include',
            method: 'POST'
        });

    static userRegister = (user) =>
        fetch(USER_REGISTER_API_URL, {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST'
        });

    static getUserProfile = () =>
        fetch(USER_PROFILE_API_URL, {
            credentials: 'include',
            method: 'GET'
        }).then(response => response.json());

    static getUsers = () =>
        fetch(USER_API_URL).then(response => response.json()).then(data => console.log(data))
    }