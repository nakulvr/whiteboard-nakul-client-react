import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import UpdateModule from './UpdateModule'

// /**
//  * @return {null}
//  */
// function UpdateField(props) {
//     if(!props.edit) {
//         return null;
//     }
//     return(
//         <div className="input-group mb-3 my-2">
//             <input type="text"
//                    className="form-control"
//                    placeholder="New Module Name"
//                 // onChange={this.formChanged}
//             />
//             {/*{console.log(this.state.newModuleTitle)}*/}
//             <div className="input-group-append">
//                 <button
//                     className="btn btn-success"
//                     type="button"
//                     onClick={() => {
//                         props.updateToggle()
//                         }
//                     }
//                 >
//                     Update
//                 </button>
//             </div>
//         </div>
//     );
// }

export default class ModuleListItem extends React.Component{
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
            <li className={this.props.selected ? 'list-group-item active' : 'list-group-item'}
                // onClick={() => selectModule(module)}
            >
                <span onClick={() => this.props.selectModule(this.props.module)}
                   className={this.props.selected ? 'text-light' : 'text-dark'}>
                {this.props.module.title}
                </span>

                {/*<span className="badge badge-pill badge-dark ml-2"*/}
                      {/*onClick={() => this.props.selectModule(this.props.module)}*/}
                {/*>*/}
                    {/*View Module*/}
                {/*</span>*/}
                <span
                    onClick={() => {
                        this.props.deleteModule(this.props.module);
                        this.props.selectDefault()
                        }
                    }
                    className="float-right"
                >
                     <FontAwesomeIcon icon="trash-alt" size="1x"/>
                </span>
                <span
                    onClick={() => {
                        this.props.selectModule(this.props.module);
                        this.updateToggle();
                        }
                    }
                    className="float-right mx-2"
                >
                    <FontAwesomeIcon icon="edit" size="1x"/>
                </span>
                {/*<span*/}
                    {/*onClick={() => this.props.selectModule(this.props.module)}*/}
                    {/*className="float-right"*/}
                {/*>*/}
                    {/*<FontAwesomeIcon icon="eye" size="1x"/>*/}
                {/*</span>*/}
                <UpdateModule
                    edit={this.state.showEditBox}
                    updateToggle={this.updateToggle}
                    updateModuleTitle={this.props.updateModuleTitle}
                    course={this.props.course}
                    module={this.props.module}
                />
            </li>
        );
    }
}