import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UpdateTopic from "./UpdateTopic";

export default class TopicPill extends React.Component {
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
            <span
              className={this.props.selected? "badge badge-pill badge-primary mx-1 my-3" : "badge badge-pill badge-secondary mx-1 my-3"}>
                <span role="button" tabIndex="0"
                   onClick={() => this.props.selectTopic(this.props.topic)}
                   className={this.props.selected ? 'text-white' : 'text-light'}>
                    {this.props.topic.title}
                </span>
                <span
                    onClick={() => {
                        this.props.deleteTopic(this.props.topic);
                        this.props.selectDefaultTopic();
                      }
                    }
                    className="float-right"
                >
                         <FontAwesomeIcon icon="trash-alt" size="1x"/>
                    </span>
                    <span
                        onClick={() => {
                            this.props.selectTopic(this.props.topic);
                            this.updateToggle();
                            }
                        }
                        className="float-right mx-2"
                    >
                        <FontAwesomeIcon icon="edit" size="1x"/>
                    </span>
                <UpdateTopic
                    edit={this.state.showEditBox}
                    updateTopicTitle={this.props.updateTopicTitle}
                    topic={this.props.topic}
                    updateToggle={this.updateToggle}
                />
            </span>
        );
    }
}