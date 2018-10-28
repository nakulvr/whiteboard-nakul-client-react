import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UpdateLesson from "./UpdateLesson";

export default class LessonTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditBox: false
        }
    }

    updateToggle = () => {
        this.setState(
            prevState => ({
                showEditBox: !prevState.showEditBox
            })
        )
    };
    render() {
        return (
            <li className="nav-item">

                <span
                   className={this.props.selected? "nav-link active" : "nav-link"}>
                    <span
                       onClick={() => this.props.selectLesson(this.props.lesson)}
                       className='text-dark'>
                    {this.props.lesson.title}
                    </span>
                    <span
                        onClick={() => {
                            this.props.deleteLesson(this.props.lesson);
                            this.props.selectDefaultLesson();
                            }
                        }
                        className="float-right"
                    >
                         <FontAwesomeIcon icon="trash-alt" size="1x"/>
                    </span>
                    <span
                        onClick={() => {
                            this.props.selectLesson(this.props.lesson);
                            this.updateToggle();
                            }
                        }
                        className="float-right mx-2"
                    >
                        <FontAwesomeIcon icon="edit" size="1x"/>
                    </span>
                </span>
                <UpdateLesson
                    edit={this.state.showEditBox}
                    updateToggle={this.updateToggle}
                    updateLessonTitle={this.props.updateLessonTitle}
                    selectedModule={this.props.selectedModule}
                    course={this.props.course}
                    lesson={this.props.lesson}
                />
            </li>
        );
    }
}