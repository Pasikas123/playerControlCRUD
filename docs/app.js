/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _PlayerManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlayerManager.js */ "./src/js/PlayerManager.js");
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type.js */ "./src/js/Type.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
 // Importuoji Player klasę

var _name = /*#__PURE__*/new WeakMap();
var _level = /*#__PURE__*/new WeakMap();
var _xp = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
var Player = /*#__PURE__*/function () {
  function Player(name, level, xp, type) {
    _classCallCheck(this, Player);
    _classPrivateFieldInitSpec(this, _name, void 0);
    _classPrivateFieldInitSpec(this, _level, void 0);
    _classPrivateFieldInitSpec(this, _xp, void 0);
    _classPrivateFieldInitSpec(this, _type, void 0);
    _classPrivateFieldSet(_name, this, name);
    _classPrivateFieldSet(_level, this, level);
    _classPrivateFieldSet(_xp, this, xp);
    _classPrivateFieldSet(_type, this, type);
  }

  // getteriai
  return _createClass(Player, [{
    key: "getName",
    value: function getName() {
      return _classPrivateFieldGet(_name, this);
    }
  }, {
    key: "getLevel",
    value: function getLevel() {
      return _classPrivateFieldGet(_level, this);
    }
  }, {
    key: "getXp",
    value: function getXp() {
      return _classPrivateFieldGet(_xp, this);
    }
  }, {
    key: "getType",
    value: function getType() {
      return _classPrivateFieldGet(_type, this);
    }
  }, {
    key: "showInfo",
    value: function showInfo() {
      return "Player: ".concat(_classPrivateFieldGet(_name, this), ", Level: ").concat(_classPrivateFieldGet(_level, this), ", XP: ").concat(_classPrivateFieldGet(_xp, this), ", Type: ").concat(_classPrivateFieldGet(_type, this).getTypeName());
    }

    // setteriai
  }, {
    key: "setName",
    value: function setName(newName) {
      _classPrivateFieldSet(_name, this, newName);
    }
  }, {
    key: "setLevel",
    value: function setLevel(newLevel) {
      _classPrivateFieldSet(_level, this, newLevel);
    }
  }, {
    key: "setXp",
    value: function setXp(newXp) {
      _classPrivateFieldSet(_xp, this, newXp);
    }
  }, {
    key: "setType",
    value: function setType(newType) {
      _classPrivateFieldSet(_type, this, newType);
    }
  }]);
}();


/***/ }),

/***/ "./src/js/PlayerManager.js":
/*!*********************************!*\
  !*** ./src/js/PlayerManager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlayerManager)
/* harmony export */ });
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Type.js */ "./src/js/Type.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
 // Importuoji Player klasę

