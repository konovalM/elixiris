import HeaderDefault from "../HeaderDefault/HeaderDefault";

const Course = (props) => {
    const {title, text} = props
    return (
        <div>
            <HeaderDefault title={title} text={text}/>
        </div>
    )
}

export default Course