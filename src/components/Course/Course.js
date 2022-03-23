import HeaderDefault from "../HeaderDefault/HeaderDefault";
import CourseHeader from "./CourseHeader/CourseHeader";
import Footer from "../Homepage/Footer/Footer";
import Accordeon from "./Accordeon/Accordeon";
import Value from "./Value/Value";
import Zoom from "./Zoom/Zoom";
import Promises from "./Promise/Promises";

const Course = (props) => {
    return (
        <div>
            <CourseHeader {...props}/>
            <Accordeon/>
            <Value/>
            <Zoom/>
            <Promises/>
            <Footer/>
        </div>
    )
}

export default Course