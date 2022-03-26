import s from './Value.module.css'
import {Link} from "react-router-dom";
import img from '../../../images/courseImg.png'
import imgAdaptive from '../../../images/adaptive/courseImg.png'

const Value = () => {
    return (
        <section className={s.value}>
            <div className={s.container}>
                <div className={s.wrapper}>
                    <div className={s.imgWrapper}>
                        <img src={imgAdaptive} alt="image" className={s.imgAdaptive}/>
                    </div>
                    <div className={s.innerWrapper}>
                        <h3 className={s.title}>The Elixiris<br/>Value</h3>
                        <div className={s.text}>
                            <p className={s.descr}>The Elixiris course provides significant value. It presents the opportunity of resolving all your asthma symptoms and becoming free of any asthma medication. </p>
                            <p className={s.important}>Our experience has shown that the Elixiris process works successfully in every case.</p>
                            <p className={s.descr}>Results are seen generally within the first week or two, although some have seen results in the very first day. That improvement is a promise that you will continue to improve as you continue to implement the process, until your symptoms resolve.</p>
                            <p className={s.descr}>The Elixiris course is a 4 week course that consists of one hour a week.</p>
                            <p className={s.important}>The total cost is $995.00</p>
                        </div>
                        <Link to='/book' className={s.link}>BOOK COURSE</Link>
                    </div>
                </div>
            </div>
            <img src={img} alt="img" className={s.img}/>
        </section>
    )
}

export default Value