var PlayerManager = /*#__PURE__*/function () {
  function PlayerManager() {
    _classCallCheck(this, PlayerManager);
    this.playerList = [];
    this.typeList = [new _Type_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Archer'), new _Type_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Mage'), new _Type_js__WEBPACK_IMPORTED_MODULE_1__["default"]('Warrior')];
  }
  return _createClass(PlayerManager, [{
    key: "addPlayer",
    value: function addPlayer(player) {
      this.playerList.push(player);
    }
  }, {
    key: "addType",
    value: function addType(type) {
      this.typeList.push(type);
    }
  }, {
    key: "showAllPlayers",
    value: function showAllPlayers() {
      return this.playerList.map(function (player) {
        return player.showInfo();
      });
    }
  }, {
    key: "calculateProgress",
    value: function calculateProgress(player) {
      var currentXp = player.getXp();
      var xpForCurrentLevel = (player.getLevel() - 1) * 1000;
      var xpForNextLevel = player.getLevel() * 1000;
      var progress = (currentXp - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel) * 100;
      return Math.min(Math.max(progress, 0), 100);
    }
  }, {
    key: "generateTypeList",
    value: function generateTypeList() {
      var _this = this;
      var counter = 1;
      var htmlContent = '<h2>Type list:</h2>';
      htmlContent += '<table>';
      htmlContent += "\n            <tr>\n                <th>Number</th>\n                <th>Type name</th>\n                <th>Edit/Delete</th>\n            </tr>\n        ";
      this.typeList.forEach(function (t) {
        htmlContent += "\n            <tr>\n            <td>".concat(counter++, "</td>\n            <td>").concat(t.getTypeName(), "</td>\n            <td>\n                <button data-type-id=\"").concat(t.getTypeName(), "\" class=\"action-btn edit-button\">\n                <img src=\"img/edit.svg\" width=\"25px\">\n                </button>\n                <button data-type-id=\"").concat(t.getTypeName(), "\" class=\"action-btn delete-button\">\n                <img src=\"img/delete.svg\" width=\"25px\">\n                </button>\n            </td>");
      });
      htmlContent += '</table>';
      setTimeout(function () {
        _this.addEditListeners();
        _this.addDeleteListeners();
      }, 0);
      return htmlContent;
    }
  }, {
    key: "generateInnerHTML",
    value: function generateInnerHTML() {
      var _this2 = this;
      var counter = 1;
      var htmlContent = '<h2>Player list:</h2>';
      htmlContent += '<table>';
      htmlContent += "\n            <tr>\n                <th>Number</th>\n                <th>Player</th>\n                <th>Type</th>\n                <th>Level</th>\n                <th>XP</th>\n                <th>Progress</th>\n                <th>Edit/Delete</th>\n            </tr>\n        ";
      this.playerList.forEach(function (p) {
        console.log(_this2.playerList);
        var progress = _this2.calculateProgress(p);
        htmlContent += "\n                <tr>\n                    <td>".concat(counter++, "</td>\n                    <td>").concat(p.getName(), "</td>\n                    <td>").concat(p.getType().getTypeName(), "</td>\n                    <td>").concat(p.getLevel(), "</td>\n                    <td>").concat(p.getXp(), "</td>\n                    <td>\n                        <div class=\"progress-bar\">\n                        <span class=\"percent\">").concat(progress.toFixed(0), "%</span>\n                            <div class=\"progress-fill\" style=\"width: ").concat(progress, "%\"></div>\n                        </div>\n                    </td>\n                    <td>\n                        <button data-player-id=\"").concat(p.getName(), "\" class=\"action-btn edit-button\">\n                            <img src=\"img/edit.svg\" width=\"25px\">\n                        </button>\n                        <button data-player-id=\"").concat(p.getName(), "\" class=\"action-btn delete-button\">\n                            <img src=\"img/delete.svg\" width=\"25px\">\n                        </button>\n                    </td>\n                </tr>\n            ");
      });
      htmlContent += '</table>';

      // Pridedame listenerius po HTML sugeneravimo
      setTimeout(function () {
        _this2.addEditListeners();
        _this2.addDeleteListeners();
      }, 0);
      return htmlContent;
    }
  }, {
    key: "addDeleteListeners",
    value: function addDeleteListeners() {
      var _this3 = this;
      setTimeout(function () {
        var deleteButtons = document.querySelectorAll('.delete-button');
        deleteButtons.forEach(function (button) {
          button.addEventListener('click', function (e) {
            var playerId = e.target.closest('button').dataset.playerId;
            var typeId = e.target.closest('button').dataset.typeId;
            if (confirm('Do you really want to delete?')) {
              _this3.deletePlayer(playerId);
              _this3.deleteType(typeId);
            }
          });
        });
      }, 0);
    }
  }, {
    key: "deleteType",
    value: function deleteType(typeId) {
      var type = this.typeList.findIndex(function (t) {
        return t.getTypeName() === typeId;
      });
      if (type !== -1) {
        this.typeList.splice(type, 1);
        content.innerHTML = this.generateTypeList();
        console.log("".concat(typeId, " buvo pa\u0161alintas."));
      }
    }
  }, {
    key: "deletePlayer",
    value: function deletePlayer(playerId) {
      var player = this.playerList.findIndex(function (p) {
        return p.getName() === playerId;
      });
      if (player !== -1) {
        this.playerList.splice(player, 1);
        content.innerHTML = this.generateInnerHTML();
        console.log("".concat(playerId, " buvo pa\u0161alintas."));
      }
    }
  }, {
    key: "addEditListeners",
    value: function addEditListeners() {
      var _this4 = this;
      setTimeout(function () {
        var editButtons = document.querySelectorAll('.edit-button');
        editButtons.forEach(function (button) {
          button.addEventListener('click', function (e) {
            var playerId = e.target.closest('button').dataset.playerId;
            var typeId = e.target.closest('button').dataset.typeId;
            _this4.editPlayer(playerId);
            _this4.editTypePlayer(typeId);
          });
        });
      }, 0);
    }
  }, {
    key: "editPlayer",
    value: function editPlayer(playerId) {
      var _this5 = this;
      var player = this.playerList.find(function (p) {
        return p.getName() === playerId;
      });
      if (player) {
        var _modal = document.getElementById("editModal");
        var playerNameInput = document.getElementById("editPlayerName");
        var playerXpInput = document.getElementById("editPlayerXp");
        var playerTypeInput = document.getElementById("editPlayerType");
        var editForm = document.getElementById("editPlayerForm");
        this.generateEditType(player, playerTypeInput);
        playerNameInput.value = player.getName();
        playerXpInput.value = player.getXp();
        playerTypeInput.value = player.getType().getTypeName();
        _modal.style.display = "flex";
        editForm.onsubmit = function (e) {
          e.preventDefault();
          var newPlayerInput = playerNameInput.value.trim();
          if (!newPlayerInput) {
            alert("Player name cannot be empty!");
            return;
          }
          if (newPlayerInput !== player.getName() && _this5.playerList.some(function (p) {
            return p.getName() === newPlayerInput;
          })) {
            alert("Player name already exists!");
            return;
          }
          player.setName(playerNameInput.value.trim());
          player.setXp(playerXpInput.value);
          player.setLevel(Math.min(Math.floor(playerXpInput.value / 1000) + 1, 100));
          player.setType(_this5.typeList.find(function (type) {
            return type.getTypeName() === playerTypeInput.value;
          }));
          document.getElementById("content").innerHTML = _this5.generateInnerHTML();
          _modal.style.display = "none";
        };
      }
    }
  }, {
    key: "editTypePlayer",
    value: function editTypePlayer(typeId) {
      var _this6 = this;
      var type = this.typeList.find(function (t) {
        return t.getTypeName() === typeId;
      });
      if (type) {
        var _modal2 = document.getElementById("editTypeModal");
        var typeNameInput = document.getElementById("editType");
        var editTypeForm = document.getElementById("editTypeForm");
        var closeButton = _modal2.querySelector(".close-btn");
        _modal2.style.display = "flex";
        typeNameInput.value = type.getTypeName();
        editTypeForm.onsubmit = function (e) {
          e.preventDefault();
          var newTypeName = typeNameInput.value.trim();
          if (!newTypeName) {
            alert("Type name cannot be empty!");
            return;
          }
          if (_this6.typeList.some(function (t) {
            return t.getTypeName() === newTypeName && t !== type;
          })) {
            alert("Type name already exists!");
            return;
          }
          type.setTypeName(newTypeName);
          document.getElementById("content").innerHTML = _this6.generateTypeList();
          _modal2.style.display = "none";
        };
        closeButton.onclick = function () {
          _modal2.style.display = "none";
        };
      }
    }
  }, {
    key: "generateEditType",
    value: function generateEditType(player, playerTypeInput) {
      // Funkcija kaip metodas
      playerTypeInput.innerHTML = "\n            <option value=\"\">Edit player type</option>\n            ".concat(this.typeList.map(function (type) {
        var isSelected = type.getTypeName() === player.getType().getTypeName() ? ' selected' : '';
        return "<option value=\"".concat(type.getTypeName(), "\"").concat(isSelected, ">").concat(type.getTypeName(), "</option>");
      }).join(''), "\n        ");
    }
  }]);
}(); //modalo mygtukai

