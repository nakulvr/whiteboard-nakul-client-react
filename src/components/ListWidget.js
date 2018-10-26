import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ListWidget = ({widget, deleteWidget, updateWidget, moveWidgetDown, moveWidgetUp, checked}) => {
    let text;
    let ordered;
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
                                <option value="LIST">
                                    List
                                </option>
                                <option value="HEADING">
                                    Heading
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
                    <label htmlFor="text">List Text</label>
                    <textarea className="col-lg-12 form-control px-1"
                              placeholder="List text"
                              onChange={() => {
                                  widget.text = '';
                                  widget.items = text.value;
                                  updateWidget(widget)
                              }
                              }
                              ref={node => text = node}
                              value={widget.items}
                    />

                    <label htmlFor='widgetNameText' className="mt-2">Widget Name</label>
                    <input className="col-lg-12 form-control px-1"
                           placeholder="Widget Name"
                           ref={(node) => widgetName = node}
                           onChange={() => {
                               widget.title = widgetName.value;
                               updateWidget(widget);
                           }}
                           id='widgetNameText'
                           value={widget.title}
                    />

                    {/*{widget.text}*/}
                    {/*{console.log(widget)}*/}
                    <label>
                        <input ref={node => ordered = node}
                               onClick={() => {
                                   widget.ordered = ordered.checked;
                                   updateWidget(widget);
                               }
                               } checked={widget.ordered}
                               type="checkbox"
                               className="mt-3"/> Ordered
                    </label>
                    <h5 className="card-title mt-1">Preview</h5>
                </span>
                }
                {!widget.ordered &&
                <ul>
                    { widget.items !== undefined && widget.items.split('\n').map((item, index) =>
                        (<li key={index}>{item} </li>))
                    }

                </ul>
                }
                {widget.ordered &&
                <ol>
                    {widget.items !== undefined && widget.items.split(',').map((item, index) =>
                        (<li key={index}>{item} </li>))
                    }
                </ol>
                }
            </div>
        </div>
    ); };

export default ListWidget