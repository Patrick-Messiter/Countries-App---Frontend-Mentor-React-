
// Number with commas added

function formatPopulation(num) {
    let stringNumber = num.toString()
    stringNumber = stringNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return stringNumber
}

export {formatPopulation}