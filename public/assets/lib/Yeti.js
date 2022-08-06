import { Pet } from './Pet'; 

class Yeti extends Pet {
    constructor(name, hunger, energy, health, isAlive, poop, level, isHappy, attack, hp, type, defense) {
        super(name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = attack;
        this.hp = hp;
        this.type = "Yeti";
        this.defense = defense;
    }
};

export {
    Yeti,
};