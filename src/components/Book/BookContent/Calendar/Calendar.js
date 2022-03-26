import s from './Calendar.module.css'
import * as calendar from './CalendarMethods'
import leftArrow from '../../../../images/calendar/leftCalendar.svg'
import rightArrow from '../../../../images/calendar/rightCalendar.svg'
import {useState} from "react";
import {type} from "@testing-library/user-event/dist/type";
import classNames from "classnames";

const Calendar = () => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        weekDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];



    // Состояния
    const [currentDate, currentDateMethod] = useState(new Date()),
        [selectedDate, selectedDateMethod] = useState(null),
        [changingDate, changingDateMethod] = useState(currentDate)

    const handlePrevMonthButton = () => {
        const date = new Date(changingDate.getFullYear(), changingDate.getMonth() - 1)
        console.log(date)
        changingDateMethod(date)
    }

    const handleNextMonthButton = () => {
        const date = new Date(changingDate.getFullYear(), changingDate.getMonth() + 1)
        console.log(date)
        changingDateMethod(date)
    }
    console.log(currentDate)
    const areEqual = (a, b) => {
        if (!a || !b) return false

        return (
            a.getFullYear() === b.getFullYear() &&
            a.getMonth() === b.getMonth() &&
            a.getDate() === b.getDate()
        )

    }

    const handleDayClick = (date) => {
        selectedDateMethod(date)
    }

    const monthData = calendar.getMonthData(changingDate.getFullYear(), changingDate.getMonth())
    return (
        <div className={s.calendar}>
            <div className={s.header}>
                <div className={s.chosenDate}>
                    {monthNames[changingDate.getMonth()] + ', ' + changingDate.getFullYear()}
                </div>
                <div className={s.buttons}>
                    <button className={s.button} onClick={handlePrevMonthButton}>
                        <img src={leftArrow} alt="leftArrow"/>
                    </button>
                    <button className={s.button} onClick={handleNextMonthButton}>
                        <img src={rightArrow} alt="rightArrow"/>
                    </button>
                </div>
            </div>
            <table className={s.table}>
                <thead className={s.thead}>
                <tr className={s.tr}>
                    {weekDayNames.map(name => (
                        <th key={name} className={s.th}>{name}</th>
                        ))}
                </tr>
                </thead>
                <tbody className={s.tbody}>
                    {monthData.map((week, i) =>
                        <tr key={i} className={s.week}>
                            {week.map((date, i) =>
                                <td key={i} className={s.td}>
                                    <div className={s.spanWrapper}>
                                        {
                                            date.getMonth() == changingDate.getMonth() ?
                                                <span className={
                                                    classNames(s.span, areEqual(date, selectedDate) ? s.selected : '')
                                                } onClick={() => handleDayClick(date)}>{date.getDate()}</span>
                                                :
                                                <span className={s.spanAnother} onClick={() => handleDayClick(date)}>{date.getDate()}</span>
                                        }
                                    </div>
                                </td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Calendar