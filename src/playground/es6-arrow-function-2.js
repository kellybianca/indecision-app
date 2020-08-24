// arguments objects

const add = (a, b) => {
    return a + b;
};

console.log(add(55, 1));

// this keyword

const user = {
    name: 'kelly',
    cities: ['rio largo', 'maceio'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' viveu ' + city );
        // user.cities.forEach((city) => {
        //     console.log(that.name + ' has lived in '+ city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => {
            return number * this.multiplyBy;
        });
    } 
}

console.log(multiplier.multiply());