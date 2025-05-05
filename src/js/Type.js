
export default class Type {

    #id;
    #typeName;
    #playerList;
   
    static typeCounter = 0;

    constructor(name){
        Type.typeCounter++;
        this.#id = Type.typeCounter;
        this.#typeName = name;
        this.#playerList = [];

        if (!name || name.trim() === '') {
            console.log('Name is not correct.');
        }
    }

    getId(){
        return this.#id;
    }

    getTypeName(){
        return this.#typeName;
    }

    getPlayerList() {  
        return this.#playerList;
    }  

    setTypeName(newName){
        this.#typeName = newName;
    }

    addPlayer(player) {
        this.#playerList.push(player);
    }
}