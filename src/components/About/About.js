import HeaderDefault from "../HeaderDefault/HeaderDefault";
import Story from "./Story/Story";
import Last from "./Last/Last";
import Footer from "../Homepage/Footer/Footer";

const About = (props) => {
    const {title, text} = props
    return (
        <div>
            <HeaderDefault title={title} text={text}/>
            <Story/>
            <Last/>
            <Footer/>
        </div>
    )
}

export default About