var modal = document.getElementById("editModal");
var modalType = document.getElementById("editTypeModal");
var closeModal = document.querySelector(".close-btn");
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});
window.addEventListener("click", function (event) {
  if (event.target === modal || event.target === modalType) {
    modal.style.display = "none";
    modalType.style.display = "none";
  }
});

/***/ }),

/***/ "./src/js/Type.js":
/*!************************!*\
  !*** ./src/js/Type.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Type)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _id = /*#__PURE__*/new WeakMap();
var _typeName = /*#__PURE__*/new WeakMap();
var _playerList = /*#__PURE__*/new WeakMap();
var Type = /*#__PURE__*/function () {
  function Type(name) {
    _classCallCheck(this, Type);
    _classPrivateFieldInitSpec(this, _id, void 0);
    _classPrivateFieldInitSpec(this, _typeName, void 0);
    _classPrivateFieldInitSpec(this, _playerList, void 0);
    Type.typeCounter++;
    _classPrivateFieldSet(_id, this, Type.typeCounter);
    _classPrivateFieldSet(_typeName, this, name);
    _classPrivateFieldSet(_playerList, this, []);
    if (!name || name.trim() === '') {
      console.log('Name is not correct.');
    }
  }
  return _createClass(Type, [{
    key: "getId",
    value: function getId() {
      return _classPrivateFieldGet(_id, this);
    }
  }, {
    key: "getTypeName",
    value: function getTypeName() {
      return _classPrivateFieldGet(_typeName, this);
    }
  }, {
    key: "getPlayerList",
    value: function getPlayerList() {
      return _classPrivateFieldGet(_playerList, this);
    }
  }, {
    key: "setTypeName",
    value: function setTypeName(newName) {
      _classPrivateFieldSet(_typeName, this, newName);
    }
  }, {
    key: "addPlayer",
    value: function addPlayer(player) {
      _classPrivateFieldGet(_playerList, this).push(player);
    }
  }]);
}();
_defineProperty(Type, "typeCounter", 0);


