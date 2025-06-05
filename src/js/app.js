import Player from './Player.js';
import PlayerManager from './PlayerManager.js';
import Type from './Type.js'

const archer = new Type('Archer');
const mage = new Type('Mage');
const warrior = new Type('Warrior');

const zaidejas1 = new Player('Dolbis', 3, 2200, archer);
const zaidejas2 = new Player('Rombas', 4, 3600, mage);
const zaidejas3 = new Player('Zingas', 5, 4900, warrior);

archer.addPlayer(zaidejas1);
mage.addPlayer(zaidejas2);
warrior.addPlayer(zaidejas3);

console.log(zaidejas1.showInfo());
console.log(zaidejas2.showInfo());
console.log(zaidejas3.showInfo());


const manager = new PlayerManager();
console.log(manager);

manager.addPlayer(zaidejas1);
manager.addPlayer(zaidejas2);
manager.addPlayer(zaidejas3);


console.log(archer.getPlayerList());

//HTML TURINIO KURIMAS -- zaidejo sukurimas

const content = document.getElementById('content');

const addPlayerOption = document.getElementById('addPlayerOption');
addPlayerOption.addEventListener('click', () => displayCreatePlayer());

function displayCreatePlayer() {
    content.innerHTML = `
    <h2>Fill your desired player below:</h2>
    <form id="addPlayerForm" class="addForm">
        <label for="PlayerName">Player name:</label> 
        <input type="text" id="PlayerName">

        <label for="PlayerXp">Player XP:</label> 
        <input type="number" id="PlayerXp">

        <label for="PlayerType">Player type:</label>

        <select id="PlayerType">
            <option value="">Choose player type</option>
            ${manager.typeList.map(type => `<option value="${type.getTypeName()}">${type.getTypeName()}</option>`).join('')}
        </select>

        <button class="btn" type="submit">Save player</button>
    </form>
    `;

    const addPlayerForm = document.getElementById('addPlayerForm');

    addPlayerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const playerName = e.target.PlayerName.value.trim();
        const playerXp = parseInt(e.target.PlayerXp.value);
        const playerLevel = Math.min(Math.floor(playerXp / 1000) + 1, 100);
        const playerTypeValue = e.target.PlayerType.value;
        const playerType = manager.typeList.find(type => type.getTypeName() === playerTypeValue);

        const newPlayer = new Player(playerName, playerLevel, playerXp, playerType);

        if (!playerName) {
            alert("Player name cannot be empty!");
            return;
        }

        if (!playerXp) {
            alert("Player XP cannot be empty!");
            return;
        }

        if (manager.playerList.find(name => name.getName() === playerName)) {
            alert("Type name already exists!");
            return;
        }

        manager.addPlayer(newPlayer);
        playerType.addPlayer(newPlayer);
        e.target.reset();

        const content = document.getElementById('content')
        content.innerHTML = manager.generateInnerHTML();

    });
}


//HTML TURINIO KURIMAS -- tipo sukurimas
const addTypeOption = document.getElementById('addTypeOption');
addTypeOption.addEventListener('click', () => displayCreateType());

function displayCreateType() {
    content.innerHTML = `
    <h2>Fill your desired type below:</h2>
    <form id="addTypeForm" class="addForm">
        <label for="TypeName">Type name:</label> 
        <input type="text" id="TypeName" required>

        <button class="btn" type="submit">Save type</button>
    </form>
    `;

    const addTypeForm = document.getElementById('addTypeForm');

    addTypeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const playerType = e.target.TypeName.value.trim();

        const newType = new Type(playerType);

        if (!playerType) {
            alert("Type name cannot be empty!");
            return;
        }

        if (manager.typeList.find(type => type.getTypeName() === playerType)) {
            alert("Type name already exists!");
            return;
        }

        manager.addType(newType);
        e.target.reset();

        content.innerHTML = manager.generateTypeList();
    });
};

//HTML - type list

const showTypeList = document.getElementById('showTypeList');

showTypeList.addEventListener('click', () => displayTypeList());

function displayTypeList() {
    content.innerHTML = manager.generateTypeList();
};


//HTML TURINIO KURIMAS -- zaideju sarasas

const showPlayerList = document.getElementById('showPlayerList');

showPlayerList.addEventListener('click', () => displayPlayerList());

function displayPlayerList() {
    content.innerHTML = manager.generateInnerHTML();
};

// Grizimas i main page

const showMainPage = document.getElementById('showMainPage');

showMainPage.addEventListener('click', () => {
    window.location.href = 'index.html';
})


