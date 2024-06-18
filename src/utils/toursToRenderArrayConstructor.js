export const toursToRenderArrayConstructor = (destination) => {
    let array = [];
    destination?.tours.map((tour) => {
        array.push(tour.tourObj)
    })
    return array
}