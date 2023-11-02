import Course from './Course'

function Courses({ courses, cardBtnClickHandler, enrolledCourses }) {
    console.log(enrolledCourses)
    return (
        <div className="w-3/4 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
            {courses.map(course => (
                <Course
                    key={course.id}
                    course={course}
                    cardBtnClickHandler={cardBtnClickHandler}
                />
            ))}
        </div>
    )
}

export default Courses