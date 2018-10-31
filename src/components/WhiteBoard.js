import React from 'react'
// import CourseCard from "./CourseCard";
// import ModuleList from "./ModuleList";
import CourseGrid from "../containers/CourseGrid";
import CourseTable from "../containers/CourseTable";
import {BrowserRouter as Router, Link, Route}
    from 'react-router-dom'
// import CourseService from "../services/CourseService";
import CourseServiceSingleton from "../services/CourseServiceSingleton"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faCircle, faPlus} from "@fortawesome/free-solid-svg-icons";
import CourseEditor from "./CourseEditor";

export default class WhiteBoard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // courses: this.courseService.findAllCourses()
            courses : []
        }
    }

    componentDidMount() {
        CourseServiceSingleton.findAllCourses(this.props.userId).then(courses => this.setState({
            courses : courses
        }));
    }

    componentDidUpdate(prevProps) {
    if(prevProps.userId !== this.props.userId){
        CourseServiceSingleton.findAllCourses(this.props.userId)
            .then(courses => this.setState({
            courses : courses}));
        }
    }

    addCourse = (newCourse) => {
        // this.courseService.createCourse(newCourse);
        CourseServiceSingleton.createCourse(this.props.userId, newCourse)
            .then(courses => this.setState({
            courses : courses}));
    };

    deleteCourse = courseToDelete => {
        // this.courseService.deleteCourse(courseToDelete.id);
        // CourseServiceSingleton.deleteCourse(courseToDelete.id);
        // this.setState({
        //     // courses: this.courseService.findAllCourses()
        //     courses: CourseServiceSingleton.findAllCourses()
        // })
        CourseServiceSingleton.deleteCourse(this.props.userId, courseToDelete.id)
            .then(courses => this.setState({
                courses : courses}));
    };

    deleteModule = (courseId, module) => {
        // this.courseService.deleteModule(module);
        CourseServiceSingleton.deleteModule(this.props.userId, courseId, module)
            .then(courses => this.setState({
                courses : courses
            }));
        // this.setState({
        //     // courses: this.courseService.findAllCourses()
        //     courses: CourseServiceSingleton.findAllCourses()
        // })
    };

    deleteLesson = (courseId, moduleId, lesson) => {
      // this.courseService.deleteLesson(lesson);
      CourseServiceSingleton.deleteLesson(this.props.userId, courseId, moduleId, lesson)
          .then(courses => this.setState({
              courses: courses
          }));
    };

    deleteTopic = (courseId, moduleId, lessonId, topic) => {
      // this.courseService.deleteTopic(topic);
        CourseServiceSingleton.deleteTopic(this.props.userId, courseId,
            moduleId, lessonId, topic)
            .then(courses => this.setState({
                courses: courses
            }));
    };

    addModule = (courseId, moduleTitle) => {
      // this.courseService.addModule(courseId, module);
      //   CourseServiceSingleton.addModule(courseId, module);
      //   this.setState({
      //       // courses: this.courseService.findAllCourses()
      //       courses: CourseServiceSingleton.findAllCourses()
      //   })
        let module;
        if(moduleTitle === '') {
            module = {
                title: "New Module",
                lessons: [{
                    "title": "New Lesson",
                    "topics": [
                        {
                            "title": "New Topic",
                            "widgets": []
                        }
                    ]
                }]
            }
        }
        else {
            module = {
                title: moduleTitle,
                lessons: [{
                    "title": "New Lesson",
                    "topics": [
                        {
                            "title": "New Topic",
                            "widgets": []
                        }
                    ]
                }]
            }
        }
        CourseServiceSingleton.addModule(this.props.userId, courseId, module)
            .then(courses => {
                this.setState({courses : courses})});
    };

    addLesson = (courseId, moduleId, lessonTitle) => {
      // this.courseService.addLesson(courseId, moduleId, lesson);
        let lesson;
        if(lessonTitle === ''){
          lesson =  {
                "title": "New Lesson",
                "topics": [
                {
                    "title": "New Topic",
                    "widgets": []
                }
            ]
            }
        }
        else {
            lesson = {
                "title": lessonTitle,
                "topics": [
                {
                    "title": "New Topic",
                    "widgets": []
                }
            ]
            }
        }
        CourseServiceSingleton.addLesson(this.props.userId, courseId, moduleId, lesson)
            .then(courses => this.setState({
                courses: courses
            }));
      // this.setState({
      //     // courses: this.courseService.findAllCourses()
      //     courses: CourseServiceSingleton.findAllCourses()
      // })
    };

    addTopic = (courseId, moduleId, lessonId, topicTitle) => {
        // this.courseService.addTopic(lesson, topicToAdd);
        let topic;
        if(topicTitle === '') {
            topic = {
                "title": "New Topic",
                "widgets": []
            }
        }
        else{
            topic = {
                "title": topicTitle,
                "widgets": []
            }
        }
        CourseServiceSingleton.addTopic(this.props.userId, courseId,
            moduleId, lessonId, topic)
            .then(courses => this.setState({
                courses: courses
            }));
    };

    updateModuleTitle = (courseId, module, newTitle) => {
      // this.courseService.updateModuleTitle(courseId, moduleId, module);
        if(newTitle === '')
            newTitle = 'New Module';
        module.title = newTitle;
        CourseServiceSingleton.updateModuleTitle(this.props.userId, courseId, module)
          .then(courses => this.setState({
              courses : courses
          }));
      // this.setState({
      //     // courses: this.courseService.findAllCourses()
      //     courses: CourseServiceSingleton.findAllCourses()
      // })
    };

    updateLessonTitle = (courseId, moduleId, lesson, newTitle) => {
        // this.courseService.updateLessonTitle(courseId, moduleId, lessonId, lesson);
        if(newTitle === '')
            newTitle = 'New Lesson';
        lesson.title = newTitle;
        CourseServiceSingleton.updateLessonTitle(this.props.userId, courseId, moduleId, lesson)
            .then(courses => this.setState({
                courses : courses
            }));
    };

    updateTopicTitle = (courseId, moduleId, lessonId, topic, newTopicTitle) => {
        // this.courseService.updateTopicTitle(topic, newTopicTitle);
        if(newTopicTitle === '')
            newTopicTitle = 'New Topic';
        topic.title = newTopicTitle;
        CourseServiceSingleton.updateTopicTitle(this.props.userId, courseId,
            moduleId, lessonId, topic)
            .then(courses => this.setState({
                courses : courses
            }));
    };

    render() {
        return(
          <div>
              <Router>
                  <div>
                      <ul className="nav justify-content-center my-2">
                          <li className="nav-item">
                              <Link to="/course/table">
                                  <FontAwesomeIcon icon="list-ul" size="2x"/>
                              </Link>
                              <Link to="/course/grid" className="px-2">
                                  <FontAwesomeIcon icon="th-large" size="2x"/>
                              </Link>

                          </li>
                      </ul>
                      <Route path="/course/table" render={() =>
                          <CourseTable
                              addCourse={this.addCourse}
                              deleteCourse={this.deleteCourse}
                              courses={this.state.courses}/>}/>

                      <Route path="/course/grid" render={() => <CourseGrid courses={this.state.courses}/>}/>
                      {/*<CourseGrid/>*/}
                      {/*<CourseTable courses={this.state.courses}/>*/}
                      <Route
                        exact
                        render={(props) =>
                            <CourseEditor
                                {...props}
                                // courseService={this.courseService}
                                addModule={this.addModule}
                                deleteModule={this.deleteModule}
                                courses={this.state.courses}
                                updateModuleTitle={this.updateModuleTitle}
                                addLesson={this.addLesson}
                                deleteLesson={this.deleteLesson}
                                updateLessonTitle={this.updateLessonTitle}
                                addTopic={this.addTopic}
                                deleteTopic={this.deleteTopic}
                                updateTopicTitle={this.updateTopicTitle}
                            />
                        }
                            path="/course/:courseId/edit"
                      />
                  </div>
              </Router>
          </div>
        );
    }
}