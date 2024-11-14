function solve(infos) {
    let person = {};

    for (const info of infos) {
        const [name, phoneNum] = info.split(" ");
        person[name] = phoneNum;
    }

    Object
        .entries(person)
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}