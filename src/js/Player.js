import PlayerManager from './PlayerManager.js'; // Importuoji Player klasę
import Type from './Type.js';


export default class Player {
    
    #name;
    #level;
    #xp;
    #type

    constructor(name, level, xp, type) {
        this.#name = name;
        this.#level = level;
        this.#xp = xp;
        this.#type = type;
    }

    // getteriai

    getName() {
        return this.#name;
    }

    getLevel() {
        return this.#level;
    }

    getXp() {
        return this.#xp;
    }
    
    getType() {
        return this.#type;
    }

    showInfo() {
        return `Player: ${this.#name}, Level: ${this.#level}, XP: ${this.#xp}, Type: ${this.#type.getTypeName()}`
    }

    // setteriai

    setName(newName) {
        this.#name = newName;
    }

    setLevel(newLevel) {
        this.#level = newLevel;
    }

    setXp(newXp) {
        this.#xp = newXp;
    }
    setType(newType) {
        this.#type = newType;
    }
}