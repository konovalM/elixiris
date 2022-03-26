import s from './ErrorContent.module.css'
import HeaderList from "../../HeaderList/HeaderList";


const ErrorContent = () => {
    return (

        <section className={s.error}>
            <div className={s.container}>
                <HeaderList white={window.innerWidth > 768 ? true : false}/>
                <h2 className={s.title}>404</h2>
                <h3 className={s.titleName}>Page Not Found</h3>
                <p className={s.description}>The page doesn’t exist or was removed.
                    We suggest  you back to homepage.</p>
                <a href="/" className={s.link}>BACK TO HOMEPAGE</a>
            </div>
        </section>
    )
}

export default ErrorContent