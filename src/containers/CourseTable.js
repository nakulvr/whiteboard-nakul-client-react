import React from 'react'
import CourseRow from "../components/CourseRow";
// import styles from 'CourseTable.style.css';
import './CourseTable.style.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import CourseAdd from "../components/CourseAdd";

const CourseTable = ({courses, addCourse, deleteCourse}) =>
    <div className="container-fluid">
            <CourseAdd
                addCourse={addCourse}/>
        <table className="table">
            <thead className="colored-block grey">
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Owned by
                    </th>
                    <th>
                        Last Modified Time
                    </th>
                    <th>
                        {/*<Router>*/}
                        Action
                            {/*<Link to="/course/grid">*/}
                                {/*<FontAwesomeIcon icon="th-large" />*/}
                            {/*</Link>*/}
                            {/*<Route path="/course/grid"*/}
                                   {/*render={() => <CourseGrid courses={courses}/>}*/}
                            {/*/>*/}
                        {/*</Router>*/}
                    </th>
                </tr>
            </thead>
            <tbody>
            {/*{console.log(courses)}*/}
            {courses.map((course, key) =>
                <CourseRow course={course} key={key} deleteCourse={deleteCourse}/>
            )}
            </tbody>
        </table>
    </div>;

export default CourseTable;