function solve(data) {
    let heros = [];

    for (const row of data) {
        const [name, level, ...items] =  row.split(" / ");
        const hero = {
            name: name,
            level: Number(level),
            items: items,
        };

        heros.push(hero);
    }

    heros
        .sort((a, b) => a["level"] - b["level"])
        .forEach(x => console.log(`Hero: ${x["name"]}\nlevel => ${x["level"]}\nitems => ${x["items"].join(", ")}`));
}