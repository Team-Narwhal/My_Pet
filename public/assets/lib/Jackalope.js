import { Pet } from './Pet'; 

class Jackalope extends Pet {
    constructor(name, hunger, energy, health, isAlive, poop, level, isHappy, attack, hp, type, defense) {
        super(name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = attack;
        this.hp = hp;
        this.type = "Jackalope";
        this.defense = defense;
    }
};

export {
    Jackalope,
};