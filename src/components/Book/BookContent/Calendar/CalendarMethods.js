const DAYS_IN_WEEK = 7
const DAY_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const monthes = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
}


function isLeapYear(year){
    return !((year % 4) || (!(year % 100) && (year % 400)))
}

function getDaysInMonth(date){
    const month = date.getMonth()
    const year = date.getFullYear()

    if (isLeapYear(year) && month === monthes.February){
        return DAY_IN_MONTH[month] + 1
    } else{
        return DAY_IN_MONTH[month]
    }
}

function getDayOfWeek(date){
    const dayOfWeek = date.getDay()
    if (dayOfWeek === 0) return 6;
    return dayOfWeek - 1;
}

export function getMonthData(year, month){
    const result = [];
    const date = new Date(year, month)
    const daysInMonth = getDaysInMonth(date);
    const daysInBeforeMonth = getDaysInMonth(new Date(year, month - 1))
    const daysInAfterMonth = getDaysInMonth(new Date(year, month + 1))
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;
    let minusDays = monthStartsOn,
        plusDays = 1;


    for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
        result[i] = []

        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if ((i === 0 && j < monthStartsOn) || day > daysInMonth){
                if (i === 0 && j < monthStartsOn){
                    result[i][j] = new Date(year, month - 1, daysInBeforeMonth - minusDays--)
                }
                else{
                    result[i][j] = new Date(year, month + 1, plusDays++)
                }
            } else {
                result[i][j] = new Date(year, month, day++)
            }
        }
    }
    return result;
}