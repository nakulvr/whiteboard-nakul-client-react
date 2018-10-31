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

    // componentDidUpdate(prevProps) {
    //     console.log(this.props.course);
    // }

    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {
                        this.props.lessons.map((lesson, index) => {
                            // console.log(this.props.selectedLesson.id, lesson.id);
                            return <LessonTab
                             selected={this.props.selectedLesson.id === lesson.id}
                             selectLesson={this.props.selectLesson}
                             deleteLesson={this.props.deleteLesson}
                             selectDefaultLesson={this.props.selectDefaultLesson}
                             updateLessonTitle={this.props.updateLessonTitle}
                             selectedModule={this.props.selectedModule}
                             course={this.props.course}
                             lesson={lesson}
                             key={index}
                            />}
                        )
                    }
                    <span className="form-inline my-2 mx-2 my-lg-0">
                        <input
                            className="form-control mr-sm-2"
                            placeholder="New Lesson"
                            aria-label="Search" onChange={this.formChanged}
                        />
                            <button className="btn btn-outline-primary my-sm-0"
                                    onClick={() => {this.props.addLesson(this.props.course.id,
                                        this.props.selectedModule.id, this.state.newLessonTitle);
                                        // this.props.selectModule(this.props.selectedModule)
                                    }
                                    }>
                                Add
                            </button>
                    </span>
                </ul>
            </div>
        );
    }
}