import React, {Component} from 'react'
import ModuleList from './ModuleList'
// import {Route} from 'react-router-dom'
import LessonTabs from './LessonTabs'
import TopicPills from "./TopicPills";
// import Switcher from "./Switcher";
import Switch from "react-switch";
import './CourseEditor.style.css'
import widgets from '../reducers/widgets'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import WidgetListContainer from '../containers/WidgetListContainer'
// import ModuleListItem from "./ModuleListItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import CourseServiceSingleton from "../services/CourseServiceSingleton";

const store = createStore(widgets);

export default class CourseEditor extends Component {
    constructor(props) {
        super(props);
        const courseId = this.props.match.params.courseId;
        const course = this.props.courses.find(
            course => course.id.toString() === courseId);
        // console.log(course);
        // console.log(course);
        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0];
        this.state = {
            course: course,
            selectedModule: selectedModule,
            selectedLesson: selectedLesson,
            selectedTopic: selectedTopic,
            checked: false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.courses !== this.props.courses) {
            const courseId = this.props.match.params.courseId;
            const course = this.props.courses.find(
                course => course.id.toString() === courseId);
            if (course.hasOwnProperty('modules')) {
                if(course.modules.length !==0) {
                    const selectedModule = course.modules[0];
                    const selectedLesson = selectedModule.lessons[0];
                    const selectedTopic = selectedLesson.topics[0];
                    this.setState((previousState) => {
                        // console.log(previousState);
                    return {
                        course: course,
                        selectedModule: selectedModule,
                        selectedLesson: selectedLesson,
                        selectedTopic: selectedTopic
                    }
                })
                }
                else{
                    this.props.addModule(course.id, '');
                }
            }
        }
    }

    handleChange(checked) {
        this.setState({checked});
    }

    selectDefaultTopic = () => {
        const selectedLesson = this.state.selectedLesson;
        if(selectedLesson.topics.length === 0) {
            selectedLesson.topics = [{
                id: (new Date()).getTime() + '',
                "title": "New Topic",
                "widgets": []
            }]
        }
        const selectedTopic = selectedLesson.topics[0];
        this.setState(
            {
                selectedTopic: selectedTopic
            }
        )
    };

    selectDefaultLesson = () => {
        // console.log("test");
        const selectedModule = this.state.selectedModule;
        if(selectedModule.lessons.length === 0) {
            selectedModule.lessons = [{
                lessonId: (new Date()).getTime() + '',
                "title": "New Lesson",
                "topics": [
                    {
                        id: (new Date()).getTime() + '',
                        "title": "New Topic",
                        "widgets": []
                    }
                ]
            }];
        }
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0];
        this.setState(
            {
                selectedModule: selectedModule,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic
            }
        )
    };

    selectDefault = (course) => {
        // const courseId = this.props.match.params.courseId;
        // const course = this.props.courses.find(
        //     course => course.id === courseId
        // );
        if(course.modules.length === 0) {
            course.modules = [{
                moduleId: (new Date()).getTime() + '',
                title: "New Module",
                lessons:[{
                    lessonId: (new Date()).getTime() + '',
                    "title": "New Lesson",
                    "topics": [
                        {
                            id: (new Date()).getTime() + '',
                            "title": "New Topic",
                            "widgets": []
                        }
                    ]
                }]
            }];
        }
        const selectedModule = course.modules[0];
        const selectedLesson = selectedModule.lessons[0];
        const selectedTopic = selectedLesson.topics[0];
        this.setState(
            {
                selectedModule: selectedModule,
                selectedLesson: selectedLesson,
                selectedTopic: selectedTopic
            }
        );
    };

    selectLesson = lesson =>
        this.setState({
            selectedLesson: lesson,
            selectedTopic: lesson.topics[0]
        });

    selectModule = module =>
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic: module.lessons[0].topics[0]
        });

    selectTopic = topic =>
        this.setState({
            selectedTopic: topic
            }
        );

    render() {
        // console.log(this.state.selectedModule);
        // console.log(this.state.selectedLesson);
        // let courseList = this.props.findCourse(this.props.match.params.courseId);
        return(
            <div>
                <h2>Course Editor:
                    {this.state.course.title}
                    ({this.props.match.params.courseId})
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList
                            selectModule={this.selectModule}
                            selectedModule={this.state.selectedModule}
                            deleteModule={this.props.deleteModule}
                            addModule={this.props.addModule}
                            modules={this.state.course.modules}
                            course={this.state.course}
                            selectDefault={this.selectDefault}
                            updateModuleTitle={this.props.updateModuleTitle}
                        />
                    </div>
                    <div className="col-8">
                        <LessonTabs
                            selectLesson={this.selectLesson}
                            selectedLesson={this.state.selectedLesson}
                            selectedModule={this.state.selectedModule}
                            lessons={this.state.selectedModule.lessons}
                            addLesson={this.props.addLesson}
                            deleteLesson={this.props.deleteLesson}
                            selectDefaultLesson={this.selectDefaultLesson}
                            course={this.state.course}
                            updateLessonTitle={this.props.updateLessonTitle}
                        />
                        <TopicPills
                            selectTopic={this.selectTopic}
                            selectedLesson={this.state.selectedLesson}
                            selectedModule={this.state.selectedModule}
                            selectedTopic={this.state.selectedTopic}
                            topics={this.state.selectedLesson.topics}
                            lesson={this.state.selectedLesson}
                            addTopic={this.props.addTopic}
                            deleteTopic={this.props.deleteTopic}
                            updateTopicTitle={this.props.updateTopicTitle}
                            selectDefaultTopic={this.selectDefaultTopic}
                            course={this.state.course}
                        />
                        <div className="col-10">
                            <span className="float-right mt-2 mb-5">
                                {/*<Switcher />*/}
                                <label htmlFor="normal-switch">
                                    <Switch
                                        onChange={this.handleChange}
                                        checked={this.state.checked}
                                        id="normal-switch"
                                    />
                                </label>
                            </span>
                            <h2 className="float-right mr-2 mb-5"> Preview: </h2>
                            <span>
                                <button type="button " className="btn btn-success float-right mx-2">Save</button>
                            </span>
                        </div>
                        {/*<div className="col-10 widget-top">*/}
                            {/*<Provider store={store}>*/}
                                {/*/!*<WidgetListContainer widgetsInit={this.state.selectedTopic.widgets}/>*!/*/}
                                {/*<WidgetListContainer*/}
                                    {/*// courseService = {this.props.courseService}*/}
                                    {/*topic={this.state.selectedTopic}*/}
                                    {/*checked={this.state.checked}*/}
                                    {/*widgetsInit={this.state.selectedTopic.widgets}*/}
                                {/*/>*/}
                            {/*</Provider>*/}
                        {/*</div>*/}
                            <div className="card first-widget">
                                <div className="card-header">
                                    <span className="nav">
                                        <h4 className="widget-header">
                                            Heading widget
                                        </h4>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-up" color="orange" size="2x"/>
                                        </span>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-down" color="orange" size="2x"/>
                                        </span>
                                        <span className="ml-2 float-right">
                                                <select className="form-control mr-sm-2 float-right">
                                                    <option value="HEADING">
                                                        Heading
                                                    </option>
                                                    <option value="LIST">
                                                        List
                                                    </option>
                                                    <option value="LINK">
                                                        Link
                                                    </option>
                                                    <option value="IMAGE">
                                                        Image
                                                    </option>
                                                    <option value="PARAGRAPH">
                                                        Paragraph
                                                    </option>
                                                </select>
                                        </span>
                                    <span>
                                        <FontAwesomeIcon icon="times-circle" color="red" size="2x"/>
                                    </span>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <input className="col-lg-12 form-control px-1"
                                           placeholder="Heading text"/>
                                    <select className="col-lg-12 form-control mt-2 px-1">
                                        <option value="HEADING1">
                                            Heading 1
                                        </option>
                                        <option value="HEADING2">
                                            Heading 2
                                        </option>
                                        <option value="HEADING3">
                                            Heading 3
                                        </option>
                                    </select>
                                    <input className="col-lg-12 form-control mt-2 px-1"
                                           placeholder="Widget Name"/>
                                    <h5 className="card-title mt-2">Preview</h5>
                                    <h3>Heading text</h3>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <span className="nav">
                                        <h4 className="widget-header">
                                            Paragraph widget
                                        </h4>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-up" color="orange" size="2x"/>
                                        </span>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-down" color="orange" size="2x"/>
                                        </span>
                                        <span className="ml-2 float-right">
                                                <select className="form-control mr-sm-2 float-right">
                                                    <option value="HEADING">
                                                        Heading
                                                    </option>
                                                    <option value="LIST">
                                                        List
                                                    </option>
                                                    <option value="LINK">
                                                        Link
                                                    </option>
                                                    <option value="IMAGE">
                                                        Image
                                                    </option>
                                                    <option value="PARAGRAPH">
                                                        Paragraph
                                                    </option>
                                                </select>
                                        </span>
                                    <span>
                                        <FontAwesomeIcon icon="times-circle" color="red" size="2x"/>
                                    </span>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <textarea className="form-control col-lg-12" defaultValue="Lorem Ipsum"/>
                                    <input className="col-lg-12 form-control mt-2 px-1"
                                           placeholder="Widget Name"/>
                                        <h5 className="card-title mt-2">Preview</h5>
                                        <p className="card-text">Lorem Ipsum</p>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <span className="nav">
                                        <h4 className="widget-header">
                                            List widget
                                        </h4>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-up" color="orange" size="2x"/>
                                        </span>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-down" color="orange" size="2x"/>
                                        </span>
                                        <span className="ml-2 float-right">
                                                <select className="form-control mr-sm-2 float-right">
                                                    <option value="HEADING">
                                                        Heading
                                                    </option>
                                                    <option value="LIST">
                                                        List
                                                    </option>
                                                    <option value="LINK">
                                                        Link
                                                    </option>
                                                    <option value="IMAGE">
                                                        Image
                                                    </option>
                                                    <option value="PARAGRAPH">
                                                        Paragraph
                                                    </option>
                                                </select>
                                        </span>
                                    <span>
                                        <FontAwesomeIcon icon="times-circle" color="red" size="2x"/>
                                    </span>
                                    </span>
                                </div>
                                <div className="card-body">
                    <textarea className="form-control col-lg-12" defaultValue="Put each item in a separate row"/>

                                    <select className="col-lg-12 form-control mt-2 px-1">
                                        <option value="UN-ORL">
                                            Unordered list
                                        </option>
                                        <option value="ORL">
                                            Ordered list
                                        </option>
                                    </select>
                                    <input className="col-lg-12 form-control mt-2 px-1"
                                           placeholder="Widget Name"/>
                                        <h5 className="card-title mt-2">Preview</h5>
                                        <ul>
                                            <li>
                                                Put each
                                            </li>
                                            <li>
                                                item in
                                            </li>
                                            <li>
                                                a separate row
                                            </li>
                                        </ul>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header">
                                    <span className="nav">
                                        <h4 className="widget-header">
                                            Image widget
                                        </h4>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-up" color="orange" size="2x"/>
                                        </span>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-down" color="orange" size="2x"/>
                                        </span>
                                        <span className="ml-2 float-right">
                                                <select className="form-control mr-sm-2 float-right">
                                                    <option value="HEADING">
                                                        Heading
                                                    </option>
                                                    <option value="LIST">
                                                        List
                                                    </option>
                                                    <option value="LINK">
                                                        Link
                                                    </option>
                                                    <option value="IMAGE">
                                                        Image
                                                    </option>
                                                    <option value="PARAGRAPH">
                                                        Paragraph
                                                    </option>
                                                </select>
                                        </span>
                                    <span>
                                        <FontAwesomeIcon icon="times-circle" color="red" size="2x"/>
                                    </span>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <input className="col-lg-12 form-control px-1" id="link"
                                           placeholder="https://loremflickr.com/g/320/240/paris"/>
                                        <input className="col-lg-12 form-control mt-2 px-1"
                                               placeholder="Widget Name"/>
                                            <h5 className="card-title mt-2">Preview</h5>
                                            <img className="col-lg-8 mt-2"
                                                 src="https://loremflickr.com/g/320/240/paris" alt=''/>
                                </div>
                            </div>
                            <div className="card mt-3 mb-2">
                                <div className="card-header">
                                    <span className="nav">
                                        <h4 className="widget-header">
                                            Link widget
                                        </h4>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-up" color="orange" size="2x"/>
                                        </span>
                                        <span className="mr-2">
                                            <FontAwesomeIcon icon="arrow-alt-circle-down" color="orange" size="2x"/>
                                        </span>
                                        <span className="ml-2 float-right">
                                                <select className="form-control mr-sm-2 float-right">
                                                    <option value="HEADING">
                                                        Heading
                                                    </option>
                                                    <option value="LIST">
                                                        List
                                                    </option>
                                                    <option value="LINK">
                                                        Link
                                                    </option>
                                                    <option value="IMAGE">
                                                        Image
                                                    </option>
                                                    <option value="PARAGRAPH">
                                                        Paragraph
                                                    </option>
                                                </select>
                                        </span>
                                    <span>
                                        <FontAwesomeIcon icon="times-circle" color="red" size="2x"/>
                                    </span>
                                    </span>
                                </div>
                                <div className="card-body">
                                    <input className="col-lg-12 form-control px-1" id="link1"
                                           placeholder="https://loremflickr.com/g/320/240/paris"/>
                                        <input className="col-lg-12 form-control mt-2 px-1"
                                               placeholder="Link text"/>
                                            <input className="col-lg-12 form-control mt-2 px-1"
                                                   placeholder="Widget Name"/>
                                                <h5 className="card-title mt-2">Preview</h5>
                                                <a className="mt-2" href="https://loremflickr.com/g/320/240/paris">Link
                                                    text</a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}