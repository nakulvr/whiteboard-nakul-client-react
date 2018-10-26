import React from 'react'

export default class UpdateModule extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            updateModuleTitle: ''
        }
    }

    formChanged = event => {
        this.setState( {
             updateModuleTitle: event.target.value
            }
        )
    };

    render() {
        if (!this.props.edit) {
            return null;
        }
        return (
            <div className="input-group mb-3 mt-2">
                <input type="text"
                       className="form-control"
                       placeholder="New Module"
                    onChange={this.formChanged}
                />
                {/*{console.log(this.state.newModuleTitle)}*/}
                <div className="input-group-append">
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => {
                            this.props.updateModuleTitle(this.props.course.id,
                                this.props.module.moduleId,
                                this.state.updateModuleTitle);
                            this.props.updateToggle()
                            }
                        }
                    >
                        Update
                    </button>
                </div>
            </div>
        );
    }
}