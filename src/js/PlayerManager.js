import Player from './Player.js'; // Importuoji Player klasę
import Type from './Type.js';

export default class PlayerManager {
    constructor() {
        this.playerList = [];
        this.typeList = [
            new Type('Archer'),
            new Type('Mage'),
            new Type('Warrior')
        ];
    }

    addPlayer(player) {
        this.playerList.push(player);
    }

    addType(type) {
        this.typeList.push(type);
    }

    showAllPlayers() {
        return this.playerList.map(player => player.showInfo());
    }

    calculateProgress(player) {
        const currentXp = player.getXp();
        const xpForCurrentLevel = (player.getLevel() - 1) * 1000;
        const xpForNextLevel = player.getLevel() * 1000;
        const progress = ((currentXp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100;
        return Math.min(Math.max(progress, 0), 100);
    }

    generateTypeList() {
        let counter = 1;
        let htmlContent = '<h2>Type list:</h2>'
        htmlContent += '<table>';
        htmlContent += `
            <tr>
                <th>Number</th>
                <th>Type name</th>
                <th>Edit/Delete</th>
            </tr>
        `;

        this.typeList.forEach(t => {
            htmlContent += `
            <tr>
            <td>${counter++}</td>
            <td>${t.getTypeName()}</td>
            <td>
                <button data-type-id="${t.getTypeName()}" class="action-btn edit-button">
                <img src="img/edit.svg" width="25px">
                </button>
                <button data-type-id="${t.getTypeName()}" class="action-btn delete-button">
                <img src="img/delete.svg" width="25px">
                </button>
            </td>`
        });
        htmlContent += '</table>';

        setTimeout(() => {
            this.addEditListeners();
            this.addDeleteListeners();
        }, 0);

        return htmlContent;
    }

    generateInnerHTML() {

        let counter = 1;
        let htmlContent = '<h2>Player list:</h2>'
        htmlContent += '<table>';
        htmlContent += `
            <tr>
                <th>Number</th>
                <th>Player</th>
                <th>Type</th>
                <th>Level</th>
                <th>XP</th>
                <th>Progress</th>
                <th>Edit/Delete</th>
            </tr>
        `;

        this.playerList.forEach(p => {
            console.log(this.playerList);
            const progress = this.calculateProgress(p);
            htmlContent += `
                <tr>
                    <td>${counter++}</td>
                    <td>${p.getName()}</td>
                    <td>${p.getType().getTypeName()}</td>
                    <td>${p.getLevel()}</td>
                    <td>${p.getXp()}</td>
                    <td>
                        <div class="progress-bar">
                        <span class="percent">${progress.toFixed(0)}%</span>
                            <div class="progress-fill" style="width: ${progress}%"></div>
                        </div>
                    </td>
                    <td>
                        <button data-player-id="${p.getName()}" class="action-btn edit-button">
                            <img src="img/edit.svg" width="25px">
                        </button>
                        <button data-player-id="${p.getName()}" class="action-btn delete-button">
                            <img src="img/delete.svg" width="25px">
                        </button>
                    </td>
                </tr>
            `;
        });
        htmlContent += '</table>';

        // Pridedame listenerius po HTML sugeneravimo
        setTimeout(() => {
            this.addEditListeners();
            this.addDeleteListeners();
        }, 0);

        return htmlContent;
    }

    addDeleteListeners() {
        setTimeout(() => {
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const playerId = e.target.closest('button').dataset.playerId;
                    const typeId = e.target.closest('button').dataset.typeId;
                    if (confirm('Do you really want to delete?')) {
                        this.deletePlayer(playerId);
                        this.deleteType(typeId);
                    }
                })
            })
        }, 0);
    }

    deleteType(typeId) {
        const type = this.typeList.findIndex(t => t.getTypeName() === typeId)
        if (type !== -1) {
            this.typeList.splice(type, 1);
            content.innerHTML = this.generateTypeList();
            console.log(`${typeId} buvo pašalintas.`)
        }
    }

    deletePlayer(playerId) {
        const player = this.playerList.findIndex(p => p.getName() === playerId)
        if (player !== -1) {
            this.playerList.splice(player, 1);
            content.innerHTML = this.generateInnerHTML();
            console.log(`${playerId} buvo pašalintas.`)
        }
    }

    addEditListeners() {
        setTimeout(() => {
            const editButtons = document.querySelectorAll('.edit-button');
            editButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const playerId = e.target.closest('button').dataset.playerId;
                    const typeId = e.target.closest('button').dataset.typeId;
                    this.editPlayer(playerId);
                    this.editTypePlayer(typeId);
                })
            })
        }, 0);
    }

    editPlayer(playerId) {
        const player = this.playerList.find(p => p.getName() === playerId);
        if (player) {
            const modal = document.getElementById("editModal");
            const playerNameInput = document.getElementById("editPlayerName");
            const playerXpInput = document.getElementById("editPlayerXp");
            const playerTypeInput = document.getElementById("editPlayerType");
            const editForm = document.getElementById("editPlayerForm");

            this.generateEditType(player, playerTypeInput);

            playerNameInput.value = player.getName();
            playerXpInput.value = player.getXp();
            playerTypeInput.value = player.getType().getTypeName();


            modal.style.display = "flex";

            editForm.onsubmit = (e) => {
                e.preventDefault();

                const newPlayerInput = playerNameInput.value.trim();

                if (!newPlayerInput) {
                    alert("Player name cannot be empty!");
                    return;
                }
        
                if (newPlayerInput !== player.getName() && this.playerList.some(p => p.getName() === newPlayerInput)) {
                    alert("Player name already exists!");
                    return;
                }

                player.setName(playerNameInput.value.trim());
                player.setXp(playerXpInput.value);
                player.setLevel(Math.min(Math.floor(playerXpInput.value / 1000) + 1, 100))
                player.setType(this.typeList.find(type => type.getTypeName() === playerTypeInput.value))

                document.getElementById("content").innerHTML = this.generateInnerHTML();

                modal.style.display = "none";
            };
        }
    }

    editTypePlayer(typeId) {
        const type = this.typeList.find(t => t.getTypeName() === typeId);
        if (type) {
            const modal = document.getElementById("editTypeModal");
            const typeNameInput = document.getElementById("editType");
            const editTypeForm = document.getElementById("editTypeForm");
            const closeButton = modal.querySelector(".close-btn");

            modal.style.display = "flex";

            typeNameInput.value = type.getTypeName();

            editTypeForm.onsubmit = (e) => {
                e.preventDefault();
                const newTypeName = typeNameInput.value.trim();

                if (!newTypeName) {
                    alert("Type name cannot be empty!");
                    return;
                }
                if (this.typeList.some(t => t.getTypeName() === newTypeName && t !== type)) {
                    alert("Type name already exists!");
                    return;
                }

                type.setTypeName(newTypeName);

                document.getElementById("content").innerHTML = this.generateTypeList();
                modal.style.display = "none";
            };

            closeButton.onclick = () => {
                modal.style.display = "none";
            };
        }
    }

    generateEditType(player, playerTypeInput) { // Funkcija kaip metodas
        playerTypeInput.innerHTML = `
            <option value="">Edit player type</option>
            ${this.typeList.map(type => {
            const isSelected = type.getTypeName() === player.getType().getTypeName() ? ' selected' : '';
            return `<option value="${type.getTypeName()}"${isSelected}>${type.getTypeName()}</option>`;
        }).join('')}
        `;
    }
}



//modalo mygtukai
const modal = document.getElementById("editModal");
const modalType = document.getElementById("editTypeModal");
const closeModal = document.querySelector(".close-btn");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal || event.target === modalType) {
        modal.style.display = "none";
        modalType.style.display = "none";
    }
});
