function solve(data) {
    let termsDescriptions = {};

    for (const jsonStr of data) {
        const [term, description] = Object.entries(JSON.parse(jsonStr))[0];
        termsDescriptions[term] = description;
    }

    Object
        .entries(termsDescriptions)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([term, description]) => console.log(`Term: ${term} => Definition: ${description}`));
}