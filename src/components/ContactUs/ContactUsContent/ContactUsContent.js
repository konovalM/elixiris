import s from './ContactUsContent.module.css'
import image from '../../../images/contactImg.jpg'

const ContactUsContent = () => {
    return (
        <section className={s.content}>
            <div className={s.container}>
                <div className={s.wrapper}>
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
                        <textarea type="textarea" placeholder='Message' className={s.input + ' ' + s.message}/>
                        <button type='submit' className={s.send}>SEND MESSAGE</button>
                    </form>
                    <div className={s.info}>
                        <div className={s.infoFirst}>
                            <div className={s.firstDesktop}>
                                <div className={s.name}>Phone</div>
                                <div className={s.address}>(905) 515-2333</div>
                            </div>
                            <div className={s.firstMobile}>
                                <div className={s.name}>Address</div>
                                <div className={s.address}>2972 Westheimer Rd.<br/>Santa Ana, Illinois 85486 </div>
                            </div>
                        </div>
                        <div className={s.infoSecond}>
                            <div className={s.secondDesktop}>
                                <div className={s.name}>E-mail</div>
                                <div className={s.tel}>info@elixiris.com</div>
                            </div>
                            <div className={s.secondMobile}>
                                <div className={s.name}>Phone & E-mail</div>
                                <div className={s.tel}>(905) 515-2333 <br/>info@elixiris.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.absolute}>
                <img src={image} alt="sheets" className={s.absoluteImage}/>
            </div>
        </section>
    )
}

export default ContactUsContent