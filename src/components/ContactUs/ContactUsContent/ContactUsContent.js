import s from './ContactUsContent.module.css'
import HeaderList from "../../HeaderList/HeaderList";

const ContactUsContent = () => {
    return (
        <section className={s.content}>
            <div className={s.container}>
                <HeaderList/>
                <h2 className={s.title}>Contact Us</h2>
                <p className={s.description}>While we are located in Canada, we provide the Elixiris course internationally.  We attempt to be as responsive as possible
                    to enquiries. </p>
                <form action="/" className={s.form}>
                    <div className={s.top}>
                        <input type="text" className={s.first} placeholder='First Name'/>
                        <input type="text" className={s.second} placeholder='Last Name'/>
                    </div>
                    <input type="tel" placeholder='Phone Number' className={s.input}/>
                    <input type="email" placeholder='Email' className={s.input}/>
                    <input type="text" placeholder='Country' className={s.input}/>
                    <input type="text" placeholder='Message' className={s.input}/>
                    <button type='submit' className={s.send}>SEND MESSAGE</button>
                </form>
                <div className={s.info}>
                    <div>
                        <div className={s.name}>Address</div>
                        <div className={s.address}>2972 Westheimer<br/> Rd. Santa Ana, Illinois<br/> 85486</div>
                    </div>
                    <div>
                        <div className={s.name}>Phone & E-mail</div>
                        <div className={s.tel}>(905) 515-2333 <br/>info@elixiris.com</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUsContent