import React from 'react'
import CourseCard from "../components/CourseCard";

const CourseGrid = ({courses}) =>
    // {/*<h2> Course Grid {courses.length}</h2>;*/
    // }
    <div className="row">
        {courses.map((course, key) =>
            <CourseCard course={course} key={key}/>
        )}
    </div>
;
export default CourseGrid