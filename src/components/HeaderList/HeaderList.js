import './HeaderList.css'
import logo from "../../images/logo.svg";

const HeaderList = () => {
    return(
        <div className="headerWrapper">
            <img src={logo} alt="logo"/>
            <div className="headerOther">
                <ul className='headerList'>
                    <li className="headerListItem">
                        <a href="/">ABOUT</a>
                    </li>
                    <li className="headerListItem">
                        <a href="/">THE COURSE</a>
                    </li>
                    <li className="headerListItem">
                        <a href="/">REVIEWS</a>
                    </li>
                    <li className="headerListItem headerLast">
                        <a href="/">BOOK COURSE</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderList;