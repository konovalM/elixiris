import s from './AboutHeader.module.css'
import HeaderList from "../../HeaderList/HeaderList";

const AboutHeader = () => {
    return (
        <header className={s.header}>
            <section className={s.first}>
                <div className="container">
                    <HeaderList/>
                    <h2 className={s.title}>Breathe a Sigh of Relief</h2>
                    <p className={s.description}>
                        We know how anxious asthma can make one feel. The Elixiris process is designed to ease anxiousness - in terms of the resolving of asthma symptoms, as well as in terms of the process itself. It is a gentle, comfortable, sustainable and healthy process. All the ingredients are pure and safe.  All aspects of the process are backed by science.
                    </p>
                </div>
            </section>
            <section className={s.second}></section>
        </header>
    )
}

export default AboutHeader