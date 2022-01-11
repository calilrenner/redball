/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Circle.ts":
/*!***********************!*\
  !*** ./src/Circle.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Circle = /** @class */ (function () {\n    function Circle(x, y, radius, color, context) {\n        this.x = x;\n        this.y = y;\n        this.radius = radius;\n        this.color = color;\n        this.context = context;\n    }\n    Circle.prototype.draw = function (x, y, radius, color) {\n        this.context.beginPath();\n        this.context.fillStyle = color;\n        this.context.arc(x, y, radius, 0, 2 * Math.PI);\n        this.context.fill();\n    };\n    return Circle;\n}());\nexports[\"default\"] = Circle;\n\n\n//# sourceURL=webpack://redball/./src/Circle.ts?");

/***/ }),

/***/ "./src/Enemy.ts":
/*!**********************!*\
  !*** ./src/Enemy.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/Circle.ts\");\nvar Enemy = /** @class */ (function (_super) {\n    __extends(Enemy, _super);\n    function Enemy(x, y, radius, color, speedX, speedY, context) {\n        var _this = _super.call(this, x, y, radius, color, context) || this;\n        _this.speedX = speedX;\n        _this.speedY = speedY;\n        return _this;\n    }\n    Enemy.prototype.draw = function (x, y) {\n        _super.prototype.draw.call(this, x, y, this.radius, this.color);\n    };\n    Enemy.prototype.updateState = function (game) {\n        this.move();\n        this.checkEnemyOutOfScreen(game.screenWidth, game.screenHeight);\n        this.checkColision(game);\n        this.draw(this.x, this.y);\n    };\n    Enemy.prototype.move = function () {\n        this.x += this.speedX;\n        this.y += this.speedY;\n    };\n    Enemy.prototype.checkEnemyOutOfScreen = function (screenWidth, screenHeight) {\n        if (this.x > screenWidth || this.x < 0) {\n            this.speedX *= -1;\n        }\n        if (this.y > screenHeight || this.y < 0) {\n            this.speedY *= -1;\n        }\n    };\n    Enemy.prototype.checkColision = function (game) {\n        var dist = Math.sqrt(Math.pow((game.player.x - this.x), 2) + Math.pow((game.player.y - this.y), 2));\n        if (dist <= game.player.getRadius() + this.radius) {\n            alert(\"DEU RUIM\");\n            game.clearScreen();\n            clearInterval(game.intervalId);\n            game.window.location.reload();\n        }\n    };\n    return Enemy;\n}(Circle_1[\"default\"]));\nexports[\"default\"] = Enemy;\n\n\n//# sourceURL=webpack://redball/./src/Enemy.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Enemy_1 = __webpack_require__(/*! ./Enemy */ \"./src/Enemy.ts\");\nvar Player_1 = __webpack_require__(/*! ./Player */ \"./src/Player.ts\");\nvar Game = /** @class */ (function () {\n    function Game(screenWidth, screenHeight, canvas, window) {\n        this.screenWidth = screenWidth;\n        this.screenHeight = screenHeight;\n        this.canvas = canvas;\n        this.window = window;\n        this.fps = 1000 / 60;\n        this.intervalId;\n        this.player;\n        this.enemies;\n        this.context;\n        this.canvas;\n        this.configCanvas();\n        this.configPlayers();\n    }\n    Game.prototype.configPlayers = function () {\n        this.player = new Player_1[\"default\"](this.screenWidth / 2, this.screenHeight / 2, 20, \"red\", this.context);\n        this.enemies = [\n            new Enemy_1[\"default\"](0, 0, 10, \"green\", 15, 15, this.context),\n            new Enemy_1[\"default\"](10, 10, 10, \"green\", 5, 5, this.context),\n            new Enemy_1[\"default\"](20, 20, 10, \"green\", 10, 10, this.context),\n        ];\n    };\n    Game.prototype.configCanvas = function () {\n        this.context = this.canvas.getContext(\"2d\");\n        this.canvas.width = this.screenWidth;\n        this.canvas.height = this.screenHeight;\n    };\n    Game.prototype.movePlayer = function (event) {\n        this.player.x = event.clientX;\n        this.player.y = event.clientY;\n    };\n    Game.prototype.clearScreen = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.moveEnemy = function () {\n        var _this = this;\n        this.enemies.map(function (enemy) {\n            enemy.updateState(_this);\n        });\n    };\n    Game.prototype.increaseDificulty = function () {\n        this.enemies.push(new Enemy_1[\"default\"](10, 0, 10, \"green\", 2, 2, this.context));\n        this.player.increaseSize();\n    };\n    Game.prototype.turn = function () {\n        var _this = this;\n        setInterval(function () {\n            _this.increaseDificulty();\n        }, 2000);\n    };\n    Game.prototype.gameLoop = function () {\n        this.clearScreen();\n        this.player.draw(this.player.x, this.player.y);\n        this.moveEnemy();\n    };\n    Game.prototype.start = function () {\n        var _this = this;\n        this.intervalId = setInterval(function () {\n            _this.gameLoop();\n        }, this.fps);\n        this.turn();\n    };\n    return Game;\n}());\nexports[\"default\"] = Game;\n\n\n//# sourceURL=webpack://redball/./src/Game.ts?");

/***/ }),

/***/ "./src/Player.ts":
/*!***********************!*\
  !*** ./src/Player.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/Circle.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(x, y, radius, color, context) {\n        if (radius === void 0) { radius = 100; }\n        if (color === void 0) { color = \"red\"; }\n        return _super.call(this, x, y, radius, color, context) || this;\n    }\n    Player.prototype.draw = function (x, y) {\n        _super.prototype.draw.call(this, x, y, this.radius, this.color);\n    };\n    Player.prototype.increaseSize = function () {\n        this.radius += 5;\n    };\n    Player.prototype.decreaseSize = function () {\n        this.radius -= 5;\n    };\n    Player.prototype.getRadius = function () {\n        return this.radius;\n    };\n    return Player;\n}(Circle_1[\"default\"]));\nexports[\"default\"] = Player;\n\n\n//# sourceURL=webpack://redball/./src/Player.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar canvas = document.querySelector(\"#canvas\");\nvar screenWidth = window.innerWidth;\nvar screenHeight = window.innerHeight;\nvar game = new Game_1[\"default\"](screenWidth, screenHeight, canvas, window);\ncanvas.addEventListener(\"mousemove\", function (event) {\n    game.movePlayer(event);\n});\ngame.start();\n\n\n//# sourceURL=webpack://redball/./src/app.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;