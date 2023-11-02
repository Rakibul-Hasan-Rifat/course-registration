import { useEffect, useState } from "react"
import Courses from "./Courses";
import Sidebar from "./Sidebar";

function Main() {
    const [courses, setCourses] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0)
    const [remainingCredit, setRemainingCredit] = useState(20)
    const [price, setPrice] = useState(0)
    let [enrolledCourses, setEnrolledCourses] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then((data) => setCourses(data))
    }, []);

    const cardBtnClickHandler = (id, course_name, credit, price) => {
        const newEnrolledCourse = { id, course_name, credit, price };
        setEnrolledCourses([...enrolledCourses, newEnrolledCourse]);
        setTotalCredit(totalCredit + credit);
        setRemainingCredit(pervRemainingCredit => pervRemainingCredit - credit);
        setPrice(prevPrice => prevPrice + price)
    }

    return (
        <div className="flex gap-8">
            <Courses
                courses={courses}
                cardBtnClickHandler={cardBtnClickHandler}
            />
            <Sidebar
                enrolledCourses={enrolledCourses}
                totalCredit={totalCredit}
                remainingCredit={remainingCredit}
                price={price}
            />
        </div>
    )
}

export default Main