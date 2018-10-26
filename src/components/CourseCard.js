import React from 'react'
import {Link} from 'react-router-dom'

export default class CourseCard extends React.Component
{
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="col-sm-6 col-md-4 col-lg-2">
                <div className="card" styles={{width: '18rem'}}>
                    <img className="card-img-top"
                    src="https://picsum.photos/200/" alt=""/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.course.title}</h5>
                        <p className="card-text">Module count: {this.props.course.modules.length} </p>
                        {/*<a href="#" className="btn btn-primary">More...</a>*/}
                        <Link className="btn btn-primary" to={`/course/${this.props.course.id}/edit/`}>
                        Edit
                        </Link>
                    </div>
                </div>
            </div>);
    }
}
