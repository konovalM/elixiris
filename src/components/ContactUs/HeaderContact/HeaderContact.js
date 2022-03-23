import s from "./HeaderContact.module.css"
import HeaderList from "../../HeaderList/HeaderList";

const HeaderContact = () => {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <HeaderList/>
            </div>
        </header>
    )
}
export default HeaderContact