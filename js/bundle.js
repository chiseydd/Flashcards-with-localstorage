/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/cardAdd.js":
/*!****************************!*\
  !*** ./modules/cardAdd.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clickCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickCards */ "./modules/clickCards.js");
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local */ "./modules/local.js");
/* harmony import */ var _doneDeleteCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./doneDeleteCard */ "./modules/doneDeleteCard.js");




function addCard(){

    const fromStorage = localStorage.getItem('cardLoc'),
          storageDone = localStorage.getItem('cardDone');
    if(fromStorage){
        document.querySelector('.con').innerHTML = fromStorage;
        document.querySelectorAll('.cards__area').forEach(item => {
            item.classList.remove('rotated');  
        });   
    }
    if(storageDone){
        document.querySelector('.cards__good').innerHTML = storageDone;
        document.querySelectorAll('.end').forEach(item => {
            item.classList.remove('rotated');  
        });
    }
    
    const front = document.querySelector('.create__word'),
          back = document.querySelector('.create__answer'),
          submitBtn = document.querySelector('.add__card'),
          cardArea = document.querySelector('.con'),
          inputs = document.querySelector('.form');
    (0,_doneDeleteCard__WEBPACK_IMPORTED_MODULE_2__.done)();
    (0,_doneDeleteCard__WEBPACK_IMPORTED_MODULE_2__.deleteCard)();
    submitBtn.addEventListener('click', (e)=>{
        if(front.value == '' || back.value == ''){
            e.preventDefault();
            console.log('Пустая строка');
        }else{
            e.preventDefault();
        
            let word = front.value;
            let answ = back.value;
        
            let card = document.createElement('div');
            card.innerHTML = `
                <div class="card__front front side">
                    <p class="card__word">${word}</p>
                </div>
                <div class="card__back back side">
                    <p class="card__word">${answ}</p>
                    <img class="done__img" src="./images/done.png" alt="done">
                    <img class="delete__img" src="./images/delete.png" alt="delete">
                </div>`;
            card.classList.add('cards__area');
            cardArea.append(card);
            (0,_clickCards__WEBPACK_IMPORTED_MODULE_0__["default"])();
            (0,_doneDeleteCard__WEBPACK_IMPORTED_MODULE_2__.done)();
            (0,_doneDeleteCard__WEBPACK_IMPORTED_MODULE_2__.deleteCard)();
        }
        inputs.reset();
        (0,_local__WEBPACK_IMPORTED_MODULE_1__.saveCards)();
        (0,_local__WEBPACK_IMPORTED_MODULE_1__.saveDone)();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addCard);

/***/ }),

/***/ "./modules/clickCards.js":
/*!*******************************!*\
  !*** ./modules/clickCards.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function cardClick(){
    const oneCard = document.querySelectorAll('.cards__area');

    for (let i = 0; i < oneCard.length; i++) {
        oneCard[i].onclick = function() {
            oneCard[i].classList.toggle('rotated');
        };
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cardClick);

/***/ }),

/***/ "./modules/deleteAllCards.js":
/*!***********************************!*\
  !*** ./modules/deleteAllCards.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function deleteAllCards(){
    const deleteBtn = document.querySelector('.delCard');
    
    deleteBtn.addEventListener('click', () => {
        const cardsAll = document.querySelectorAll('.cards__area');
        for(let i = 0; i < cardsAll.length; i++){
            cardsAll[i].remove();
        }
        localStorage.clear();
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteAllCards);

/***/ }),

/***/ "./modules/doneDeleteCard.js":
/*!***********************************!*\
  !*** ./modules/doneDeleteCard.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteCard": () => (/* binding */ deleteCard),
/* harmony export */   "done": () => (/* binding */ done)
/* harmony export */ });
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./modules/local.js");


function done(){
    const endBtn = document.querySelectorAll('.done__img'),
          endArea = document.querySelector('.cards__good');

    endBtn.forEach(item => {
        item.addEventListener('click', () =>{
            let parentDone = item.parentElement;
            parentDone.parentElement.remove();
            let parent = parentDone.parentElement;
            parent.classList.add('end');
            endArea.append(parent);
            item.classList.add('done');
            const doneElements = document.querySelectorAll('.done');
            doneElements.forEach(i => {
                i.classList.add('hide');
            });
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveCards)();
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveDone)();
        });
    });
}

function deleteCard(){
    const deleteBtn = document.querySelectorAll('.delete__img');
    deleteBtn.forEach(item => {
        item.addEventListener('click', () =>{
            let parentDelete = item.parentElement;
            parentDelete.parentElement.remove();
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveCards)();
            (0,_local__WEBPACK_IMPORTED_MODULE_0__.saveDone)();
        });
    });
}



/***/ }),

/***/ "./modules/local.js":
/*!**************************!*\
  !*** ./modules/local.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveCards": () => (/* binding */ saveCards),
/* harmony export */   "saveDone": () => (/* binding */ saveDone)
/* harmony export */ });
function saveCards(){
    localStorage.setItem('cardLoc', document.querySelector('.con').innerHTML);
}

function saveDone(){
    localStorage.setItem('cardDone', document.querySelector('.cards__good').innerHTML);
}



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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_clickCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/clickCards */ "./modules/clickCards.js");
/* harmony import */ var _modules_cardAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/cardAdd */ "./modules/cardAdd.js");
/* harmony import */ var _modules_deleteAllCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteAllCards */ "./modules/deleteAllCards.js");




window.addEventListener('DOMContentLoaded', function(){

    (0,_modules_cardAdd__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_clickCards__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_deleteAllCards__WEBPACK_IMPORTED_MODULE_2__["default"])();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map