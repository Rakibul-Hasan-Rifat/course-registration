function Sidebar({enrolledCourses, totalCredit, remainingCredit, price}) {
    console.log(enrolledCourses)
    return (
        <div className="w-1/4 ">
            <div className="w-full rounded-2xl p-5 bg-white shadow-lg">
                <h4 className="text-blue-500 text font-semibold pb-5">
                    Credit Hour Remaining {remainingCredit} hr
                </h4>
                <hr />
                <h3 className="font-bold text-xl my-4">
                    Course Name
                </h3>
                <ol className="text-gray-400 mb-4">
                    {
                        enrolledCourses.map((course, index) => <li key={course.id}>
                            {index + 1}. {course.course_name}
                        </li>)
                    }
                </ol>
                <hr />
                <p className="my-5 font-semibold">Total Credit Hour : {totalCredit} </p>
                <hr />
                <p className="my-4">
                    <strong>Total Price : {price} USD</strong>
                </p>
            </div>
        </div>
    )
}

export default Sidebar