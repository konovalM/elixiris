import s from "./AboutHeader.module.css";
import HeaderDefault from "../../HeaderDefault/HeaderDefault";
import HeaderList from "../../HeaderList/HeaderList";


const AboutHeader = (props) => {
    const {title, text} = props
    return (
        <header className={s.header}>
            <section className={s.first}>
                <div className="container">
                    <HeaderList/>
                    <h2 className={s.title}>A Breathe Of Fresh Air</h2>
                    <p className={s.description}>
                        Elixiris Inc., a Canadian corporation, was founded in 2021 by Enna Millie. It provides a pure, plant-based process that is successfully improving asthma symptoms, to the extent of resolving them.
                    </p>
                </div>
            </section>
            <section className={s.second}></section>
        </header>
    )
}

export default AboutHeader