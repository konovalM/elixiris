import './About.module.css'
import AboutHeader from "./AboutHeader/AboutHeader";
import Story from "./Story/Story";
import Last from "./Last/Last";
import Footer from "../Homepage/Footer/Footer";

const About = () => {
    return (
        <div>
            <AboutHeader/>
            <Story/>
            <Last/>
            <Footer/>
        </div>
    )
}

export default About