/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player.js */ "./src/js/Player.js");
/* harmony import */ var _PlayerManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlayerManager.js */ "./src/js/PlayerManager.js");
/* harmony import */ var _Type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Type.js */ "./src/js/Type.js");



var archer = new _Type_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Archer');
var mage = new _Type_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Mage');
var warrior = new _Type_js__WEBPACK_IMPORTED_MODULE_2__["default"]('Warrior');
var zaidejas1 = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Dolbis', 3, 2200, archer);
var zaidejas2 = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Rombas', 4, 3600, mage);
var zaidejas3 = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"]('Zingas', 5, 4900, warrior);
archer.addPlayer(zaidejas1);
mage.addPlayer(zaidejas2);
warrior.addPlayer(zaidejas3);
console.log(zaidejas1.showInfo());
console.log(zaidejas2.showInfo());
console.log(zaidejas3.showInfo());
var manager = new _PlayerManager_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
console.log(manager);
manager.addPlayer(zaidejas1);
manager.addPlayer(zaidejas2);
manager.addPlayer(zaidejas3);
console.log(archer.getPlayerList());

//HTML TURINIO KURIMAS -- zaidejo sukurimas

var content = document.getElementById('content');
var addPlayerOption = document.getElementById('addPlayerOption');
addPlayerOption.addEventListener('click', function () {
  return displayCreatePlayer();
});
function displayCreatePlayer() {
  content.innerHTML = "\n    <h2>Fill your desired player below:</h2>\n    <form id=\"addPlayerForm\" class=\"addForm\">\n        <label for=\"PlayerName\">Player name:</label> \n        <input type=\"text\" id=\"PlayerName\">\n\n        <label for=\"PlayerXp\">Player XP:</label> \n        <input type=\"number\" id=\"PlayerXp\">\n\n        <label for=\"PlayerType\">Player type:</label>\n\n        <select id=\"PlayerType\">\n            <option value=\"\">Choose player type</option>\n            ".concat(manager.typeList.map(function (type) {
    return "<option value=\"".concat(type.getTypeName(), "\">").concat(type.getTypeName(), "</option>");
  }).join(''), "\n        </select>\n\n        <button class=\"btn\" type=\"submit\">Save player</button>\n    </form>\n    ");
  var addPlayerForm = document.getElementById('addPlayerForm');
  addPlayerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var playerName = e.target.PlayerName.value.trim();
    var playerXp = parseInt(e.target.PlayerXp.value);
    var playerLevel = Math.min(Math.floor(playerXp / 1000) + 1, 100);
    var playerTypeValue = e.target.PlayerType.value;
    var playerType = manager.typeList.find(function (type) {
      return type.getTypeName() === playerTypeValue;
    });
    var newPlayer = new _Player_js__WEBPACK_IMPORTED_MODULE_0__["default"](playerName, playerLevel, playerXp, playerType);
    if (!playerName) {
      alert("Player name cannot be empty!");
      return;
    }
    if (!playerXp) {
      alert("Player XP cannot be empty!");
      return;
    }
    if (manager.playerList.find(function (name) {
      return name.getName() === playerName;
    })) {
      alert("Type name already exists!");
      return;
    }
    manager.addPlayer(newPlayer);
    playerType.addPlayer(newPlayer);
    e.target.reset();
    var content = document.getElementById('content');
    content.innerHTML = manager.generateInnerHTML();
  });
}

