import s from './HeaderDefault.module.css'
import HeaderList from "../HeaderList/HeaderList";



const HeaderDefault = (props) => {
    const {title, text} = props
    return (
        <section className={s.first}>
            <div className="container">
                <HeaderList/>
                <h2 className={s.title}>{title}</h2>
                <p className={s.description}>
                    {text}
                </p>
            </div>
        </section>
    )
}

export default HeaderDefault