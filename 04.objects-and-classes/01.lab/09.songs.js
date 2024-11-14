function solve(infos) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];
    const searchedTypeList = infos.pop();

    for (let i = 1; i < infos.length; i++) {
        const [typeList, name, time] = infos[i].split("_");
        songs.push(new Song(typeList, name, time));
    }

    if (searchedTypeList == "all") {
        songs.forEach((song) => console.log(song.name));
    } else {
        songs
        .filter((song) => song.typeList == searchedTypeList)
        .forEach((song) => console.log(song.name));
    }
}