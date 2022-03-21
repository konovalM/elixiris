import HeaderDefault from "../HeaderDefault/HeaderDefault";
import CourseHeader from "./CourseHeader/CourseHeader";
import Footer from "../Homepage/Footer/Footer";
import Accordeon from "./Accordeon/Accordeon";
import Value from "./Value/Value";

const Course = (props) => {
    return (
        <div>
            <CourseHeader {...props}/>
            <Accordeon/>
            <Value/>
            <Footer/>
        </div>
    )
}

export default Course