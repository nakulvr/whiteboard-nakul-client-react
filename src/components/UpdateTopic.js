import React from 'react'

export default class UpdateTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            updateTopicTitle: ''
        }
    }

    formChanged = event => {
        this.setState( {
                updateTopicTitle: event.target.value
            }
        )
    };

    render() {
        if(!this.props.edit){
            return null;
        }
        return(
            <div>
                <div className="input-group mb-3 mt-2">
                    <input type="text"
                           className="form-control"
                           placeholder="New Topic"
                           onChange={this.formChanged}
                    />
                    {/*{console.log(this.state.newModuleTitle)}*/}
                    <div className="input-group-append">
                        <button
                            className="btn btn-success"
                            type="button"
                            onClick={() => {
                                this.props.updateTopicTitle(this.props.topic, this.state.updateTopicTitle);
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
    };
}