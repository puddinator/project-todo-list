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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ \"./src/modules/storage.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initiate)\n\n//# sourceURL=webpack://project-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\nclass Project {\n  constructor(name, description) {\n    this.name = name;\n    this.description = description;\n    this.tasks = [];\n  }\n\n  static showProject() {\n    const projectName = document.querySelector('.project-name');\n    const projectDescription = document.querySelector('.project-description');\n    const projectTasks = document.querySelector('.tasks');\n\n    projectName.textContent = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.name;\n    projectDescription.textContent = _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.description;\n\n    const deleteProject = document.getElementById('delete-project');\n    const cloneDeleteProject = deleteProject.cloneNode(true);\n    deleteProject.parentNode.replaceChild(cloneDeleteProject, deleteProject);\n    cloneDeleteProject.addEventListener('click', () => {\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeProjectFromDatabase();\n    });\n\n    projectTasks.innerHTML = ``;\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.tasks.forEach(element => {\n      projectTasks.appendChild(showProjectTask(element));\n    });\n  }\n}\n\nfunction showProjectTask(element) {\n  const projectTask = document.createElement('li');\n  projectTask.classList.add('task');\n\n  const name = document.createElement(\"h4\");\n  name.classList.add('task-name');\n  name.textContent = element.name;\n\n  const description = document.createElement(\"h5\");\n  description.classList.add('task-description');\n  description.textContent = element.description;\n\n  const dueDate = document.createElement(\"h5\");\n  dueDate.classList.add('task-due-date');\n  dueDate.textContent = element.dueDate;\n\n  const completeButton = document.createElement(\"button\");\n  completeButton.classList.add('complete');\n  completeButton.textContent = 'Complete';\n  completeButton.addEventListener('click', () => {\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.tasks.splice(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.tasks.indexOf(element), 1);\n    Project.showProject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject);\n  });\n\n  const deleteButton = document.createElement(\"button\");\n  deleteButton.classList.add('delete');\n  deleteButton.setAttribute('id', 'delete-task');\n  deleteButton.textContent = 'Delete';\n  deleteButton.addEventListener('click', () => {\n    _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.tasks.splice(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject.tasks.indexOf(element), 1);\n    Project.showProject(_storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject);\n  });\n\n  projectTask.appendChild(name);\n  projectTask.appendChild(description);\n  projectTask.appendChild(dueDate);\n  projectTask.appendChild(completeButton);\n  projectTask.appendChild(deleteButton);\n\n  return projectTask;\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/Project.js?");

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n  constructor(name, description, dueDate) {\n    this.name = name;\n    this.description = description;\n    this.dueDate = dueDate;\n  }\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/Task.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/modules/Project.js\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ \"./src/modules/Task.js\");\n/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ \"./src/modules/ui.js\");\n\n\n\n\nclass Storage {\n  static currentProject = getMyProjects()[0];\n\n  static initiate() {\n    if (storageAvailable('localStorage')) {\n      console.log('Local Storage Available');\n    }\n    else {\n      // Too bad, no localStorage for us\n      alert('No Local Storage!');\n    }\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].projectOverlay();\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].taskOverlay();\n\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showProjectList(getMyProjects());\n    _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(this.currentProject);\n  }\n\n  static addProjectToDatabase() {\n    let formProject = document.getElementById(\"form-project\");\n    let fd = new FormData(formProject);\n    \n    const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fd.get('name'), fd.get('description'));\n\n    addMyProjects(newProject);\n    this.currentProject = newProject;\n\n    _ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showProjectList(getMyProjects());\n    _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(this.currentProject);\n  }\n  \n  static removeProjectFromDatabase() {\n    removeMyProjects(this.currentProject);\n    this.currentProject = getMyProjects()[0];\n    \n    _ui_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showProjectList(getMyProjects());\n    _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(this.currentProject);\n  }\n\n  static addTaskToDatabase() {\n    let formProject = document.getElementById(\"form-task\");\n    let fd = new FormData(formProject);\n  \n    const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](fd.get('name'), fd.get('description'), fd.get('due-date'));\n    removeMyProjects(this.currentProject);\n    this.currentProject.tasks.push(newTask);\n    addMyProjects(this.currentProject);\n  \n    _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showProject(this.currentProject);\n  }\n}\n\nfunction storageAvailable(type) {\n  let storage;\n  try {\n      storage = window[type];\n      const x = '__storage_test__';\n      storage.setItem(x, x);\n      storage.removeItem(x);\n      return true;\n  }\n  catch (e) {\n      return e instanceof DOMException && (\n          // everything except Firefox\n          e.code === 22 ||\n          // Firefox\n          e.code === 1014 ||\n          // test name field too, because code might not be present\n          // everything except Firefox\n          e.name === 'QuotaExceededError' ||\n          // Firefox\n          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&\n          // acknowledge QuotaExceededError only if there's something already stored\n          (storage && storage.length !== 0);\n  }\n}\n\nfunction getMyProjects() {\n  // Initiate if there is no current array in localStorage\n  if (!localStorage.getItem('myProjects')) {\n    localStorage.setItem('myProjects', JSON.stringify([]));\n  }\n  return JSON.parse(localStorage.getItem('myProjects'));\n};\nfunction addMyProjects(myProject) {\n  let myProjects = getMyProjects();\n  myProjects.push(myProject);\n  localStorage.setItem('myProjects', JSON.stringify(myProjects));\n}\nfunction removeMyProjects(myProject) {\n  let myProjects = getMyProjects();\n  let index = getMyProjects().indexOf(myProject);\n  myProjects.splice(index, 1);\n  localStorage.setItem('myProjects', JSON.stringify(myProjects));\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/modules/Project.js\");\n\n\n\nclass UI {\n  static projectOverlay() {\n    const addProject = document.getElementById('add-project');\n    const overlayProject = document.getElementById('overlay-project');\n    const overlayAddProject = document.getElementById('overlay-add-project');\n    const overlayCancelProject = document.getElementById('overlay-cancel-project');\n\n    addProject.addEventListener('click', () => {\n      overlayProject.style.display = 'flex';\n      clearFormData();\n    });\n    overlayAddProject.addEventListener('click', () => {\n      overlayProject.style.display = 'none';\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectToDatabase();\n    });\n    overlayCancelProject.addEventListener('click', () => {\n      overlayProject.style.display = 'none';\n    });\n  }\n\n  static taskOverlay() {\n    const addTask = document.getElementById('add-task');\n    const overlayTask = document.getElementById('overlay-task');\n    const overlayAddTask = document.getElementById('overlay-add-task');\n    const overlayCancelTask = document.getElementById('overlay-cancel-task');\n\n    addTask.addEventListener('click', () => {\n      overlayTask.style.display = 'flex';\n      clearFormData();\n    });\n    overlayAddTask.addEventListener('click', () => {\n      overlayTask.style.display = 'none';\n      _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTaskToDatabase();\n    });\n    overlayCancelTask.addEventListener('click', () => {\n      overlayTask.style.display = 'none';\n    });\n  }\n\n  static showProjectList(myProjects) {\n    const projectNav = document.querySelector('.projects');\n    projectNav.innerHTML = ``;\n\n    myProjects.forEach((element, index) => {\n      let newProjectNav = document.createElement('li');\n      if (index == 0) {\n        newProjectNav.classList.add('active');\n      }\n\n      newProjectNav.textContent = element.name;\n      newProjectNav.addEventListener('click', () => {\n        document.querySelectorAll('.active').forEach(element => {\n          element.classList.remove('active');\n        });\n\n        newProjectNav.classList.add('active');\n        _storage__WEBPACK_IMPORTED_MODULE_0__[\"default\"].currentProject = element;\n        _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showProject();\n      });\n      projectNav.appendChild(newProjectNav);\n    });\n  }\n}\n\nfunction clearFormData() {\n  document.getElementById(\"form-task\").reset();\n  document.getElementById(\"form-project\").reset();\n}\n\n//# sourceURL=webpack://project-todo-list/./src/modules/ui.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;