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
   init: (widget, topic) => dispatch({
       type: 'INIT',
       widgets: widget,
       topic: topic,
       // courseService: courseService
   }),
   deleteWidget: (widget) => dispatch({
       type: 'DELETE_WIDGET',
       widget: widget
   }),
   updateWidget: widget => dispatch({
       type: 'UPDATE_WIDGET',
       widget: widget
   }),
    addWidget: (topic) => dispatch({
      type: 'CREATE_WIDGET',
      topic: topic
    }),
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