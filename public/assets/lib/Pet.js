// Create a Pet Class to use for instances on the front end
// Construct with data from the backend

// let health = 8;
// let hunger = 1000;
// let energy = 1000;
// let poop = 0; max4
// let level = 0;

class Pet {
    constructor(id, name, hunger, energy, health, isAlive, poop, level, isHappy) {
        // use the 'this' syntax
        this.id = id;
        this.name = name;
        this.hunger = hunger;
        this.energy = energy;
        this.health = health;
        this.isAlive = isAlive;
        this.poop = poop;
        this.level = level;
        this.isHappy = isHappy;
    };

    // Define methods that are the same for every Pet
    // Here are some very basic examples to get your creative
    // juices flowing.  If you run into a block, ask the group
    // Also, keeping it very basic for development is totally fine.
    // It would be good to get basic function done cleanly and quickly
    // You can comment ideas for new features so you can easily add them later!

    cleanPoop() {
        // Nifer -- added so that it sets poop to 0 when called from petCare.js when cleanBtn is used
        this.poop -= 1;
        alert('You cleaned a lot of poop! ✨');
    };

    feed() {
        alert('Nom nom nom!');
        this.hunger += 25;

    };

    // Angie
    health() {
        if (this.poop = 1) {
            this.health = 6;
        } else if (this.poop = 2) {
            this.health = 4;
        } else if (this.poop = 3) {
            this.health = 2;
        } else if (this.poop = 4 && this.hunger <= 25 && this.energy <= 50) {
            this.isSick = true;
            alert(`${this.name} is sick! 🤒`)
        }
    };

    // NIFER
    medicine() {
        this.health += 1;
        alert(`${this.name} is feeling better!`);
    };

    happy() {
        if (this.poop <= 3 && this.hunger <= 50 && this.health >= 50) {
            alert('😃')
            // tamagotchi happy graphics 
        }
    };

    sleep() {
        // if light is off
        if (light === false) {
            alert('Zzzz... 😪');
            // for each night/sleep add health
            this.health
        }
    };
};

// Don't forget to export
// module.exports = Pet;

// export {
//     Pet,
// };