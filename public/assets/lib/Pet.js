// Create a Pet Class to use for instances on the front end
// Construct with data from the backend

// let health = 8;
// let hunger = 1000;
// let energy = 1000;
// let poop = 0; max4
// let level = 0;

class Pet {
    constructor(name, hunger, energy, health, isAlive, poop, level, isHappy) {
        // use the 'this' syntax
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
        alert('You cleaned a lot of poop.');
    };

    feed() {
        alert('Nom nom nom!');
        // edit an attribute if needed
        this.hunger += 25;
    };

    health() {
        this.isSick = false;
        if (this.poop >= 3) {
            this.health - 1 //subtract every day;
        } else if (this.poop >= 5) {
            this.isSick = true;
            alert('Your pet is sick!')
        }
    };

    // NIFER
    medicine() {
        alert("You're pet is feeling bettter");
        // edit an attribute if needed
        this.health += 1;
    };

    happy() {
        if (this.poop <= 3 && this.hunger <= 500 && this.health >= 500) {
            alert(':)')
            // tamagotchi happy graphics 
        }
    };

    sleep() {
        // if light is off
        if (light === false) {
            alert('Zzzz');
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