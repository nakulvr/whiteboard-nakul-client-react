import React from 'react'
import ReactDOM from 'react-dom'
// import HelloWorld from './components/HelloWorld'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import WhiteBoard from './components/WhiteBoard'
import '../node_modules/font-awesome/css/font-awesome.min.css';
// import CourseService from "./services/CourseService";

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faBars, faListUl, faFileAlt, faEdit, faTrashAlt, faEye, faArrowAltCircleUp,
    faArrowAltCircleDown, faTimesCircle, faPlusCircle, faPlusSquare, faArrowUp, faArrowDown, faTimes}
    from '@fortawesome/free-solid-svg-icons'

import HomePage from "./components/HomePage";

library.add(faThLarge, faBars, faListUl, faFileAlt, faEdit, faTrashAlt, faEye, faArrowAltCircleUp, faArrowAltCircleDown,
    faTimesCircle, faPlusCircle, faPlusSquare, faArrowUp, faArrowDown, faTimes);

ReactDOM.render(
    /*<h1>Hello World!</h1>,*/
    <div className="container-fluid">
        {/*<WhiteBoard/>*/}
        <HomePage/>
    </div>,
    document.getElementById("root")
);