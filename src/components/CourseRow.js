
import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CourseRow = ({course, deleteCourse}) => {
    // console.log(course);
 return(
     <tr>
        <td>
            <Link to={`/course/${course.id}/edit`}>
                <span className="px-2">
                    <FontAwesomeIcon icon="file-alt"/>
                </span>
                {course.title}
            </Link>
        </td>
         <td>
             me
         </td>
         <td>
             6:45 PM
         </td>
        <td>
            {/*<Link*/}
                {/*className="btn btn-primary" to={`/course/${course.id}/edit`}>Edit</Link>*/}
            <button onClick={() => deleteCourse(course)} className="btn btn-danger">Delete</button>
        </td>
    </tr>);
};
export default CourseRow