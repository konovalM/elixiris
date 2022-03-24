import s from './CourseHeader.module.css'
import HeaderDefault from "../../HeaderDefault/HeaderDefault";
import HeaderList from "../../HeaderList/HeaderList";

const CourseHeader = (props) => {
    const {title, text} = props
    return (
        <header className={s.header}>
            <section className={s.first}>
                <div className="container">
                    <HeaderList/>
                    <h2 className={s.title}>Breathe a Sigh of Relief</h2>
                    <p className={s.description}>
                        We know how anxious asthma can make one feel. The Elixiris is a gentle, comfortable, sustainable and healthy process. All the ingredients are pure and safe.  All aspects of the process are backed by science.
                    </p>
                </div>
            </section>
            <section className={s.second}></section>
        </header>
    )
}

export default CourseHeader