import './HeaderList.css'
import logo from "../../images/logo.svg";
import logoError from "../../images/logoError.svg"
import {Link, NavLink} from "react-router-dom";

const HeaderList = (props) => {
    let liClass = "headerListItem",
        liLast = "headerListItem headerLast"
    if (props.white){
        liClass = 'headerListItem white';
        liLast = 'headerListItem headerLastWhite white'
    }

    const setActive = ({isActive}) => isActive ? 'active' : '';
    return(
        <div className="headerWrapper">
            <Link to='/'><img src={(props.white ? logoError : logo)} alt="logo"/></Link>
            <div className="headerOther">
                <ul className='headerList'>
                    <li className={liClass}>
                        <NavLink to="/about" className={setActive}>ABOUT</NavLink>
                    </li>
                    <li className={liClass}>
                        <NavLink to="/course" className={setActive}>THE COURSE</NavLink>
                    </li>
                    <li className={liClass}>
                        <NavLink to="/reviews" className={setActive}>REVIEWS</NavLink>
                    </li>
                    <li className={liLast}>
                        <NavLink to="/book">BOOK COURSE</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderList;