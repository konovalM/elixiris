import HeaderDefault from "../HeaderDefault/HeaderDefault";
import Story from "./Story/Story";
import Last from "./Last/Last";
import Footer from "../Homepage/Footer/Footer";
import AboutHeader from "./AboutHeader/AboutHeader";

const About = (props) => {
    const {title, text} = props
    return (
        <div>
            <AboutHeader {...props}/>
            <Story/>
            <Last/>
            <Footer/>
        </div>
    )
}

export default About