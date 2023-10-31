export default function floorOrder(number) {
    const suffix =
        (number % 10 === 1 && number % 100 !== 11) ? 'st' :
        (number % 10 === 2 && number % 100 !== 12) ? 'nd' :
        (number % 10 === 3 && number % 100 !== 13) ? 'rd' : 'th'
    return number + suffix
}

