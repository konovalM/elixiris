import './Fresh.css'
import girl from '../../../images/girlInWater.jpg'
import girlAdaptive from '../../../images/adaptive/girl.jpg'
import sheet from '../../../images/sheet.jpg'
import {Link} from "react-router-dom";

const Fresh = () => {
    return (
        <section className="fresh">
            <div className="containerFresh">
                <h2 className="freshTitle">A Breathe
                    of Fresh Air</h2>
                <div className="freshRight">
                    <div className='girl'>
                        <img src={girl} alt="girl" className='girlImg'/>
                        <img src={girlAdaptive} alt="girl" className='girlImgAdaptive'/>
                    </div>
                    <div className="freshWrapper">
                        <div className="freshInner">
                            <p className="freshDescr">The Elixiris process uses the pure remedies of nature to reduce and resolve asthma symptoms. </p>
                            <p className="freshDescr">Every aspect of our process is backed by science and does not involve any medication, supplements, or invasive treatments.</p>
                            <div className="linkWrapper">
                                <Link to="/about" className="freshLink">ABOUT US</Link>
                            </div>
                        </div>
                    </div>
                    <img src={sheet} alt="sheet" className="freshSheet"/>
                </div>
            </div>


        </section>
    )
}

export default Fresh