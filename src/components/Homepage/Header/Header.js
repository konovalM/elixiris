import './Header.css';
import HeaderList from "../../HeaderList/HeaderList";
import {Link} from "react-router-dom";
import image from '../../../images/headerBg.png'

const Header = () => {
    return (
        <div className='header100vh'>
            <header className="header">
                <div className="container">
                    <HeaderList/>
                    <div className="headerContent">
                        <h1 className="headerTitle">We Provide A Successful Solution For Asthma And It’s <span>Entirely Natural.</span></h1>
                        <p className='headerDescr'>We appreciate this may be a stunning
                            statement, but we do not overstate things.</p>
                        <Link to="/course">DISCOVER MORE</Link>
                    </div>
                </div>
                <img src={image} alt="image" className='headerAbsolute'/>
            </header>
            <section className='headerContentMobile'>
                <div className="headerMobileContainer">
                    <div className="headerMaxWidthMobile">
                        <h1 className="headerTitle">We provide a successful<br/> solution for asthma and <br/>it’s<span> entirely natural.</span></h1>
                        <p className='headerDescr'>We appreciate this may be a stunning<br/>
                            statement, but we do not overstate things.</p>
                        <Link to="/course" className='headerDiscover'>DISCOVER MORE</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}



export default Header;