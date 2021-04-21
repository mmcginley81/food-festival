/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/domMethods.js":
/*!*********************************!*\
  !*** ./assets/js/domMethods.js ***!
  \*********************************/
/***/ ((module) => {

eval("function createEl(htmlString, attrs, ...children) {\r\n    if (typeof htmlString !== \"string\") {\r\n      throw Error(\"Argument 'htmlString' is required and must be a string\");\r\n    }\r\n  \r\n    const el = document.createElement(htmlString);\r\n  \r\n    if (typeof attrs === \"object\") {\r\n      for (let key in attrs) {\r\n        if (key.substring(0, 2) === \"on\") {\r\n          el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);\r\n        } else if (key === \"style\") {\r\n          for (let rule in attrs[key]) {\r\n            el.style[rule] = attrs[key][rule];\r\n          }\r\n        } else {\r\n          el.setAttribute(key, attrs[key]);\r\n        }\r\n      }\r\n    }\r\n  \r\n    children.forEach(function(child) {\r\n      let node;\r\n  \r\n      if (child.constructor.name.includes(\"Element\")) {\r\n        node = child;\r\n      } else {\r\n        node = document.createTextNode(child);\r\n      }\r\n  \r\n      el.appendChild(node);\r\n    });\r\n  \r\n    return el;\r\n  }\r\n  \r\n  module.exports = createEl;\n\n//# sourceURL=webpack://food-festival/./assets/js/domMethods.js?");

/***/ }),

/***/ "./assets/js/events.js":
/*!*****************************!*\
  !*** ./assets/js/events.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const createEl = __webpack_require__(/*! ./domMethods */ \"./assets/js/domMethods.js\");\r\n\r\nif (window.location.href.indexOf(\"event\") > -1) {\r\n  const currentEvent = JSON.parse(localStorage.getItem(\"currentEvent\")) || {\r\n      title: \"Title Placeholder\",\r\n      subtitle: \"\",\r\n      description: \"\"\r\n  };\r\n\r\n  const pageEl = document.querySelector(\"#page\");\r\n  \r\n  const containerEl = createEl(\"div\", {class: \"container\"},\r\n    createEl(\"div\", {class: \"card mb-3\"}, \r\n      createEl(\"img\", {class: \"card-img-top\", style: \"width: 5px\", src: currentEvent.image || \"https://via.placeholder.com/350x150\"}),\r\n      createEl(\"div\", {class: \"card-body\"}, \r\n        createEl(\"h1\", {class: \"card-title\"}, currentEvent.title || \"\"),\r\n        createEl(\"h2\", {class: \"text-muted\"}, currentEvent.subtitle || \"\"),\r\n        createEl(\"p\", {class: \"card-text mt-3\"}, currentEvent.description || createLoremIpsum(100)),\r\n        createEl(\"a\", {class: \"btn btn-primary\", href: \"tickets.html\"}, \"Buy Tickets\")\r\n      )\r\n    ),\r\n    \r\n  )\r\n  pageEl.appendChild(containerEl)\r\n}\n\n//# sourceURL=webpack://food-festival/./assets/js/events.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/events.js");
/******/ 	
/******/ })()
;