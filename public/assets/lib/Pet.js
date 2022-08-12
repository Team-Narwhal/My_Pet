// Create a Pet Class to use for instances on the front end
// Construct with data from the backend

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

    cleanPoop() {
        // Nifer -- added so that it sets poop to 0 when called from petCare.js when cleanBtn is used
        if (this.poop > 0)
            this.poop -= 1;
        // Add modal for future development.
        // alert('You cleaned a lot of poop.');
    };

    feed() {
        // Add modal for future development.
        // alert('Nom nom nom!');
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
        } else if (this.poop === 4 && this.hunger <= 25 && this.energy <= 50) {
            this.isSick = true;
            // Add modal for future development.
            // alert(`${this.name} is sick! 🤒`)
        }
    };

    // NIFER
    medicine() {
        this.health += 1;
        // Add modal for future development.
        // alert(`${this.name} is feeling better!`);
    };

    happy() {
        if (this.poop <= 3 && this.hunger <= 50 && this.health >= 50) {
            // Add modal for future development.
            // alert('😃')
            // tamagotchi happy graphics 
        }
    };

    sleep() {
        // if light is off
        if (light === false) {
            // Add modal for future development.
            // alert('Zzzz... 😪');
            // for each night/sleep add health
            this.health;
        }
    };
};