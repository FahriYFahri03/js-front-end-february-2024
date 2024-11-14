function solve(data) {
    let towns = [];

    for (const townInfo of data) {
        const [town, latitude, longitude] = townInfo.split(" | ");
        towns.push(
            {
                town: town,
                latitude: Number(latitude).toFixed(2),
                longitude: Number(longitude).toFixed(2),
            }
        );
    }

    towns.forEach((town) => console.log(town));
}