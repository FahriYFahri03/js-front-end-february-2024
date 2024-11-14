function solve(data) {
    let wordsOccurrences = new Map();
    const words = data.toLowerCase().split(" ");

    for (const word of words) {
        if (!wordsOccurrences.get(word)) {
            wordsOccurrences.set(word, 0);
        }

        wordsOccurrences.set(word, wordsOccurrences.get(word) + 1);
    }

    const reult = [];
    
    for (const [word, occurrences] of wordsOccurrences) {
        if (occurrences % 2 != 0) {
            reult.push(word);
        }
    }
    
    console.log(reult.join(" "));
}