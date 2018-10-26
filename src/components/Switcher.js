import React, { Component } from "react";
import Switch from "react-switch";

export default class Switcher extends Component {
    constructor() {
        super();
        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    render() {
        return (
            <label htmlFor="normal-switch">
                <Switch
                    onChange={this.handleChange}
                    checked={this.state.checked}
                    id="normal-switch"
                />
            </label>
        );
    }
}