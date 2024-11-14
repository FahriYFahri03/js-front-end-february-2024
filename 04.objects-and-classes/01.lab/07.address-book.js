function solve(infos) {
    const persons = {};

    for (const info of infos) {
        const [name, address] = info.split(":");
        persons[name] = address;
    }

    Object
        .entries(persons)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}