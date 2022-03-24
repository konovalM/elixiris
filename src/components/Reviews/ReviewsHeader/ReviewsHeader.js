import s from './ReviewsHeader.module.css'
import HeaderDefault from "../../HeaderDefault/HeaderDefault";
import HeaderList from "../../HeaderList/HeaderList";

const ReviewsHeader = (props) => {
    const {title, text} = props
    return (
        <header className={s.header}>
            <section className={s.first}>
                <div className="container">
                    <HeaderList/>
                    <h2 className={s.title}>Take a Moment to Breathe</h2>
                    <p className={s.description}>
                        We want you to rest assured that the Elixiris process works. We hope you can relate to one or more of the asthma histories in these reviews and be inspired and hopeful about what the Elixiris process can do for you.
                    </p>
                </div>
            </section>
            <section className={s.second}></section>
        </header>
    )
}

export default ReviewsHeader