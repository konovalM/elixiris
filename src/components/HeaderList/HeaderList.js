import './HeaderList.css'
import logo from "../../images/logo.svg";
import logoError from "../../images/logoError.svg"
import {Link, NavLink} from "react-router-dom";
import { useState} from "react";
import ScrollLock from "react-scrolllock";

const HeaderList = (props) => {
    let liClass = "headerListItem",
        liLast = "headerListItem headerLast"
    if (props.white){
        liClass = 'headerListItem white';
        liLast = 'headerListItem headerLastWhite white'
    }

    const [menuClass, menuClassMethod] = useState('headerOther')
    const [burgerClass, burgerClassMethod] = useState('burger-menu')
    const [scroll, scrollMethod] = useState(false)

    const toggleClass = () => {
        if (menuClass == 'headerOther'){
            menuClassMethod('headerOther headerOtherActive')
            burgerClassMethod('burger-menu burger-menu-active')
            scrollMethod(true)
        } else {
            menuClassMethod('headerOther')
            burgerClassMethod('burger-menu')
            scrollMethod(false)
        }
    }
    const toggleVisible = () => {
        scrollMethod(false)
    }
    const toggleAll = () => {
        if (burgerClass == 'burger-menu burger-menu-active'){
            toggleClass()
        }
        toggleVisible()
    }
    const setActive = ({isActive}) => isActive ? 'active' : '';
    return(
        <div className='beforeHeaderWrapper'>
            <ScrollLock isActive={scroll}/>
            <div className="headerWrapper">
               <div className="mobileLinkFlex">
                   <Link to='/'><img src={(props.white ? logoError : logo)} alt="logo" className="headerListLogo" onClick={toggleAll}/></Link>
                   <div className={burgerClass} onClick={() => toggleClass()}>
                       <span className='burger-menu-item'></span>
                       <span className='burger-menu-item'></span>
                       <span className='burger-menu-item'></span>
                   </div>
               </div>
                <div className={menuClass}>
                    <ul className='headerList'>
                        <li className={liClass}>
                            <NavLink to="/about" className={setActive} onClick={toggleVisible}>ABOUT</NavLink>
                        </li>
                        <li className={liClass}>
                            <NavLink to="/course" className={setActive} onClick={toggleVisible}>THE COURSE</NavLink>
                        </li>
                        <li className={liClass}>
                            <NavLink to="/reviews" className={setActive} onClick={toggleVisible}>REVIEWS</NavLink>
                        </li>
                        <li className={liLast}>
                            <NavLink to="/book" className='headerListBook' onClick={toggleVisible}>BOOK COURSE</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HeaderList;

