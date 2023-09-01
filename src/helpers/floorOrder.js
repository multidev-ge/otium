export default function floorOrder(index) {
    const suffix = index === 1 ? 'st' : index === 2 ? 'nd' : index === 3 ? 'rd' : 'th'
    return index + suffix
}