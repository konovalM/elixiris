import s from './HeaderDefault.module.css'
import HeaderList from "../HeaderList/HeaderList";

const HeaderDefault = (props) => {
    const {title, text} = props
    return (
        <header className={s.header}>
            <section className={s.first}>
                <div className="container">
                    <HeaderList/>
                    <h2 className={s.title}>{title}</h2>
                    <p className={s.description}>
                        {text}
                    </p>
                </div>
            </section>
            <section className={s.second}></section>
        </header>
    )
}

export default HeaderDefault