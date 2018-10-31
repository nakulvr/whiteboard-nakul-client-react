let API_URL = "http://localhost:8080/api";
// let API_URL = "https://whiteboard-nakul-server-java.herokuapp.com/api";
export default class UserServiceSingleton {

    static userLogin = user => {
        return (fetch(API_URL + '/login', {
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
        fetch(API_URL + '/logout', {
            headers : {'Content-Type': 'application/x-www-form-urlencoded'},
            credentials: 'include',
            method: 'POST'
        });

    static userRegister = (user) =>
        fetch(API_URL + '/register', {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'POST'
        });

    static getUserProfile = () =>
        fetch(API_URL + '/profile', {
            credentials: 'include',
            method: 'GET'
        }).then(response => response.json());

    static updateUserProfile = (user) =>
        fetch(API_URL + '/profile', {
            body: JSON.stringify(user),
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            method: 'PUT'
        });

    static getUsers = () =>
        fetch(API_URL + '/user').then(response => response.json()).then(data => console.log(data))
    }