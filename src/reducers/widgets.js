import CourseServiceSingleton from '../services/CourseServiceSingleton'

const widgets = (state = {widgets:[]}, action) => {
  switch (action.type) {
      // case "INIT":
      //     // console.log(action);
      //     return {
      //         // widgets: action.courseService.findWidgetsForTopic(action.topic),
      //         widgets: CourseServiceSingleton.findWidgetsForTopic(action.topic),
      //         selectedTopic: action.topic
      //         // courseService: action.courseService
      //     };
      case 'LOAD_WIDGETS':
          return{
            widgets: action.widgets
          };
      case "DELETE_WIDGET":
          // console.log(state);
          // state.courseService.deleteWidget(state.selectedTopic, action.widget);
          CourseServiceSingleton.deleteWidget(state.selectedTopic, action.widget);
          // const newWidgets = state.courseService.findWidgetsForTopic(state.selectedTopic);
          const newWidgets = CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic);
          return {
              // widgets: state.widgets.filter(widget => widget !== action.widget)
              widgets: newWidgets.slice(0),
              selectedTopic: state.selectedTopic
              // courseService: state.courseService
          };

      case "UPDATE_WIDGET":
          CourseServiceSingleton.updateWidget(state.selectedTopic, action.widget);
          return {
              widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
              selectedTopic: state.selectedTopic
          };
      case "CREATE_WIDGET":
          CourseServiceSingleton.addWidget(state.selectedTopic);
          return {
            widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
            selectedTopic: state.selectedTopic
          };
      case "MOVE_WIDGET_UP":
          // CourseServiceSingleton.moveWidgetUp(state.selectedTopic, action.widget);
          const index = action.widgets.findIndex(widget => widget.id === action.widget.id);
          let temp = action.widgets[index];
          action.widgets[index] = action.widgets[index - 1];
          action.widgets[index - 1] = temp;
          return{
              // widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
              // selectedTopic: state.selectedTopic
              widgets: action.widgets
          };
      case "MOVE_WIDGET_DOWN":
          const index1 = action.widgets.findIndex(widget => widget.id === action.widget.id);
          let temp1 = action.widgets[index1];
          action.widgets[index1] = action.widgets[index1 + 1];
          action.widgets[index1 + 1] = temp1;
          return{
              // widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
              // selectedTopic: state.selectedTopic
              widgets: action.widgets
          };
      case "FIND_WIDGET":
          return{
              widgets: CourseServiceSingleton.findWidget(action.widget).slice(0),
              selectedTopic: state.selectedTopic
          };
      case "FIND_ALL_WIDGETS_FOR_TOPIC":
          return{
              widgets: CourseServiceSingleton.findWidgetsForTopic(state.selectedTopic).slice(0),
              selectedTopic: state.selectedTopic
          };
      case "FIND_ALL_WIDGETS":
          return{
              widgets: CourseServiceSingleton.findAllWidgets(state).slice(0),
              selectedTopic: state.selectedTopic
          };
      default:
          // console.log(state);
          return state
  }
};

export default widgets