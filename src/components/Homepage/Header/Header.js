import './Header.css';
import HeaderList from "../../HeaderList/HeaderList";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <HeaderList/>
                <div className="headerContent">
                    <h1 className="headerTitle">We provide a successful solution for asthma and <span>it’s entirely natural.</span></h1>
                    <p className='headerDescr'>We appreciate this may be a stunning
                        statement, but we do not overstate things.</p>
                    <Link to="/course">DISCOVER MORE</Link>
                </div>
            </div>
        </header>
    )
}

export default Header;