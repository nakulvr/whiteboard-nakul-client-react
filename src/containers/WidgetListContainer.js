// import React from 'react'
import WidgetList from '../components/WidgetList'
import {connect} from 'react-redux'
// import widgets from "../reducers/widgets";

const stateToPropertyMapper = state => {
    // console.log(state);
    return ({
        // topic: state.topic,
        widgets: state.widgets
        // courseService: state.CourseService
    })
};

const dispatcherToPropertyMapper = dispatch => ({
    loadWidgets: (topicId) => {
        let url = "https://whiteboard-nakul-server-java.herokuapp.com/api/topic/"+ topicId + "/widget";
        // console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
   // init: (widget, topic) => dispatch({
   //     type: 'INIT',
   //     widgets: widget,
   //     topic: topic,
   //     // courseService: courseService
   // }),
   // deleteWidget: (widget) => dispatch({
   //     type: 'DELETE_WIDGET',
   //     widget: widget
   // }),
    deleteWidget: (widget) => {
        let url = "https://whiteboard-nakul-server-java.herokuapp.com/api/widget/" + widget.id;
        fetch(url,
            {method : 'DELETE'})
            .then(response => response.json())
            .then(widgets => dispatch({
                type: 'LOAD_WIDGETS',
                widgets: widgets
                })
            )
    },
   // updateWidget: widget => dispatch({
   //     type: 'UPDATE_WIDGET',
   //     widget: widget
   // }),
    updateWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
            dispatch({
                type: 'LOAD_WIDGETS',
                widgets: widgets
            })
        )
    },
    updateHeadingWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/heading/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    updateImageWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/image/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    updateLinkWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/link/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    updateListWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/list/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    updateParagraphWidget: (topicId, widget) => {
        let url = 'https://whiteboard-nakul-server-java.herokuapp.com/api/topic/'+ topicId +'/paragraph/widget/' + widget.id;
        fetch(url, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    addWidget: (topic) => {
        let url = "https://whiteboard-nakul-server-java.herokuapp.com/api/topic/" + topic.id +"/widget";
        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                "title": "Heading"
            }),
            headers: {'Content-Type': 'application/json'}
        }).then(response => response.json())
            .then(widgets =>
                dispatch({
                    type: 'LOAD_WIDGETS',
                    widgets: widgets
                })
            )
    },
    moveWidgetUp: (topicId, widget) => {
        let url = "https://whiteboard-nakul-server-java.herokuapp.com/api/topic/"+ topicId + "/widget";
        // console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(widgets => dispatch({
                type: 'MOVE_WIDGET_UP',
                widgets: widgets,
                widget: widget
                })
            )
    },
    moveWidgetDown: (topicId, widget) => {
        let url = "https://whiteboard-nakul-server-java.herokuapp.com/api/topic/"+ topicId + "/widget";
        // console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(widgets => dispatch({
                    type: 'MOVE_WIDGET_DOWN',
                    widgets: widgets,
                    widget: widget
                })
            )
    }
});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer