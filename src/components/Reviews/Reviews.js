import HeaderDefault from "../HeaderDefault/HeaderDefault";
import Review from "./Review/Review";
import Footer from "../Homepage/Footer/Footer";
import ReviewsHeader from "./ReviewsHeader/ReviewsHeader";

const Reviews = (props) => {
    return (
        <div>
            <ReviewsHeader {...props}/>
            <Review/>
            <Footer/>
        </div>
    )
}

export default Reviews