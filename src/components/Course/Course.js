import HeaderDefault from "../HeaderDefault/HeaderDefault";
import CourseHeader from "./CourseHeader/CourseHeader";

const Course = (props) => {
    return (
        <div>
            <CourseHeader {...props}/>
        </div>
    )
}

export default Course