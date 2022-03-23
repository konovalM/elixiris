import s from './Zoom.module.css'

const Zoom = () => {
    return (
        <section className={s.zoom}>
            <div className={s.container}>
                <div className={s.left}>
                    The course is presented via Zoom, so you can attend from the convenience and comfort of your home or other location. It is a live course, which provides an opportunity for you to ask questions.
                </div>
                <div className={s.right}>
                    We attempt to have boutique class sizes to allow attendees to compare notes if they wish as to improvements in their condition, and ask any questions.<br/><br/>You do not need a Zoom account. You can simply install the Zoom app for free on your mobile phone, laptop or other device. You do not need to bring anything except a pen and paper for taking notes.<br/><br/>We will send you the information to join via Zoom approximately 15 minutes before the course is scheduled to start.<br/><br/>If you need to reschedule a session, please do so in advance of the session by [ insert ].<br/><br/>We do not offer any refund, as our experience has shown the Elixiris process is successful in every case when implemented.
                </div>
            </div>
        </section>
    )
}

export default Zoom