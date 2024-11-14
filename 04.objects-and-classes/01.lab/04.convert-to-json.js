function solve(name, lastName, hairColor) {
    const person = {
        name,
        lastName,
        hairColor,
    };

    const jsonStr = JSON.stringify(person);
    console.log(jsonStr);
}