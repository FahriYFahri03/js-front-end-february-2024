function solve(infos) {
    let meetings = {};

    for (const info of infos) {
        const [weekday, name] = info.split(" ");

        if (meetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            meetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    Object
        .entries(meetings)
        .forEach(([key, value]) => console.log(`${key} -> ${value}`));
}