//HTML TURINIO KURIMAS -- tipo sukurimas
var addTypeOption = document.getElementById('addTypeOption');
addTypeOption.addEventListener('click', function () {
  return displayCreateType();
});
function displayCreateType() {
  content.innerHTML = "\n    <h2>Fill your desired type below:</h2>\n    <form id=\"addTypeForm\" class=\"addForm\">\n        <label for=\"TypeName\">Type name:</label> \n        <input type=\"text\" id=\"TypeName\" required>\n\n        <button class=\"btn\" type=\"submit\">Save type</button>\n    </form>\n    ";
  var addTypeForm = document.getElementById('addTypeForm');
  addTypeForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var playerType = e.target.TypeName.value.trim();
    var newType = new _Type_js__WEBPACK_IMPORTED_MODULE_2__["default"](playerType);
    if (!playerType) {
      alert("Type name cannot be empty!");
      return;
    }
    if (manager.typeList.find(function (type) {
      return type.getTypeName() === playerType;
    })) {
      alert("Type name already exists!");
      return;
    }
    manager.addType(newType);
    e.target.reset();
    content.innerHTML = manager.generateTypeList();
  });
}
;

//HTML - type list

var showTypeList = document.getElementById('showTypeList');
showTypeList.addEventListener('click', function () {
  return displayTypeList();
});
function displayTypeList() {
  content.innerHTML = manager.generateTypeList();
}
;

//HTML TURINIO KURIMAS -- zaideju sarasas

var showPlayerList = document.getElementById('showPlayerList');
showPlayerList.addEventListener('click', function () {
  return displayPlayerList();
});
function displayPlayerList() {
  content.innerHTML = manager.generateInnerHTML();
}
;

// Grizimas i main page

var showMainPage = document.getElementById('showMainPage');
showMainPage.addEventListener('click', function () {
  window.location.href = 'index.html';
});

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/app": 0,
/******/ 			"docs/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplayercontrol"] = self["webpackChunkplayercontrol"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/style"], () => (__webpack_require__("./src/style/style.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;