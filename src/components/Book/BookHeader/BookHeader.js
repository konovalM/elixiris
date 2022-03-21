import s from './BookHeader.module.css'
import HeaderList from "../../HeaderList/HeaderList";

const BookHeader = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <HeaderList/>
            </div>
        </header>
    )
}

export default BookHeader