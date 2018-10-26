import React from 'react'
import HeadingWidget from "./HeadingWidget";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import CourseServiceSingleton from "../services/CourseServiceSingleton";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";
import ImageWidget from "./ImageWidget";
import LinkWidget from "./LinkWidget";

class WidgetList extends React.Component {
    constructor(props) {
        super(props);
        props.init(props.widgetsInit, props.topic, props.checked)
    }

    componentDidUpdate() {
        // this.props.init(this.props.widgetsInit)
        // console.log(this.props);
        this.props.init(this.props.widgetsInit, this.props.topic, this.props.checked)
    }

    render() {
        // console.log(this.props);
        return (
            <span
                // className="list-group"
            >

                <span className="footer mt-1" >
                    <button className="btn btn-danger" onClick={() => this.props.addWidget(this.props.topic)}>
                            <FontAwesomeIcon icon="plus-circle"
                                             // color="red"
                                             size="1x"
                            />
                    </button>
                </span>
                <table>
                    <tbody>
                {
                    this.props.widgets.map((widget, index) =>
                    <tr key={index}
                        // className="list-group-item"
                    >
                        <td>
                        {/*{widget.title}*/}
                        {/*<button*/}
                            {/*onClick={() => this.props.deleteWidget(widget)}*/}
                            {/*className="btn btn-danger float-right">*/}
                            {/*Delete*/}
                        {/*</button>*/}
                        {widget.type === "HEADING" &&
                        <HeadingWidget
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveWidgetUp={this.props.moveWidgetUp}
                            moveWidgetDown={this.props.moveWidgetDown}
                            checked={this.props.checked}
                        /> }
                        {widget.type === "PARAGRAPH" &&
                        <ParagraphWidget
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveWidgetUp={this.props.moveWidgetUp}
                            moveWidgetDown={this.props.moveWidgetDown}
                            checked={this.props.checked}
                        /> }
                        {widget.type === "LIST" &&
                        <ListWidget
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveWidgetUp={this.props.moveWidgetUp}
                            moveWidgetDown={this.props.moveWidgetDown}
                            checked={this.props.checked}
                        /> }
                        {widget.type === "IMAGE" &&
                        <ImageWidget
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveWidgetUp={this.props.moveWidgetUp}
                            moveWidgetDown={this.props.moveWidgetDown}
                            checked={this.props.checked}
                        /> }
                        {widget.type === "LINK" &&
                        <LinkWidget
                            widget={widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            moveWidgetUp={this.props.moveWidgetUp}
                            moveWidgetDown={this.props.moveWidgetDown}
                            checked={this.props.checked}
                        /> }
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
            </span>
        );
    }
}

    export default WidgetList