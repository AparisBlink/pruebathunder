/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./prueba-thunder/blink-src/js/cke_styles.js":
/*!*****************************************************!*\
  !*** ./prueba-thunder/blink-src/js/cke_styles.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /*
    *   Array con la definición de los estilos para el editor de CKEditor
    */
    const ckeStyles = [
      {name: 'Caja 1 Alejandro', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-1'}},
      {name: 'Caja 2 Alejandro', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-2'}},
      {name: 'Énfasis Alejandro', element: 'span', attributes: {'class': 'bck-enfasis'}}
      // Añadir elementos CKEditor aquí.
    ];
    /* harmony default export */ __webpack_exports__["default"] = (ckeStyles);
    
    /***/ }),
    
    /***/ "./prueba-thunder/blink-src/js/main.js":
    /*!***********************************************!*\
      !*** ./prueba-thunder/blink-src/js/main.js ***!
      \***********************************************/
    /*! no exports provided */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _cke_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cke_styles */ "./prueba-thunder/blink-src/js/cke_styles.js");
    /* harmony import */ var _overrides__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overrides */ "./prueba-thunder/blink-src/js/overrides.js");
    /*
    *   Javascript principal con la estructura básica del estilo
    */
    
    
    
    (function (blink) {
      'use strict';
    
      var PruebaThunderStyle = function () {
        blink.theme.styles["thunder"].apply(this, arguments);
      };
    
      PruebaThunderStyle.prototype = {
        parent: blink.theme.styles["thunder"].prototype,
        bodyClassName: 'content_type_clase_prueba-thunder',
        extraPlugins: ['image2'],
        ckEditorStyles: {
          name: 'prueba-thunder',
          styles: _cke_styles__WEBPACK_IMPORTED_MODULE_0__["default"]
        },
        init: function () {
          // Heredo de otro estilo
          this.parent.init.call(this.parent, this);
          this.removeFinalSlide();
        },
        ..._overrides__WEBPACK_IMPORTED_MODULE_1__["default"]
      };
      PruebaThunderStyle.prototype = _.extend({}, new blink.theme.styles["thunder"](), PruebaThunderStyle.prototype);
      blink.theme.styles['prueba-thunder'] = PruebaThunderStyle;
    })(blink);
    
    /***/ }),
    
    /***/ "./prueba-thunder/blink-src/js/overrides.js":
    /*!****************************************************!*\
      !*** ./prueba-thunder/blink-src/js/overrides.js ***!
      \****************************************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /*
    *   Javascript donde están las funciones que sobreescriben a funciones de Basic
    */
    const overrides = {
      removeFinalSlide: t => {
        let thisStyle = blink.activity.currentStyle;
        thisStyle.parent.removeFinalSlide.call(thisStyle.parent, thisStyle, true);
      }
    };
    /* harmony default export */ __webpack_exports__["default"] = (overrides);
    
    /***/ }),
    
    /***/ "./prueba-thunder/blink-src/styles/main.scss":
    /*!*****************************************************!*\
      !*** ./prueba-thunder/blink-src/styles/main.scss ***!
      \*****************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
        if(false) { var cssReload; }
    
    
    /***/ }),
    
    /***/ 0:
    /*!***************************************************************************************************!*\
      !*** multi ./prueba-thunder/blink-src/js/main.js ./prueba-thunder/blink-src/styles/main.scss ***!
      \***************************************************************************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    __webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\prueba-thunder\blink-src\js\main.js */"./prueba-thunder/blink-src/js/main.js");
    module.exports = __webpack_require__(/*! D:\workspaces\web\blinkweb\blink\www\themes\responsive\assets\styles\prueba-thunder\blink-src\styles\main.scss */"./prueba-thunder/blink-src/styles/main.scss");
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGh1bmRlci1jbG9uYWJsZS9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3RodW5kZXItY2xvbmFibGUvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImNrZVN0eWxlcyIsIm5hbWUiLCJ0eXBlIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImVsZW1lbnQiLCJibGluayIsIlRodW5kZXJDbG9uYWJsZVN0eWxlIiwidGhlbWUiLCJzdHlsZXMiLCJhcHBseSIsImFyZ3VtZW50cyIsInByb3RvdHlwZSIsInBhcmVudCIsImJvZHlDbGFzc05hbWUiLCJleHRyYVBsdWdpbnMiLCJja0VkaXRvclN0eWxlcyIsImluaXQiLCJjYWxsIiwicmVtb3ZlRmluYWxTbGlkZSIsIm92ZXJyaWRlcyIsIl8iLCJleHRlbmQiLCJ0IiwidGhpc1N0eWxlIiwiYWN0aXZpdHkiLCJjdXJyZW50U3R5bGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7O0FBSUEsTUFBTUEsU0FBUyxHQUFHLENBQ2pCO0FBQUVDLE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsUUFBeEI7QUFBa0NDLFFBQU0sRUFBRSxXQUExQztBQUF1REMsWUFBVSxFQUFFO0FBQUUsYUFBUztBQUFYO0FBQW5FLENBRGlCLEVBRWpCO0FBQUVILE1BQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFJLEVBQUUsUUFBeEI7QUFBa0NDLFFBQU0sRUFBRSxXQUExQztBQUF1REMsWUFBVSxFQUFFO0FBQUUsYUFBUztBQUFYO0FBQW5FLENBRmlCLEVBR2pCO0FBQUVILE1BQUksRUFBRSxTQUFSO0FBQW1CSSxTQUFPLEVBQUUsTUFBNUI7QUFBb0NELFlBQVUsRUFBRTtBQUFFLGFBQVM7QUFBWDtBQUFoRCxDQUhpQixDQUFsQjtBQU1lSix3RUFBZixFOzs7Ozs7Ozs7Ozs7QUNWQTtBQUFBO0FBQUE7QUFBQTs7O0FBSUE7QUFDQTs7QUFFQSxDQUFDLFVBQVVNLEtBQVYsRUFBaUI7QUFDakI7O0FBRUEsTUFBSUMsb0JBQW9CLEdBQUcsWUFBWTtBQUN0Q0QsU0FBSyxDQUFDRSxLQUFOLENBQVlDLE1BQVosQ0FBbUIsU0FBbkIsRUFBOEJDLEtBQTlCLENBQW9DLElBQXBDLEVBQTBDQyxTQUExQztBQUNBLEdBRkQ7O0FBSUFKLHNCQUFvQixDQUFDSyxTQUFyQixHQUFpQztBQUNoQ0MsVUFBTSxFQUFFUCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixTQUFuQixFQUE4QkcsU0FETjtBQUVoQ0UsaUJBQWEsRUFBRSxxQ0FGaUI7QUFHaENDLGdCQUFZLEVBQUUsQ0FBQyxRQUFELENBSGtCO0FBSWhDQyxrQkFBYyxFQUFFO0FBQ2ZmLFVBQUksRUFBRSxrQkFEUztBQUVmUSxZQUFNLEVBQUVULG1EQUFTQTtBQUZGLEtBSmdCO0FBU2hDaUIsUUFBSSxFQUFFLFlBQVc7QUFDaEI7QUFDQSxXQUFLSixNQUFMLENBQVlJLElBQVosQ0FBaUJDLElBQWpCLENBQXNCLEtBQUtMLE1BQTNCLEVBQW1DLElBQW5DO0FBQ0EsV0FBS00sZ0JBQUw7QUFDQSxLQWIrQjtBQWNoQyxPQUFHQyxrREFBU0E7QUFkb0IsR0FBakM7QUFpQkFiLHNCQUFvQixDQUFDSyxTQUFyQixHQUFpQ1MsQ0FBQyxDQUFDQyxNQUFGLENBQVMsRUFBVCxFQUFhLElBQUloQixLQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixTQUFuQixDQUFKLEVBQWIsRUFBa0RGLG9CQUFvQixDQUFDSyxTQUF2RSxDQUFqQztBQUVBTixPQUFLLENBQUNFLEtBQU4sQ0FBWUMsTUFBWixDQUFtQixrQkFBbkIsSUFBeUNGLG9CQUF6QztBQUNBLENBM0JELEVBMkJJRCxLQTNCSixFOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBOzs7QUFJQSxNQUFNYyxTQUFTLEdBQUk7QUFDbEJELGtCQUFnQixFQUFHSSxDQUFELElBQU87QUFDeEIsUUFBSUMsU0FBUyxHQUFHbEIsS0FBSyxDQUFDbUIsUUFBTixDQUFlQyxZQUEvQjtBQUNBRixhQUFTLENBQUNYLE1BQVYsQ0FBaUJNLGdCQUFqQixDQUFrQ0QsSUFBbEMsQ0FBdUNNLFNBQVMsQ0FBQ1gsTUFBakQsRUFBeURXLFNBQXpELEVBQW9FLElBQXBFO0FBQ0E7QUFKaUIsQ0FBbkI7QUFNZUosd0VBQWYsRTs7Ozs7Ozs7Ozs7QUNWQTtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InN0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiLypcclxuKiAgIEFycmF5IGNvbiBsYSBkZWZpbmljacOzbiBkZSBsb3MgZXN0aWxvcyBwYXJhIGVsIGVkaXRvciBkZSBDS0VkaXRvclxyXG4qL1xyXG5cclxuY29uc3QgY2tlU3R5bGVzID0gW1xyXG5cdHsgbmFtZTogJ0NhamEgMScsIHR5cGU6ICd3aWRnZXQnLCB3aWRnZXQ6ICdibGlua19ib3gnLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdib3gtMScgfSB9LFxyXG5cdHsgbmFtZTogJ0NhamEgMicsIHR5cGU6ICd3aWRnZXQnLCB3aWRnZXQ6ICdibGlua19ib3gnLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdib3gtMicgfSB9LFxyXG5cdHsgbmFtZTogJ8OJbmZhc2lzJywgZWxlbWVudDogJ3NwYW4nLCBhdHRyaWJ1dGVzOiB7ICdjbGFzcyc6ICdiY2stZW5mYXNpcycgfX1cclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNrZVN0eWxlcztcclxuIiwiLypcbiogICBKYXZhc2NyaXB0IHByaW5jaXBhbCBjb24gbGEgZXN0cnVjdHVyYSBiw6FzaWNhIGRlbCBlc3RpbG9cbiovXG5cbmltcG9ydCBja2VTdHlsZXMgZnJvbSAnLi9ja2Vfc3R5bGVzJztcbmltcG9ydCBvdmVycmlkZXMgZnJvbSAnLi9vdmVycmlkZXMnO1xuXG4oZnVuY3Rpb24gKGJsaW5rKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgVGh1bmRlckNsb25hYmxlU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0YmxpbmsudGhlbWUuc3R5bGVzW1widGh1bmRlclwiXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHR9XG5cblx0VGh1bmRlckNsb25hYmxlU3R5bGUucHJvdG90eXBlID0ge1xuXHRcdHBhcmVudDogYmxpbmsudGhlbWUuc3R5bGVzW1widGh1bmRlclwiXS5wcm90b3R5cGUsXG5cdFx0Ym9keUNsYXNzTmFtZTogJ2NvbnRlbnRfdHlwZV9jbGFzZV90aHVuZGVyLWNsb25hYmxlJyxcblx0XHRleHRyYVBsdWdpbnM6IFsnaW1hZ2UyJ10sXG5cdFx0Y2tFZGl0b3JTdHlsZXM6IHtcblx0XHRcdG5hbWU6ICd0aHVuZGVyLWNsb25hYmxlJyxcblx0XHRcdHN0eWxlczogY2tlU3R5bGVzXG5cdFx0fSxcblxuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gSGVyZWRvIGRlIG90cm8gZXN0aWxvXG5cdFx0XHR0aGlzLnBhcmVudC5pbml0LmNhbGwodGhpcy5wYXJlbnQsIHRoaXMpO1xuXHRcdFx0dGhpcy5yZW1vdmVGaW5hbFNsaWRlKCk7XG5cdFx0fSxcblx0XHQuLi5vdmVycmlkZXNcblx0fTtcblxuXHRUaHVuZGVyQ2xvbmFibGVTdHlsZS5wcm90b3R5cGUgPSBfLmV4dGVuZCh7fSwgbmV3IGJsaW5rLnRoZW1lLnN0eWxlc1tcInRodW5kZXJcIl0oKSwgVGh1bmRlckNsb25hYmxlU3R5bGUucHJvdG90eXBlKTtcblxuXHRibGluay50aGVtZS5zdHlsZXNbJ3RodW5kZXItY2xvbmFibGUnXSA9IFRodW5kZXJDbG9uYWJsZVN0eWxlO1xufSkoIGJsaW5rICk7XG4iLCIvKlxuKiAgIEphdmFzY3JpcHQgZG9uZGUgZXN0w6FuIGxhcyBmdW5jaW9uZXMgcXVlIHNvYnJlZXNjcmliZW4gYSBmdW5jaW9uZXMgZGUgQmFzaWNcbiovXG5cbmNvbnN0IG92ZXJyaWRlcyA9ICB7XG5cdHJlbW92ZUZpbmFsU2xpZGU6ICh0KSA9PiB7XG5cdFx0bGV0IHRoaXNTdHlsZSA9IGJsaW5rLmFjdGl2aXR5LmN1cnJlbnRTdHlsZTtcblx0XHR0aGlzU3R5bGUucGFyZW50LnJlbW92ZUZpbmFsU2xpZGUuY2FsbCh0aGlzU3R5bGUucGFyZW50LCB0aGlzU3R5bGUsIHRydWUpO1xuXHR9XG59O1xuZXhwb3J0IGRlZmF1bHQgb3ZlcnJpZGVzO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYxNzg4MzAyNzU3OVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi93b3Jrc3BhY2VzL3dlYi9jb21tb24tdXRpbHMvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=
