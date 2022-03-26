import s from './Accordeon.module.css'
import { useState } from "react";
import plus from '../../../images/plus.svg'
import minus from '../../../images/minus.svg'


const Accordeon = () => {

    const [state, changeState] = useState([false, false, false, false, false, false, false, false, false])
    const stateArray = state.slice()

    const toggle = (i) => {
        stateArray[i] = !stateArray[i]
        console.log(stateArray)
        changeState(stateArray)
    }

    return (
        <section className={s.wrapper}>
            <div className={s.accordeon}>
                {data.map((item, i) => (
                    <div className={s.item}>
                        <div className={s.title} onClick={() => {toggle(i)}}>
                            <h4 className={s.question}>{item.question}</h4>
                            <span>{state[i] ? (<img src={minus} alt="minus" className={s.img}/>) : (<img className={s.img} src={plus} alt="plus"/>)}</span>
                        </div>
                        <div className={state[i] ? s.content + ' ' + s.show : s.content}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const data = [
    {question: 'What does the process use?',
    answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'},
    {question: 'Will the process help with my kind of asthma?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at, commodi consequuntur dolorum eum eveniet explicabo ipsum modi mollitia odio optio pariatur qui quia rerum velit? In odio officia saepe.'},
    {question: 'Will I be able to source everything I need to do the process where I live?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat. At risus viverra adipiscing at in. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. '},
    {question: 'Can I keep taking my medication while I do the process?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis lectus nulla at volutpat diam ut venenatis. '},
    {question: 'When can I expect to start to see results?',
        answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'},
    {question: 'Why does the process work?',
        answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'},
    {question: 'Will the process help with issues related to asthma such as reflux, rhinitis, allergies, throat tightening, eczema and anxiety?',
        answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'},
    {question: 'What does the process use?',
        answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'},
    {question: 'Is the process suitable for children and during pregnancy?',
        answer: 'Everyone everywhere should have the resources in their locality to be able to implement the process.'}
]

export default Accordeon