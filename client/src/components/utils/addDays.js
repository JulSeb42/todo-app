// Utils
import getToday from "./getToday"

const addDays = days => {
    let result = new Date(getToday())

    result.setDate(result.getDate() + days)

    let dd = result.getDate()
    let mm = result.getMonth() + 1
    let yy = result.getFullYear()

    if (dd < 10) {
        dd = "0" + dd
    }

    if (mm < 10) {
        mm = "0" + mm
    }

    return `${yy}-${mm}-${dd}`
}

export default addDays
