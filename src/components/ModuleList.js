import React from 'react'
import ModuleListItem from "./ModuleListItem";

// export default class ModuleList extends React.Component{
//     // constructor(props) {
//     //     super(props);
//     //
//     //     this.state = {
//     //         newModuleTitle: '',
//     //         modules:[
//     //             {
//     //                 title: 'Week 1'
//     //             },
//     //             {
//     //                 title: 'Week 2'
//     //             }
//     //         ]
//     //     }
//     // }
//     //
//     // formChanged = (event) => {
//     //     // console.log(event.target.value);
//     //     this.setState({
//     //         newModuleTitle: event.target.value
//     //     });
//     // };
//
//     // addNewModule = () => {
//     //   let modules = this.state.modules;
//     //   modules.push({
//     //           title: this.state.newModuleTitle
//     //       });
//     //     this.setState({
//     //         modules: modules
//     //     });
//     // };
//
//     // render() {
//     //     return(
//     //         <h2>
//     //             <ul className="list-group">
//     //                 <li className="list-group-item active">
//     //                     Modules
//     //                 </li>
//     //                 <li className="list-group-item">
//     //                     <input onChange={this.formChanged} className="form-control"/>
//     //                     <button onClick={this.addNewModule} className="btn btn-primary"> Add </button>
//     //                     {/*{this.state.newModuleTitle}*/}
//     //                 </li>
//     //                 {/*<ModuleListItem title="Week 1"/>*/}
//     //                 {/*<ModuleListItem title="Week 2"/>*/}
//     //                 {/*<ModuleListItem title="Week 3"/>*/}
//     //                 {/*<ModuleListItem title="Week 4"/>*/}
//     //                 {
//     //                     this.state.modules.map((module, index) => (
//     //                         <ModuleListItem
//     //                             key = {index}
//     //                             title = {module.title}/>
//     //                     ))
//     //                 }
//     //             </ul>
//     //         </h2>
//     //     );
//     // }
//
// }

// const ModuleList = ({course, modules, deleteModule, selectModule, selectedModule, addModule}) =>
//     <div>
//
//         <div className="input-group mb-3">
//             <input type="text" className="form-control" placeholder="New Module"/>
//                 <div className="input-group-append">
//                     <button className="btn btn-primary" type="button">Add</button>
//                 </div>
//         </div>
//         <ul className="list-group">
//             {
//                 modules.map((module, index) =>
//                     <ModuleListItem
//                         selected={selectedModule === module}
//                         selectModule={selectModule}
//                         deleteModule={deleteModule}
//                         key={index}
//                         module={module}
//                     />)
//             }
//         </ul>
//     </div>;
//
//     export default ModuleList

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newModuleTitle: ''
        }
    }

    formChanged = event => {
      this.setState({
          newModuleTitle: event.target.value
          }
      )
    };

    render() {
        return (
            <div>
                 <div className="input-group mb-3">
                     <input type="text"
                            className="form-control"
                            placeholder="New Module"
                            onChange={this.formChanged}/>
                     {/*{console.log(this.state.newModuleTitle)}*/}
                         <div className="input-group-append">
                             <button
                                 className="btn btn-outline-primary"
                                 type="button"
                                 onClick={() => this.props.addModule(this.props.course.id, this.state.newModuleTitle)}
                             >
                                 Add
                             </button>
                         </div>
                 </div>
                    <ul className="list-group">
                     {
                        this.props.modules.map((module, index) =>
                            <ModuleListItem
                                selected={this.props.selectedModule === module}
                                selectModule={this.props.selectModule}
                                selectDefault={this.props.selectDefault}
                                deleteModule={this.props.deleteModule}
                                key={index}
                                module={module}
                                course={this.props.course}
                                updateModuleTitle={this.props.updateModuleTitle}
                            />)
                     }
                     </ul>
            </div>
        );
    }
}