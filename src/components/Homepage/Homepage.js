import './Homepage.css'
import Header from "./Header/Header";
import Fresh from "./Fresh/Fresh";
import Moment from "./Moment/Moment";
import Footer from "./Footer/Footer";
import Relief from "./Relief/Relief";

const Homepage = () => {
    return (<div>
        <Header/>
        <Relief/>
        <Fresh/>
        <Moment/>
        <Footer/>
    </div>)
}

export default Homepage;