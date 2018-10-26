import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const HeadingWidget = ({widget, deleteWidget, updateWidget, moveWidgetUp, moveWidgetDown, checked}) => {
    let text;
    let size = widget.size;
    let widgetType;
    let widgetName = widget.name;

    return (<div
            className="card mt-3 mb-3"
        >
            {!checked &&
            <div className="card-header">
                <span className="nav">
                    <h4 className="widget-header">
                        {widget.title}
                    </h4>
                    <span className="mr-2">
                        <button className="btn btn-warning" id="moveUp" onClick={() => moveWidgetUp(widget)}>
                            <FontAwesomeIcon icon="arrow-up" size="1x"/>
                        </button>
                    </span>
                    <span className="mr-2">
                        <button className="btn btn-warning" id="moveDown" onClick={() => moveWidgetDown(widget)}>
                            <FontAwesomeIcon icon="arrow-down" size="1x"/>
                        </button>
                    </span>
                    <span className="ml-2 float-right">
                            <select className="form-control mr-sm-2 float-right"
                                    onChange={() => {
                                        let w = {
                                            id: widget.id,
                                            type: widgetType.value
                                        };
                                        updateWidget(w)
                                    }}
                                    ref={node => widgetType = node}>
                                <option value="HEADING">
                                    Heading
                                </option>
                                <option value="LIST">
                                    List
                                </option>
                                <option value="LINK">
                                    Link
                                </option>
                                <option value="IMAGE">
                                    Image
                                </option>
                                <option value="PARAGRAPH">
                                    Paragraph
                                </option>
                            </select>
                    </span>
                <span>
                    <button className="btn btn-danger" onClick={() => deleteWidget(widget)}>
                            <FontAwesomeIcon icon="times"/>
                    </button>
                </span>
                </span>
            </div>
            }
            <div className="card-body">
                {!checked &&
                    <span>
                        <label htmlFor="text">Heading Text</label>
                        <input className="col-lg-12 form-control px-1"
                            placeholder="Heading text"
                            onChange={() => {
                            widget.text = text.value;
                            updateWidget(widget)}}
                            ref={node => text = node}
                            value={widget.text}/>
                        <label htmlFor="size" className="mt-2">Heading Size</label>
                        <select className="col-lg-12 form-control px-1"
                        onChange={()=>{
                        widget.size=size.value;
                        updateWidget(widget)}}
                        ref={node => size = node} id='size'
                        value={widget.size}
                        >
                            <option value="1" >
                            Heading 1
                            </option>
                            <option value="2">
                            Heading 2
                            </option>
                            <option value="3">
                            Heading 3
                            </option>
                            <option value="4">
                            Heading 4
                            </option>
                        </select>
                        <label htmlFor='widgetNameText' className="mt-2">Widget Name</label>
                        <input className="col-lg-12 form-control px-1"
                        placeholder="Widget Name"
                        ref={(node)=>widgetName=node}
                        onChange={()=>{
                        widget.title=widgetName.value;
                        updateWidget(widget);
                    }}
                        id='widgetNameText'
                        value={widget.title}
                        />
                        <h5 className="card-title mt-2">Preview</h5>
                    </span>
                }
            {/*{widget.text}*/}
            {/*{console.log(widget)}*/}
            {widget.size === '1' && <h1>{widget.text}</h1>}
            {widget.size === '2' && <h2>{widget.text}</h2>}
            {widget.size === '3' && <h3>{widget.text}</h3>}
            {widget.size === '4' && <h4>{widget.text}</h4>}
        </div>
    </div>
); };

    export default HeadingWidget