// Esto lo hacemos para que tours e images tengan el mismo formato y se puedan reutilizar los componentes
export const toursToRenderArrayConstructor = (destination) => {
    let array = [];
    destination?.tours.map((tour) => {
        tour.tourObj.order = tour.order;
        array.push(tour.tourObj);
    })
    return array
}