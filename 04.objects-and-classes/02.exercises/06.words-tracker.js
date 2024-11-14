function solve(data) {
    let wordsOccurrences = {};
    const [serachedWords, ...words] = data;

    serachedWords
        .split(" ")
        .forEach((word) => wordsOccurrences[word] = 0);

    for (const word of words) {
        if (word in wordsOccurrences) {
            wordsOccurrences[word] += 1;
        }
    }

    Object
        .entries(wordsOccurrences)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, occurrences]) => console.log(`${word} - ${occurrences}`));
}