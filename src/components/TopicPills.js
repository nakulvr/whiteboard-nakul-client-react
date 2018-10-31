import React from 'react'
import TopicPill from "./TopicPill";

export default class TopicPills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newTopicTitle : ''
        }
    }

    formChanged = (event) => {
        this.setState({
            newTopicTitle : event.target.value
        })
    };

    render() {
        return (
            <div>
                <span className="nav">
                    <h4>
                    {
                        this.props.topics.map((topic, index) =>
                        <TopicPill
                            selected={this.props.selectedTopic.id === topic.id}
                            selectTopic={this.props.selectTopic}
                            selectedLesson={this.props.selectedLesson}
                            selectedModule={this.props.selectedModule}
                            course={this.props.course}
                            topic={topic}
                            key={index}
                            deleteTopic={this.props.deleteTopic}
                            updateTopicTitle={this.props.updateTopicTitle}
                            selectDefaultTopic={this.props.selectDefaultTopic}
                        />
                        )
                    }
                        <span className="form-inline my-2 mx-2 my-lg-0 nav-item">
                            <input
                                className="form-control mr-sm-2"
                                placeholder="New Topic"
                                aria-label="Search" onChange={this.formChanged}
                            />
                                <button className="btn btn-outline-primary my-sm-0"
                                    onClick={() => this.props.addTopic(this.props.course.id,
                                        this.props.selectedModule.id, this.props.selectedLesson.id,
                                        this.state.newTopicTitle)}
                                >
                                    Add
                                </button>
                        </span>
                    </h4>
                </span>
            </div>
        );
    }
}