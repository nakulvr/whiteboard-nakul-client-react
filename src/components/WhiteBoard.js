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
        // this.courseService = new CourseService();
        this.state = {
            // courses: this.courseService.findAllCourses()
            courses : CourseServiceSingleton.findAllCourses()
        }
    }

    addCourse = newCourse => {
        // this.courseService.createCourse(newCourse);
        CourseServiceSingleton.createCourse(newCourse);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    deleteCourse = courseToDelete => {
        // this.courseService.deleteCourse(courseToDelete.id);
        CourseServiceSingleton.deleteCourse(courseToDelete.id);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    deleteModule = module => {
        // this.courseService.deleteModule(module);
        CourseServiceSingleton.deleteModule(module);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    deleteLesson = lesson => {
      // this.courseService.deleteLesson(lesson);
      CourseServiceSingleton.deleteLesson(lesson);
      this.setState({
            // courses: this.courseService.findAllCourses()
          courses: CourseServiceSingleton.findAllCourses()
      })
    };

    deleteTopic = topic => {
      // this.courseService.deleteTopic(topic);
        CourseServiceSingleton.deleteTopic(topic);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    addModule = (courseId, module) => {
      // this.courseService.addModule(courseId, module);
        CourseServiceSingleton.addModule(courseId, module);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    addLesson = (courseId, moduleId, lesson) => {
      // this.courseService.addLesson(courseId, moduleId, lesson);
        CourseServiceSingleton.addLesson(courseId, moduleId, lesson);
      this.setState({
          // courses: this.courseService.findAllCourses()
          courses: CourseServiceSingleton.findAllCourses()
      })
    };

    addTopic = (lesson, topicToAdd) => {
        // this.courseService.addTopic(lesson, topicToAdd);
        CourseServiceSingleton.addTopic(lesson, topicToAdd);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    updateModuleTitle = (courseId, moduleId, module) => {
      // this.courseService.updateModuleTitle(courseId, moduleId, module);
      CourseServiceSingleton.updateModuleTitle(courseId, moduleId, module);
      this.setState({
          // courses: this.courseService.findAllCourses()
          courses: CourseServiceSingleton.findAllCourses()
      })
    };

    updateLessonTitle = (courseId, moduleId, lessonId, lesson) => {
        // this.courseService.updateLessonTitle(courseId, moduleId, lessonId, lesson);
        CourseServiceSingleton.updateLessonTitle(courseId, moduleId, lessonId, lesson);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    updateTopicTitle = (topic, newTopicTitle) => {
        // this.courseService.updateTopicTitle(topic, newTopicTitle);
        CourseServiceSingleton.updateTopicTitle(topic, newTopicTitle);
        this.setState({
            // courses: this.courseService.findAllCourses()
            courses: CourseServiceSingleton.findAllCourses()
        })
    };

    render() {
        return(
          <div>
              {/*<h1>WhiteBoard ({this.state.courses.length})</h1>*/}
              <nav className="navbar navbar-dark bg-primary">
                  <FontAwesomeIcon icon="bars" color="white"/>
                  <a className="navbar-brand justify-content-center" href="../../public/index.html">Course Manager</a>
                  <form className="form-inline">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                          {/*<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                      {/*<span className="fa-layers fa-fw">*/}
                          {/*<FontAwesomeIcon icon={faCircle} size='2x' color="red"/>*/}
                          {/*<FontAwesomeIcon icon={faPlus} size='2x' inverse={true}/>*/}
                      {/*</span>*/}
                      <FontAwesomeIcon icon="plus-circle" size='2x' inverse={true}/>
                  </form>
              </nav>
              {/*<CourseTable courses={this.state.courses}/>*/}
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
                                findCourse={CourseServiceSingleton.findCourseById}
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

              {/*<ModuleList/>*/}
              {/*<div className="card-deck">*/}
                  {/*{*/}
                      {/*// just one argument no need of parenthesis*/}
                      {/*this.props.courses.map((course, index) => (*/}
                           {/*<CourseCard*/}
                               {/*key={index}*/}
                               {/*title={course.title}/>*/}
                      {/*))*/}
                  {/*}*/}
              {/*</div>*/}
          </div>
        );
    }
}