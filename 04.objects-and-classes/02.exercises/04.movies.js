function solve(data) {
    let movies = [];
    const addMovieCommand = "addMovie";
    const directedByCommand = "directedBy";
    const onDateCommand = "onDate";

    for (const row of data) {
        if (row.includes(addMovieCommand)) {
            const movie = {
                name: row.substring(addMovieCommand.length + 1),
            };
            
            movies.push(movie);
        } else if (row.includes(directedByCommand)) {
            const [name, director] = row.split(` ${directedByCommand} `);
            const movie = movies.find((movie) => movie.name == name);

            if (movie) {
                movie["director"] = director;
            }
        } else {
            const [name, date] = row.split(` ${onDateCommand} `);
            const movie = movies.find((movie) => movie.name == name);

            if (movie) {
                movie["date"] = date;
            }
        }
    }

    movies
        .filter((movie) => movie.director && movie.date)
        .forEach((movie) => console.log(JSON.stringify(movie)));
}