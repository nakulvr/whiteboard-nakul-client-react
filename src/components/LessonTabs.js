import React from 'react'
import LessonTab from './LessonTab'

export default class LessonTabs extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            newLessonTitle : ''
        }
    }

    formChanged = (event) => {
      this.setState({
          newLessonTitle : event.target.value
      })
    };

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {
                        this.props.lessons.map((lesson, index) =>
                            <LessonTab
                             selected={this.props.selectedLesson === lesson}
                             selectLesson={this.props.selectLesson}
                             deleteLesson={this.props.deleteLesson}
                             selectDefaultLesson={this.props.selectDefaultLesson}
                             updateLessonTitle={this.props.updateLessonTitle}
                             selectedModule={this.props.selectedModule}
                             course={this.props.course}
                             lesson={lesson}
                             key={index}
                            />
                        )
                    }
                    <span className="form-inline my-2 mx-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            placeholder="New Lesson"
                            aria-label="Search" onChange={this.formChanged}
                        />
                            <button className="btn btn-outline-primary my-sm-0"
                                    onClick={() => this.props.addLesson(this.props.course.id,
                                        this.props.selectedModule.moduleId, this.state.newLessonTitle)}>
                                Add
                            </button>
                    </span>
                </ul>
            </div>
        );
    }
}