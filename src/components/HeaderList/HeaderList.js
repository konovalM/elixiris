import './HeaderList.css'
import logo from "../../images/logo.svg";
import logoWhite from "../../images/logoWhite.svg"

const HeaderList = (props) => {
    let liClass = "headerListItem",
        liLast = "headerListItem headerLast"
    if (props.white){
        liClass = 'headerListItem white';
        liLast = 'headerListItem headerLastWhite'
    }
    return(
        <div className="headerWrapper">
            <img src={(props.white ? logoWhite : logo)} alt="logo"/>
            <div className="headerOther">
                <ul className='headerList'>
                    <li className={liClass}>
                        <a href="/">ABOUT</a>
                    </li>
                    <li className={liClass}>
                        <a href="/">THE COURSE</a>
                    </li>
                    <li className={liClass}>
                        <a href="/">REVIEWS</a>
                    </li>
                    <li className={liLast}>
                        <a href="/">BOOK COURSE</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderList;