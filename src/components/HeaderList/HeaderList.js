import './HeaderList.css'
import logo from "../../images/logo.svg";
import logoError from "../../images/logoError.svg"
import {Link, NavLink} from "react-router-dom";
import { useState} from "react";

const HeaderList = (props) => {
    let liClass = "headerListItem",
        liLast = "headerListItem headerLast"
    if (props.white){
        liClass = 'headerListItem white';
        liLast = 'headerListItem headerLastWhite white'
    }
    const [menuClass, menuClassMethod] = useState('headerOther')
    const [burgerClass, burgerClassMethod] = useState('burger-menu')

    const toggleClass = () => {
        if (menuClass == 'headerOther'){
            menuClassMethod('headerOther headerOtherActive')
            burgerClassMethod('burger-menu burger-menu-active')
        } else {
            menuClassMethod('headerOther')
            burgerClassMethod('burger-menu')
        }
    }
    const setActive = ({isActive}) => isActive ? 'active' : '';
    return(
        <div className='beforeHeaderWrapper'>

            <div className="headerWrapper">
               <div className="mobileLinkFlex">
                   <Link to='/'><img src={(props.white ? logoError : logo)} alt="logo" className="headerListLogo"/></Link>
                   <div className={burgerClass} onClick={() => toggleClass()}>
                       <span className='burger-menu-item'></span>
                       <span className='burger-menu-item'></span>
                       <span className='burger-menu-item'></span>
                   </div>
               </div>
                <div className={menuClass}>
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
                            <NavLink to="/book" className='headerListBook'>BOOK COURSE</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderList;

