import { Pet } from './Pet'; 

class Jackalope extends Pet {
    constructor(name, hunger, energy, health, isAlive, poop, level, isHappy) {
        super(name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = 50;
        this.hp = 200;
        this.type = "Jackalope";
        this.defense = 30;
    }
};

export {
    Jackalope,
};