import React from 'react'

export default class UpdateLesson extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateLessonTitle: ''
        }
    }

    formChanged = event => {
        this.setState( {
                updateLessonTitle: event.target.value
            }
        )
    };

    render() {
        if (!this.props.edit) {
                return null;
            }
        return (
            <div>
                <div className="input-group mb-3 mt-2">
                    <input type="text"
                           className="form-control"
                           placeholder="New Lesson"
                           onChange={this.formChanged}
                    />
                    {/*{console.log(this.state.newModuleTitle)}*/}
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => {
                                    this.props.updateLessonTitle(this.props.course.id,
                                    this.props.selectedModule.id,
                                    this.props.lesson,
                                    this.state.updateLessonTitle);
                                    this.props.updateToggle()
                                }
                            }
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}