import s from './Promises.module.css'

const Promises = () => {
    return (
        <section className={s.promise}>
            <div className={s.container}>
                <h3 className={s.title}>Our<br/>Promise</h3>
                <div className={s.wrapper}>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No<br/>Supplements</div>
                            <p className={s.descr + ' ' + s.w315}>Just honest to goodness ingredients you can source right where you live.</p>
                        </div>
                    </div>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No<br/>Breathing Exercises</div>
                            <p className={s.descr + ' ' + s.w412}>There is no need to think about your breathing more than you do, or be reminded how you cannot breathe well.</p>
                        </div>
                    </div>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No<br/>Pseudoscience</div>
                            <p className={s.descr + ' ' + s.w436}>There is no energy healing, hypnotism or ‘mind control.’  We encourage you to be in possession of your faculties at all times, and improve upon them. </p>
                        </div>
                    </div>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No<br/>Appendages</div>
                            <p className={s.descr + ' ' + s.w412}>Our process does not use any breathing equipment, devices or appendages such as mouth tape. There is no need to tape your mouth closed when you are already finding it difficult to breathe through your nose and mouth, especially at night.</p>
                        </div>
                    </div>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No<br/>Ongoing Cost</div>
                            <p className={s.descr + ' ' + s.w436}>Just the cost of the one-time course. We expect the Elixiris process will save you the cost of many inhalers, biologic injections, missed work days and adverse side effects from medication in the future.</p>
                        </div>
                    </div>
                    <div className={s.element}>
                        <div className={s.inner}>
                            <div className={s.main}>No Invasive Medical or<br/>Non Medical Treatments</div>
                            <p className={s.descr + ' ' + s.w412}>There is no bronchial thermoplasty, acupuncture, homeopathy involving toxic ingredients, ingestion of colloidal silver or hydrogen peroxide, or vaporization of colloidal silver, hydrogen peroxide, salt, herbs or essential oils or other substance. The Elixiris process is a gentle process that is truly safe and healthy. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promises