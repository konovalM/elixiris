import s from './BookContent.module.css'
import paypal from '../../../images/paypalGreen.svg'
import img from '../../../images/bookImg.png'
import Calendar from "./Calendar/Calendar";

const BookContent = () => {
    return (
        <section className={s.content}>
            <div className={s.container}>
                <h2 className={s.title}>Book the Course</h2>
                <p className={s.descr}>
                    To discover all the benefits of the Elixiris process for yourself, simply pay the course cost, select a recurring course time on the calendar according to your availability, in your time zone, ensure you have the free Zoom app, and leave the rest to us!
                </p>
                <div className={s.wrapper}>
                    <div className={s.calendar}>
                        <Calendar/>
                    </div>
                    <div className={s.payment}>
                        <div className={s.paypal}>
                            <img src={paypal} alt="paypal"/>
                            <p className={s.payText}>PAY WITH PAYPALL</p>
                        </div>
                        <h5 className={s.cost}>The total cost is $995.00 USD</h5>
                        <div className={s.descr}>Note: I will add to this applicable taxes of 13% (HST) once that is required - which will be once $30,000 in income is reached.</div>
                        <form action="/">
                            <input type="text" placeholder='Your name' className={s.input}/>
                            <input type="tel" placeholder='Your phone' className={s.input}/>
                            <input type="email" placeholder='Your email' className={s.input}/>
                            <div className={s.timeWrapper}>
                                <p className={s.timeText}>Your time zone</p>
                                <div className={s.selectDiv}>
                                    <select className={s.select}>
                                        <option value="1" className={s.option}>Pacific Time,  NYC</option>
                                        <option value="2" className={s.option}>Pacific Time,  NYC</option>
                                        <option value="3" className={s.option}>Pacific Time,  NYC</option>
                                        <option value="4" className={s.option}>Pacific Time,  NYC</option>
                                    </select>
                                </div>
                            </div>
                            <button className={s.book}>BOOK COURSE</button>
                        </form>
                    </div>
                </div>
            </div>
            <img src={img} alt="img" className={s.img}/>
        </section>
    )
}

export default BookContent