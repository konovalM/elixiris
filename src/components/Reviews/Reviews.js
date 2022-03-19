import HeaderDefault from "../HeaderDefault/HeaderDefault";
import Review from "./Review/Review";
import Footer from "../Homepage/Footer/Footer";

const Reviews = (props) => {
    const {title, text} = props
    return (
        <div>
            <HeaderDefault title={title} text={text}/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default Reviews