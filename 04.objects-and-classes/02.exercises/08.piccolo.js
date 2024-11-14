function solve(input) {
    const parking = {};

    for (const row of input) {
        const [direction, carNumber] = row.split(', ');

        direction === 'IN'
            ? parking[carNumber] = true
            : delete parking[carNumber];
    }

    if (!Object.keys(parking).length) {
        console.log("Parking Lot is Empty");
    } else {
        Object.keys(parking)
        .sort((a, b) => a.localeCompare(b))
        .forEach(carNumber => console.log(carNumber));
    }
}