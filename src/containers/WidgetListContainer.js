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
        let url = "http://localhost:8080/api/topic/"+ topicId + "/widget";
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
        let url = "http://localhost:8080/api/widget/" + widget.id;
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
        let url = 'http://localhost:8080/api/topic/'+ topicId +'/widget/' + widget.id;
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
        let url = "http://localhost:8080/api/topic/" + topic.id +"/widget";
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
    moveWidgetUp: widget => dispatch({
        type: 'MOVE_WIDGET_UP',
        widget: widget
    }),
    moveWidgetDown: widget => dispatch({
        type: 'MOVE_WIDGET_DOWN',
        widget: widget
    })
});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetList);

export default WidgetListContainer