import s from './ReviewsHeader.module.css'
import HeaderDefault from "../../HeaderDefault/HeaderDefault";

const ReviewsHeader = (props) => {
    const {title, text} = props
    return (
        <header className={s.header}>
            <HeaderDefault title={title} text={text}/>
            <section className={s.second}></section>
        </header>
    )
}

export default ReviewsHeader