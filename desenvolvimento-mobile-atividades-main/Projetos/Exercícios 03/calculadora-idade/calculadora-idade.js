import moment from 'moment'

export const getAge = (birthYear) => {
    const todayDate = moment().year()
    return todayDate - birthYear
}
