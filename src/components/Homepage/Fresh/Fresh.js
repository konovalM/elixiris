import './Fresh.css'
import girl from '../../../images/girlInWater.jpg'
import sheet from '../../../images/sheet.jpg'
import {Link} from "react-router-dom";

const Fresh = () => {
    return (
        <section className="fresh">
            <div className="container">
                <h2 className="freshTitle">A Breathe
                    of Fresh Air</h2>
            </div>

            <div className="freshRight">
                <div className='girl'><img src={girl} alt="girl"/></div>
                <div className="freshWrapper">
                    <p className="freshDescr">The Elixiris process uses the pure remedies of nature to reduce and resolve asthma symptoms. </p>
                    <p className="freshDescr">Every aspect of our process is backed by science and does not involve any medication, supplements, or invasive treatments.</p>
                    <div className="linkWrapper">
                        <Link to="/about" className="freshLink">ABOUT US</Link>
                    </div>
                </div>
                <img src={sheet} alt="sheet" className="freshSheet"/>
            </div>
        </section>
    )
}

export default Fresh