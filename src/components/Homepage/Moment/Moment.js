import './Moment.css'
import sheet2 from '../../../images/sheet2.png'
import {Link} from "react-router-dom";

const Moment = () => {
    return (
        <section className="moment">
            <div className="momentContainer">
                <div className="momentContent">
                    <h2 className="momentTitle">Take A Moment
                        To Breathe</h2>
                    <p className="momentDescr">
                        Don’t just take our word for it. Curious what the Elixiris experience is like? Hear it directly from our past participants.
                    </p>
                    <Link to="/reviews" className='momentLink'>READ OUR REVIEWS</Link>
                </div>
            </div>
        </section>
    )
}

export default Moment