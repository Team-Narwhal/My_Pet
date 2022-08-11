// import { Pet } from './Pet'; 

class Jackalope extends Pet {
    constructor({id, name, hunger, energy, health, isAlive, poop, level, isHappy, attack, hp, type, defense} = petData) {
        super(id, name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = attack;
        this.hp = hp;
        this.type = "Jackalope";
        this.defense = defense;
    }
};

class Unicorn extends Pet {
    constructor({id, name, hunger, energy, health, isAlive, poop, level, isHappy, attack, hp, type, defense} = petData) {
        super(id, name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = attack;
        this.hp = hp;
        this.type = "Unicorn";
        this.defense = defense;
    }
};

class Yeti extends Pet {
    constructor({id, name, hunger, energy, health, isAlive, poop, level, isHappy, attack, hp, type, defense} = petData) {
        super(id, name, hunger, energy, health, isAlive, poop, level, isHappy);
        this.attack = attack;
        this.hp = hp;
        this.type = "Yeti";
        this.defense = defense;
    }
};

// module.export = {
//     Jackalope,
//     Unicorn,
//     Yeti,
// };