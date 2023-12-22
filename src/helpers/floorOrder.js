export default function floorOrder(number) {
    const suffix =
        (number % 10 === 1 && number % 100 !== 11) ? '' :
        (number % 10 === 2 && number % 100 !== 12) ? '' :
        (number % 10 === 3 && number % 100 !== 13) ? '' : ''
    return number + suffix
}

