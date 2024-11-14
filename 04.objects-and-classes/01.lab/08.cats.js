function solve(infos) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = Number(age);
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    infos
        .map((a) => a.split(" "))
        .map(([name, age]) => new Cat(name, age))
        .forEach((cat) => cat.meow());
}
