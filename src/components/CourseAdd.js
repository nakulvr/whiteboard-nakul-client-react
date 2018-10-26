import React, {Component} from 'react'

export default class CourseAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    updateForm = event =>
        this.setState({
            title: event.target.value
        });
    render() {
        return(
            <div className="input-group mb-3">
                <input
                    placeholder="New Course"
                    type="text"
                    onChange={this.updateForm}
                    className="form-control"/>
                <div className="input-group-append">
                    <button
                        type="button"
                        onClick={() => this.props.addCourse({
                        id: (new Date()).getTime() + '',
                        title: this.state.title,
                        modules: [{
                            moduleId: (new Date()).getTime() + '',
                            title: "New Module",
                            lessons:[{
                                lessonId: (new Date()).getTime() + '',
                                "title": "New Lesson",
                                "topics": [
                                    {
                                        topicId: (new Date()).getTime() + '',
                                        "title": "New Topic",
                                        "widgets": []
                                    }
                                ]
                            }]
                        }]
                    })}
                    className="btn btn-success">Add</button>
                </div>
            </div>
        )
    }
}