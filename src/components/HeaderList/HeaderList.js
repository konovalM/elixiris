import './HeaderList.css'
import logo from "../../images/logo.svg";
import logoError from "../../images/logoError.svg"
import {Link} from "react-router-dom";

const HeaderList = (props) => {
    let liClass = "headerListItem",
        liLast = "headerListItem headerLast"
    if (props.white){
        liClass = 'headerListItem white';
        liLast = 'headerListItem headerLastWhite white'
    }
    return(
        <div className="headerWrapper">
            <Link to='/'><img src={(props.white ? logoError : logo)} alt="logo"/></Link>
            <div className="headerOther">
                <ul className='headerList'>
                    <li className={liClass}>
                        <Link to="/about">ABOUT</Link>
                    </li>
                    <li className={liClass}>
                        <Link to="/course">THE COURSE</Link>
                    </li>
                    <li className={liClass}>
                        <Link to="/reviews">REVIEWS</Link>
                    </li>
                    <li className={liLast}>
                        <Link to="/book">BOOK COURSE</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderList;