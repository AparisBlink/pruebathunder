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
	{name: 'Caja 1', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-1'}},
	{name: 'Caja 2', type: 'widget', widget: 'blink_box', attributes: {'class': 'box-2'}},
	{name: 'Énfasis', element: 'span', attributes: {'class': 'bck-enfasis'}}
	// Añadir elementos CKEditor aquí.
];
/* harmony default export */ __webpack_exports__["default"] = (ckeStyles);

/***/ }),

/***/ "./prueba-thunder/blink-src/js/homepage.js":
/*!***************************************************!*\
  !*** ./prueba-thunder/blink-src/js/homepage.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.Homepage = function (data) {
  if (!data) return new Error('No data defined');
  this.DATA_LOADED = data;
  this.ITEMS_PER_PAGE = this.DATA_LOADED.num_items;
  this.STYLE = blink.theme.styles.thunder.prototype; // Ojito con esto

  this.data = this.DATA_LOADED.data;
  this.prevActivity = parseInt(window.location.hash.replace(this.STYLE.unitHashPrefix, ""));
  this.fromActivity = !isNaN(this.prevActivity);
  this.mainContainer = document.getElementById("slider");
  this.$mainContainer = $(this.mainContainer);
  this.layoutData = {
    filledUnits: []
  };
};

Homepage.prototype.init = function () {
  var overlay = this.createElement('DIV', {
    'class': 'overlay-background'
  }),
      // Translucid purple mask.
  firstPage = this.getFirstpageHtml(),
      secondPage = this.getSecondpageHtml(),
      thirdPage = this.getThirdpageHtml(),
      leftControl = this.createElement('SPAN', {
    'class': 'main_page-slider_control prev fa fa-chevron-left ' + (this.fromActivity ? 'active' : '')
  }),
      rightControl = this.createElement('SPAN', {
    'class': 'main_page-slider_control next fa fa-chevron-right ' + (!this.fromActivity ? 'active' : '')
  });
  this.$mainContainer.html('').append(overlay, firstPage, secondPage, thirdPage, leftControl, rightControl);
  $.ajax({
    complete: function () {
      this.addGrades();
    }.bind(this)
  });
  $second_slider_elem = $(secondPage);
  $third_slider_elem = $(thirdPage);
  $second_slider_controls = $second_slider_elem.find('.slider_control');
  $third_slider_controls = $third_slider_elem.find('.slider_control'); // Left/right slider controls - main page.

  leftControl.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $this = $(this),
        $pageItems = $([firstPage, secondPage, thirdPage]),
        $activePage = $pageItems.filter('.active'),
        $target = $pageItems.first();
    $activePage.removeClass('active');
    $pageItems.each(function (i, el) {
      if ($activePage.get(0) === el && i > 0) {
        $target = $($pageItems.get(--i));

        switch (i) {
          case 0:
            // Redirects to the Main Page.
            $this.removeClass('active');
            $this.siblings('.next').addClass('active');
            $target.addClass('active');
            break;

          case 1:
            // Redirects to the second page.
            var targetPage = $activePage.find('.item.active').attr('data-page'),
                activePage = $target.find('.item.active').attr('data-page'); // If the target page is not the active page, we should show the page that contains
            // the last visited unit.

            targetPage !== activePage ? $second_slider_elem.one('slid.bs.carousel', function () {
              setTimeout(function () {
                $target.addClass('active');
              }, 100);
            }).carousel(parseInt(targetPage)) : $target.addClass('active');
            break;
        }
      }
    });
  });
  rightControl.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation(); // Hide First Page Elements

    firstPage.classList.remove('active');
    this.classList.remove('active'); // Show Second page elements

    secondPage.classList.add('active');
    leftControl.classList.add('active');
  }); /////////////////////
  // Carousel events //
  /////////////////////

  $second_slider_elem.add($third_slider_elem).on('slide.bs.carousel', function (e) {
    var $this = $(this),
        forwards = e.direction === 'left',
        $target = $this.find(forwards ? '.fa.next' : '.fa.prev'); // Depending on the carousel direcion, we show or hide the slider controls on both
    // the second and the third pages in case we reach the firs element or the last
    // element of the carousel.

    $this.one('slid.bs.carousel', function (e) {
      var $pages = $this.find('.item');
      $pages.filter('.active:' + (forwards ? 'last' : 'first') + '-of-type').length !== 0 ? $target.addClass('invisible').siblings('.fa').removeClass('invisible') : $target.add($target.siblings('.fa')).removeClass('invisible');
    });
  });
  this.$mainContainer.css('overflow', 'auto'); // Depending on which carousel element is shown, we show or hide the slider controls
  // on the second page.

  $third_slider_elem.find('.item.active:first-of-type').length == 0 && $third_slider_elem.find('.fa.prev').removeClass('invisible');
  $third_slider_elem.find('.item.active:last-of-type').length != 0 && $third_slider_elem.find('.fa.next').addClass('invisible'); ////////////
  // Events //
  ////////////
  // Unit button.

  $second_slider_elem.find('.unit:not(.empty)').bind("click", function () {
    var unit = $(this).attr("data-unit"),
        $units = $third_slider_elem.find('.item');
    $second_slider_elem.removeClass('active');
    $third_slider_elem.carousel(parseInt(unit)); // If the target unit is not the active one, we should carousel to it
    // before showing it.

    $units.eq(unit).hasClass('active') ? $third_slider_elem.addClass('active') : $third_slider_elem.one('slid.bs.carousel', function () {
      setTimeout(function () {
        $third_slider_elem.addClass('active');
      }, 100);
    });
  }); // Subunit button.

  document.querySelectorAll("a.activity-text-data").forEach(function (subunit) {
    subunit.addEventListener("click", function (e) {
      var action = subunit.getAttribute("data-onclick");
      eval(action);
    });
  });
}; ///////////////////////////
// First page - Landing. //
///////////////////////////


Homepage.prototype.getFirstpageHtml = function () {
  var mainPage = this.createElement('DIV', {
    'id': 'main_page',
    'class': (!this.fromActivity ? 'active' : '') + ' page-item'
  }); // Book info.

  var bookInfo = this.createElement('DIV', {
    'class': 'book-info'
  }),
      title = this.createElement('H1'),
      description = this.createElement('DIV', {
    'class': 'description'
  });
  title.append(document.createTextNode(this.data["title"]));
  description.append(document.createTextNode(this.data["description"]));
  mainPage.appendChild(bookInfo).append(title, description);
  return mainPage;
}; //////////////////////////////////////
// Second page - Carousel of units. //
//////////////////////////////////////


Homepage.prototype.getSecondpageHtml = function () {
  var html = '',
      units = this.data["units"],
      auxUnits = units.slice(),
      pageNumber; // Required Elements

  var secondPage = this.createElement('DIV', {
    'id': 'second_page',
    'class': 'carousel slide carousel-fade page-item',
    'data-interval': 'false'
  }),
      carouselTarget = this.createElement('DIV', {
    'id': 'second_page',
    'class': 'carousel-inner'
  }); // If there aren't enough units to fill the last page, we use empty objects to fill
  // that spaces and make flex-box work fine.

  var pages = Math.ceil(units.length / this.ITEMS_PER_PAGE),
      evenUnitsNumber = pages > 1 ? Math.ceil(units.length / this.ITEMS_PER_PAGE) * this.ITEMS_PER_PAGE : units.length;

  if (units.length < evenUnitsNumber) {
    while (auxUnits.length < evenUnitsNumber) {
      auxUnits.push({});
    }
  }

  auxUnits.forEach(function (unit, index) {
    var newPage = index % this.ITEMS_PER_PAGE == 0,
        closePage = (index + 1) % this.ITEMS_PER_PAGE == 0 || index + 1 === auxUnits.length,
        isFilled = typeof unit.subunits !== 'undefined' && (unit.subunits.length > 0 || unit.resources.length > 0),
        justFill = Object.keys(unit).length === 0,
        // comprobamos que no sea una actividad de relleno.
    classString = 'unit empty' + (justFill ? ' fill-unit' : ''),
        attributeString = '';
    !pageNumber && typeof pageNumber === 'undefined' ? // If pageNumber is undefined, we set it to 0.
    pageNumber = 0 : newPage && ++pageNumber; // Else, if we're creating a new page, we should increase it.

    if (isFilled) {
      classString = classString.replace(' empty', '');
      attributeString = 'data-unit="' + this.layoutData.filledUnits.length + '"';
      unit.pageId = pageNumber;
      this.layoutData.filledUnits.push(unit);
    }

    html += newPage ? '<div class="item ' + (index == 0 ? 'active' : '') + '" data-page="' + pageNumber + '">' : '';
    html += '<div class="' + classString + '" ' + attributeString + '">';

    if (!justFill) {
      var defaultBg = unit["image"].match(/\/images\/libro\/verde\.png/g) !== null;
      bgUrl = defaultBg ? this.STYLE.defaultUnitImage : unit["image"];
      html += '<div class="img' + (defaultBg ? ' default' : '') + '" style="background-image: url(' + bgUrl + ')"></div>';
      html += '<div class="unit-info">';
      html += '<h2>' + unit["title"] + '</h2>';
      html += '<p title="' + unit["description"] + '">' + unit["description"] + '</p>';
      html += '</div>';
    }

    html += '</div>';
    html += closePage ? '</div>' : '';
  }.bind(this));
  carouselTarget.innerHTML = html; // Wrap everything inside secondPage.

  secondPage.append(carouselTarget);
  this.carouselize(secondPage, {}, 'second-slider_control'); // If there are less units than items per page, we must hide the carousel button.

  auxUnits.length <= this.ITEMS_PER_PAGE && secondPage.querySelector('.next.fa.fa-chevron-right').classList.add('invisible');
  return secondPage;
}; //////////////////////////////////////
// Third Page - List of activities. //
//////////////////////////////////////


Homepage.prototype.getThirdpageHtml = function () {
  var html = '';
  thirdPage = this.createElement('DIV', {
    'id': 'third_page',
    'class': 'carousel slide carousel-fade page-item ' + (this.fromActivity ? 'active' : ''),
    'data-interval': 'false'
  }), html += '<div class="carousel-inner">';
  this.layoutData.filledUnits.forEach(function (unit, index) {
    this.prevActivity === parseInt(unit.id) || !this.fromActivity && index == 0 ? isActive = ' active' : isActive = '';
    var defaultBg = unit["image"].match(/\/images\/libro\/verde\.png/g) !== null;
    bgUrl = defaultBg ? this.STYLE.defaultUnitImage : unit["image"];
    html += '<div class="item' + isActive + '" data-page="' + unit.pageId + '" data-unit="' + unit.id + '">';
    html += '<div class="unit">'; // Unit image.

    html += '<div class="img' + (defaultBg ? ' default' : '') + '" style="background-image: url(' + bgUrl + ')"></div>'; // Unit info.

    html += '<div class="unit-info">';
    html += '<h2>' + unit["title"] + '</h2>';
    html += '<p>' + unit["description"] + '<p>';
    html += '</div>';
    html += '</div>'; // Unit content.

    html += '<div class="unit_content">';

    var subunits = unit["subunits"],
        resources = unit["resources"],
        t_subunits = subunits.length + resources.length,
        _createActivityElement = this.createActivityElement.bind(this); // If there are subunits, we add the subunits container.


    subunits.length > 0 && function () {
      html += '<h3 class="subunits-header">' + textweb("course_unit_activities") + '</h3>';
      html += '<div class="activities-list">';
      subunits.forEach(function (activity) {
        !activity.ocultar && (html += _createActivityElement(activity).outerHTML);
      });
      html += '</div>';
    }(); // If there are resources, we add the resources container.

    resources.length > 0 && function () {
      html += '<h3 id="resources-header">' + textweb('course_supplement_content') + '</h3>';
      html += '<div class="activities-list">';
      resources.forEach(function (activity) {
        !activity.ocultar && (html += _createActivityElement(activity).outerHTML);
      });
      html += '</div>';
    }();
    html += '</div>';
    html += '</div>';
  }.bind(this));
  html += '</div>';
  thirdPage.innerHTML = html;
  this.carouselize(thirdPage, {}, 'third-slider_control');
  return thirdPage;
};

Homepage.prototype.createElement = function (type, attributes) {
  var element = document.createElement(type);
  attributes && typeof attributes === 'object' && Object.keys(attributes).forEach(function (attrName) {
    element.setAttribute(attrName, attributes[attrName]);
  });
  return element;
};

Homepage.prototype.addGrades = function () {
  var _addGrade = function (activityObj, id) {
    if (!activityObj || typeof activityObj === undefined || activityObj === null || activityObj.nota === '') return;
    var nota = this.createElement('SPAN', {
      'class': 'nota'
    }),
        wrapper = this.mainContainer.querySelector('[data-id="' + id + '"]');
    wrapper.appendChild(nota).append(activityObj.nota);
  }.bind(this);

  for (var idActividad in this.DATA_LOADED.actividades) {
    if (isNaN(parseInt(idActividad))) return;
    var actividad = this.DATA_LOADED.actividades[idActividad];

    _addGrade(actividad, idActividad);
  }
};

Homepage.prototype.carouselize = function (element, config, className) {
  var $element = $(element),
      defaultConfig = {
    cycle: false,
    ride: false,
    pause: false
  },
      controlLeft = this.createElement('SPAN', {
    'class': 'slider_control prev fa fa-chevron-left invisible'
  }),
      controlRight = this.createElement('SPAN', {
    'class': 'slider_control next fa fa-chevron-right'
  });

  if (className) {
    controlLeft.className = controlLeft.className.concat(' ', className);
    controlRight.className = controlRight.className.concat(' ', className);
  }

  $element.prepend(controlLeft).append(controlRight);
  $element.carousel(defaultConfig); // Left/right slider controls

  controlLeft.addEventListener('click', function () {
    $element.carousel('prev');
  });
  controlRight.addEventListener('click', function () {
    $element.carousel('next');
  });
};
/**
 * [createActivityElement Crea un elemento del listado de actividades del tema con los datos de una actividad.]
 * @param  {json} activity Datos de la actividad.
 * @return {html}          Elemento HTML del listado de actividades.
 */


Homepage.prototype.createActivityElement = function (activity) {
  var activityWrapper = this.createElement('DIV', {
    'class': 'subunit',
    'data-id': activity.id
  }); // Send homework button.

  if (this.data.includeHomeworkIcon && activity.canBeHomework) {
    var iconWrapper = this.createElement('SPAN', {
      'class': 'icon icon-enviar'
    }),
        image = this.createElement('IMG', {
      'src': this.data.supportsTasks ? '/themes/responsive/images/libro/icons8-send-90.png' : '/themes/responsive/images/libro/activ-icon-deberes.png',
      'alt': this.data.supportsTasks ? textweb('course_item_send_task') : textweb('course_item_send_homework')
    });
    iconWrapper.append(image); // Creamos la etiqueta "script" a la que estará asociada la acción del botón de enviar deberes.

    var scriptTag = this.createElement('SCRIPT', {
      'type': 'text/javascript'
    }),
        scriptCode = '$("#third_page").on("tap click", \'[data-id="' + activity.id + '"] .icon-enviar\', function(){' + (this.data.supportsTasks && activity.onlyVisibleTeachers ? '_showAlert(' + textweb('task_visible_only_teacher') + ');' : 'openSendActivityHomework(' + activity.id + ', ' + this.data.supportsTasks + ');') + '})';
    scriptTag.innerText = scriptCode;
    activityWrapper.append(iconWrapper, scriptTag);
  } // Activity data


  var dataWrapper = this.createElement('DIV', {
    'class': 'activity-data'
  }); // Wrapper

  var anchor = this.createElement('A', {
    'class': 'activity-text-data',
    'href': 'javascript:void(0)',
    'data-onclick': activity["onclickTitle"]
  }); // Link to the activity
  // Activity title

  var titleEl = this.createElement('P', {
    'class': 'activity-title'
  }),
      titleText = activity['title'] !== '' ? activity['title'] : textweb('course_actividad_no_name');
  anchor.appendChild(titleEl).append(document.createTextNode(titleText)); // If there's a description, we insert it.

  if (typeof activity['description'] !== 'undefined' && activity['description'] != '') {
    var description = this.createElement('P', {
      'class': 'activity-description'
    });
    description.append(document.createTextNode(activity['description']));
    anchor.append(description);
  }

  activityWrapper.appendChild(dataWrapper).append(anchor);
  return activityWrapper;
};

Homepage.prototype.preloadImage = function (url, callback, onError) {
  var preloader = this.createElement('img', {
    'src': url
  });

  fullCallback = function () {
    callback(url);
    preloader = null;
  };

  preloader.addEventListener('load', fullCallback);
  preloader.addEventListener('error', onError);
};

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
__webpack_require__(/*! ./homepage.js */ "./prueba-thunder/blink-src/js/homepage.js");




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdGh1bmRlci1jbG9uYWJsZS9ibGluay1zcmMvanMvY2tlX3N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9qcy9ob21lcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3RodW5kZXItY2xvbmFibGUvYmxpbmstc3JjL2pzL292ZXJyaWRlcy5qcyIsIndlYnBhY2s6Ly8vLi90aHVuZGVyLWNsb25hYmxlL2JsaW5rLXNyYy9zdHlsZXMvbWFpbi5zY3NzIl0sIm5hbWVzIjpbImNrZVN0eWxlcyIsIm5hbWUiLCJ0eXBlIiwid2lkZ2V0IiwiYXR0cmlidXRlcyIsImVsZW1lbnQiLCJ3aW5kb3ciLCJIb21lcGFnZSIsImRhdGEiLCJFcnJvciIsIkRBVEFfTE9BREVEIiwiSVRFTVNfUEVSX1BBR0UiLCJudW1faXRlbXMiLCJTVFlMRSIsImJsaW5rIiwidGhlbWUiLCJzdHlsZXMiLCJ0aHVuZGVyIiwicHJvdG90eXBlIiwicHJldkFjdGl2aXR5IiwicGFyc2VJbnQiLCJsb2NhdGlvbiIsImhhc2giLCJyZXBsYWNlIiwidW5pdEhhc2hQcmVmaXgiLCJmcm9tQWN0aXZpdHkiLCJpc05hTiIsIm1haW5Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiJG1haW5Db250YWluZXIiLCIkIiwibGF5b3V0RGF0YSIsImZpbGxlZFVuaXRzIiwiaW5pdCIsIm92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwiZmlyc3RQYWdlIiwiZ2V0Rmlyc3RwYWdlSHRtbCIsInNlY29uZFBhZ2UiLCJnZXRTZWNvbmRwYWdlSHRtbCIsInRoaXJkUGFnZSIsImdldFRoaXJkcGFnZUh0bWwiLCJsZWZ0Q29udHJvbCIsInJpZ2h0Q29udHJvbCIsImh0bWwiLCJhcHBlbmQiLCJhamF4IiwiY29tcGxldGUiLCJhZGRHcmFkZXMiLCJiaW5kIiwiJHNlY29uZF9zbGlkZXJfZWxlbSIsIiR0aGlyZF9zbGlkZXJfZWxlbSIsIiRzZWNvbmRfc2xpZGVyX2NvbnRyb2xzIiwiZmluZCIsIiR0aGlyZF9zbGlkZXJfY29udHJvbHMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic3RvcFByb3BhZ2F0aW9uIiwiJHRoaXMiLCIkcGFnZUl0ZW1zIiwiJGFjdGl2ZVBhZ2UiLCJmaWx0ZXIiLCIkdGFyZ2V0IiwiZmlyc3QiLCJyZW1vdmVDbGFzcyIsImVhY2giLCJpIiwiZWwiLCJnZXQiLCJzaWJsaW5ncyIsImFkZENsYXNzIiwidGFyZ2V0UGFnZSIsImF0dHIiLCJhY3RpdmVQYWdlIiwib25lIiwic2V0VGltZW91dCIsImNhcm91c2VsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwib24iLCJmb3J3YXJkcyIsImRpcmVjdGlvbiIsIiRwYWdlcyIsImxlbmd0aCIsImNzcyIsInVuaXQiLCIkdW5pdHMiLCJlcSIsImhhc0NsYXNzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzdWJ1bml0IiwiYWN0aW9uIiwiZ2V0QXR0cmlidXRlIiwiZXZhbCIsIm1haW5QYWdlIiwiYm9va0luZm8iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlVGV4dE5vZGUiLCJhcHBlbmRDaGlsZCIsInVuaXRzIiwiYXV4VW5pdHMiLCJzbGljZSIsInBhZ2VOdW1iZXIiLCJjYXJvdXNlbFRhcmdldCIsInBhZ2VzIiwiTWF0aCIsImNlaWwiLCJldmVuVW5pdHNOdW1iZXIiLCJwdXNoIiwiaW5kZXgiLCJuZXdQYWdlIiwiY2xvc2VQYWdlIiwiaXNGaWxsZWQiLCJzdWJ1bml0cyIsInJlc291cmNlcyIsImp1c3RGaWxsIiwiT2JqZWN0Iiwia2V5cyIsImNsYXNzU3RyaW5nIiwiYXR0cmlidXRlU3RyaW5nIiwicGFnZUlkIiwiZGVmYXVsdEJnIiwibWF0Y2giLCJiZ1VybCIsImRlZmF1bHRVbml0SW1hZ2UiLCJpbm5lckhUTUwiLCJjYXJvdXNlbGl6ZSIsInF1ZXJ5U2VsZWN0b3IiLCJpZCIsImlzQWN0aXZlIiwidF9zdWJ1bml0cyIsIl9jcmVhdGVBY3Rpdml0eUVsZW1lbnQiLCJjcmVhdGVBY3Rpdml0eUVsZW1lbnQiLCJ0ZXh0d2ViIiwiYWN0aXZpdHkiLCJvY3VsdGFyIiwib3V0ZXJIVE1MIiwiYXR0ck5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJfYWRkR3JhZGUiLCJhY3Rpdml0eU9iaiIsInVuZGVmaW5lZCIsIm5vdGEiLCJ3cmFwcGVyIiwiaWRBY3RpdmlkYWQiLCJhY3RpdmlkYWRlcyIsImFjdGl2aWRhZCIsImNvbmZpZyIsImNsYXNzTmFtZSIsIiRlbGVtZW50IiwiZGVmYXVsdENvbmZpZyIsImN5Y2xlIiwicmlkZSIsInBhdXNlIiwiY29udHJvbExlZnQiLCJjb250cm9sUmlnaHQiLCJjb25jYXQiLCJwcmVwZW5kIiwiYWN0aXZpdHlXcmFwcGVyIiwiaW5jbHVkZUhvbWV3b3JrSWNvbiIsImNhbkJlSG9tZXdvcmsiLCJpY29uV3JhcHBlciIsImltYWdlIiwic3VwcG9ydHNUYXNrcyIsInNjcmlwdFRhZyIsInNjcmlwdENvZGUiLCJvbmx5VmlzaWJsZVRlYWNoZXJzIiwiaW5uZXJUZXh0IiwiZGF0YVdyYXBwZXIiLCJhbmNob3IiLCJ0aXRsZUVsIiwidGl0bGVUZXh0IiwicHJlbG9hZEltYWdlIiwidXJsIiwiY2FsbGJhY2siLCJvbkVycm9yIiwicHJlbG9hZGVyIiwiZnVsbENhbGxiYWNrIiwicmVxdWlyZSIsIlRodW5kZXJDbG9uYWJsZVN0eWxlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJwYXJlbnQiLCJib2R5Q2xhc3NOYW1lIiwiZXh0cmFQbHVnaW5zIiwiY2tFZGl0b3JTdHlsZXMiLCJjYWxsIiwicmVtb3ZlRmluYWxTbGlkZSIsIm92ZXJyaWRlcyIsIl8iLCJleHRlbmQiLCJ0IiwidGhpc1N0eWxlIiwiY3VycmVudFN0eWxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7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LFlBQS9CO0FBQ0FELGFBQVMsQ0FBQ1YsTUFBVixDQUFpQkssZ0JBQWpCLENBQWtDRCxJQUFsQyxDQUF1Q00sU0FBUyxDQUFDVixNQUFqRCxFQUF5RFUsU0FBekQsRUFBb0UsSUFBcEU7QUFDQTtBQUppQixDQUFuQjtBQU1lSix3RUFBZixFOzs7Ozs7Ozs7OztBQ1ZBO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoic3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvKlxyXG4qICAgQXJyYXkgY29uIGxhIGRlZmluaWNpw7NuIGRlIGxvcyBlc3RpbG9zIHBhcmEgZWwgZWRpdG9yIGRlIENLRWRpdG9yXHJcbiovXHJcblxyXG5jb25zdCBja2VTdHlsZXMgPSBbXHJcblx0eyBuYW1lOiAnQ2FqYSAxJywgdHlwZTogJ3dpZGdldCcsIHdpZGdldDogJ2JsaW5rX2JveCcsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2JveC0xJyB9IH0sXHJcblx0eyBuYW1lOiAnQ2FqYSAyJywgdHlwZTogJ3dpZGdldCcsIHdpZGdldDogJ2JsaW5rX2JveCcsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2JveC0yJyB9IH0sXHJcblx0eyBuYW1lOiAnw4luZmFzaXMnLCBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ2Jjay1lbmZhc2lzJyB9fVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2tlU3R5bGVzO1xyXG4iLCJ3aW5kb3cuSG9tZXBhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XG5cdGlmICghZGF0YSkgcmV0dXJuIG5ldyBFcnJvcignTm8gZGF0YSBkZWZpbmVkJyk7XG5cdHRoaXMuREFUQV9MT0FERUQgPSBkYXRhO1xuXHR0aGlzLklURU1TX1BFUl9QQUdFID0gdGhpcy5EQVRBX0xPQURFRC5udW1faXRlbXM7XG5cdHRoaXMuU1RZTEUgPSBibGluay50aGVtZS5zdHlsZXMudGh1bmRlci5wcm90b3R5cGU7IC8vIE9qaXRvIGNvbiBlc3RvXG5cblx0dGhpcy5kYXRhID0gdGhpcy5EQVRBX0xPQURFRC5kYXRhO1xuXHR0aGlzLnByZXZBY3Rpdml0eSA9IHBhcnNlSW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UodGhpcy5TVFlMRS51bml0SGFzaFByZWZpeCwgXCJcIikpO1xuXHR0aGlzLmZyb21BY3Rpdml0eSA9ICFpc05hTih0aGlzLnByZXZBY3Rpdml0eSk7XG5cdHRoaXMubWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZGVyXCIpO1xuXHR0aGlzLiRtYWluQ29udGFpbmVyID0gJCh0aGlzLm1haW5Db250YWluZXIpO1xuXHR0aGlzLmxheW91dERhdGEgPSB7XG5cdFx0ZmlsbGVkVW5pdHM6IFtdXG5cdH1cbn1cblxuSG9tZXBhZ2UucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG92ZXJsYXkgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnY2xhc3MnOiAnb3ZlcmxheS1iYWNrZ3JvdW5kJ30pLCAvLyBUcmFuc2x1Y2lkIHB1cnBsZSBtYXNrLlxuXHRcdGZpcnN0UGFnZSA9IHRoaXMuZ2V0Rmlyc3RwYWdlSHRtbCgpLFxuXHRcdHNlY29uZFBhZ2UgPSB0aGlzLmdldFNlY29uZHBhZ2VIdG1sKCksXG5cdFx0dGhpcmRQYWdlID0gdGhpcy5nZXRUaGlyZHBhZ2VIdG1sKCksXG5cdFx0bGVmdENvbnRyb2wgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ21haW5fcGFnZS1zbGlkZXJfY29udHJvbCBwcmV2IGZhIGZhLWNoZXZyb24tbGVmdCAnICsgKHRoaXMuZnJvbUFjdGl2aXR5ID8gJ2FjdGl2ZScgOiAnJyl9KSxcblx0XHRyaWdodENvbnRyb2wgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ21haW5fcGFnZS1zbGlkZXJfY29udHJvbCBuZXh0IGZhIGZhLWNoZXZyb24tcmlnaHQgJyArICghdGhpcy5mcm9tQWN0aXZpdHkgPyAnYWN0aXZlJyA6ICcnKX0pO1xuXG5cdHRoaXMuJG1haW5Db250YWluZXJcblx0XHQuaHRtbCgnJylcblx0XHQuYXBwZW5kKG92ZXJsYXksIGZpcnN0UGFnZSwgc2Vjb25kUGFnZSwgdGhpcmRQYWdlLCBsZWZ0Q29udHJvbCwgcmlnaHRDb250cm9sKTtcblxuXHQkLmFqYXgoe1xuXHRcdGNvbXBsZXRlOiAoZnVuY3Rpb24oKSB7XG5cdFx0XHR0aGlzLmFkZEdyYWRlcygpO1xuXHRcdH0pLmJpbmQodGhpcylcblx0fSk7XG5cblx0JHNlY29uZF9zbGlkZXJfZWxlbSA9ICQoc2Vjb25kUGFnZSk7XG5cdCR0aGlyZF9zbGlkZXJfZWxlbSA9ICQodGhpcmRQYWdlKTtcblx0JHNlY29uZF9zbGlkZXJfY29udHJvbHMgPSAkc2Vjb25kX3NsaWRlcl9lbGVtLmZpbmQoJy5zbGlkZXJfY29udHJvbCcpO1xuXHQkdGhpcmRfc2xpZGVyX2NvbnRyb2xzID0gJHRoaXJkX3NsaWRlcl9lbGVtLmZpbmQoJy5zbGlkZXJfY29udHJvbCcpO1xuXG5cdC8vIExlZnQvcmlnaHQgc2xpZGVyIGNvbnRyb2xzIC0gbWFpbiBwYWdlLlxuXHRsZWZ0Q29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXG5cdFx0XHQkcGFnZUl0ZW1zID0gJChbZmlyc3RQYWdlLCBzZWNvbmRQYWdlLCB0aGlyZFBhZ2VdKSxcblx0XHRcdCRhY3RpdmVQYWdlID0gJHBhZ2VJdGVtcy5maWx0ZXIoJy5hY3RpdmUnKSxcblx0XHRcdCR0YXJnZXQgPSAkcGFnZUl0ZW1zLmZpcnN0KCk7XG5cblx0XHQkYWN0aXZlUGFnZVxuXHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblxuXHRcdCRwYWdlSXRlbXMuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuXHRcdFx0aWYgKCRhY3RpdmVQYWdlLmdldCgwKSA9PT0gZWwgJiYgaSA+IDApIHtcblx0XHRcdFx0JHRhcmdldCA9ICQoJHBhZ2VJdGVtcy5nZXQoLS1pKSk7XG5cblx0XHRcdFx0c3dpdGNoKGkpIHtcblx0XHRcdFx0XHRjYXNlIDA6IC8vIFJlZGlyZWN0cyB0byB0aGUgTWFpbiBQYWdlLlxuXHRcdFx0XHRcdFx0JHRoaXNcblx0XHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdCR0aGlzXG5cdFx0XHRcdFx0XHRcdC5zaWJsaW5ncygnLm5leHQnKVxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXG5cdFx0XHRcdFx0XHQkdGFyZ2V0XG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDE6IC8vIFJlZGlyZWN0cyB0byB0aGUgc2Vjb25kIHBhZ2UuXG5cdFx0XHRcdFx0XHR2YXIgdGFyZ2V0UGFnZSA9ICRhY3RpdmVQYWdlLmZpbmQoJy5pdGVtLmFjdGl2ZScpLmF0dHIoJ2RhdGEtcGFnZScpLFxuXHRcdFx0XHRcdFx0XHRhY3RpdmVQYWdlID0gJHRhcmdldC5maW5kKCcuaXRlbS5hY3RpdmUnKS5hdHRyKCdkYXRhLXBhZ2UnKTtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHRhcmdldCBwYWdlIGlzIG5vdCB0aGUgYWN0aXZlIHBhZ2UsIHdlIHNob3VsZCBzaG93IHRoZSBwYWdlIHRoYXQgY29udGFpbnNcblx0XHRcdFx0XHRcdC8vIHRoZSBsYXN0IHZpc2l0ZWQgdW5pdC5cblx0XHRcdFx0XHRcdCh0YXJnZXRQYWdlICE9PSBhY3RpdmVQYWdlKVxuXHRcdFx0XHRcdFx0XHQ/ICRzZWNvbmRfc2xpZGVyX2VsZW1cblx0XHRcdFx0XHRcdFx0XHQub25lKCdzbGlkLmJzLmNhcm91c2VsJywgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkdGFyZ2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0sIDEwMCk7XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHQuY2Fyb3VzZWwocGFyc2VJbnQodGFyZ2V0UGFnZSkpXG5cdFx0XHRcdFx0XHRcdDogJHRhcmdldFxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fSk7XG5cblx0cmlnaHRDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gSGlkZSBGaXJzdCBQYWdlIEVsZW1lbnRzXG5cdFx0Zmlyc3RQYWdlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXHRcdHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cblx0XHQvLyBTaG93IFNlY29uZCBwYWdlIGVsZW1lbnRzXG5cdFx0c2Vjb25kUGFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0XHRsZWZ0Q29udHJvbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcblx0fSk7XG5cblx0Ly8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cdC8vIENhcm91c2VsIGV2ZW50cyAvL1xuXHQvLy8vLy8vLy8vLy8vLy8vLy8vLy9cblx0JHNlY29uZF9zbGlkZXJfZWxlbS5hZGQoJHRoaXJkX3NsaWRlcl9lbGVtKS5vbignc2xpZGUuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcblx0XHRcdGZvcndhcmRzID0gZS5kaXJlY3Rpb24gPT09ICdsZWZ0Jyxcblx0XHRcdCR0YXJnZXQgPSAkdGhpcy5maW5kKGZvcndhcmRzID8gJy5mYS5uZXh0JyA6ICcuZmEucHJldicpO1xuXG5cdFx0Ly8gRGVwZW5kaW5nIG9uIHRoZSBjYXJvdXNlbCBkaXJlY2lvbiwgd2Ugc2hvdyBvciBoaWRlIHRoZSBzbGlkZXIgY29udHJvbHMgb24gYm90aFxuXHRcdC8vIHRoZSBzZWNvbmQgYW5kIHRoZSB0aGlyZCBwYWdlcyBpbiBjYXNlIHdlIHJlYWNoIHRoZSBmaXJzIGVsZW1lbnQgb3IgdGhlIGxhc3Rcblx0XHQvLyBlbGVtZW50IG9mIHRoZSBjYXJvdXNlbC5cblx0XHQkdGhpcy5vbmUoJ3NsaWQuYnMuY2Fyb3VzZWwnLCBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgJHBhZ2VzID0gJHRoaXMuZmluZCgnLml0ZW0nKTtcblxuXHRcdFx0JHBhZ2VzXG5cdFx0XHRcdC5maWx0ZXIoJy5hY3RpdmU6JyArIChmb3J3YXJkcyA/ICdsYXN0JyA6ICdmaXJzdCcpICsgJy1vZi10eXBlJykubGVuZ3RoICE9PSAwXG5cdFx0XHRcdFx0PyAkdGFyZ2V0XG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ludmlzaWJsZScpXG5cdFx0XHRcdFx0XHQuc2libGluZ3MoJy5mYScpXG5cdFx0XHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnaW52aXNpYmxlJylcblx0XHRcdFx0XHQ6ICR0YXJnZXQuYWRkKCR0YXJnZXQuc2libGluZ3MoJy5mYScpKVxuXHRcdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKTtcblx0XHR9KTtcblx0fSk7XG5cblx0dGhpcy4kbWFpbkNvbnRhaW5lclxuXHRcdC5jc3MoJ292ZXJmbG93JywgJ2F1dG8nKTtcblxuXHQvLyBEZXBlbmRpbmcgb24gd2hpY2ggY2Fyb3VzZWwgZWxlbWVudCBpcyBzaG93biwgd2Ugc2hvdyBvciBoaWRlIHRoZSBzbGlkZXIgY29udHJvbHNcblx0Ly8gb24gdGhlIHNlY29uZCBwYWdlLlxuXHQkdGhpcmRfc2xpZGVyX2VsZW1cblx0XHQuZmluZCgnLml0ZW0uYWN0aXZlOmZpcnN0LW9mLXR5cGUnKS5sZW5ndGggPT0gMFxuXHRcdFx0JiYgJHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdC5maW5kKCcuZmEucHJldicpXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdpbnZpc2libGUnKVxuXHQkdGhpcmRfc2xpZGVyX2VsZW1cblx0XHQuZmluZCgnLml0ZW0uYWN0aXZlOmxhc3Qtb2YtdHlwZScpLmxlbmd0aCAhPSAwXG5cdFx0XHQmJiAkdGhpcmRfc2xpZGVyX2VsZW1cblx0XHRcdFx0LmZpbmQoJy5mYS5uZXh0Jylcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2ludmlzaWJsZScpO1xuXG5cdC8vLy8vLy8vLy8vL1xuXHQvLyBFdmVudHMgLy9cblx0Ly8vLy8vLy8vLy8vXG5cdC8vIFVuaXQgYnV0dG9uLlxuXHQkc2Vjb25kX3NsaWRlcl9lbGVtLmZpbmQoJy51bml0Om5vdCguZW1wdHkpJykuYmluZChcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciB1bml0ID0gJCh0aGlzKS5hdHRyKFwiZGF0YS11bml0XCIpLFxuXHRcdFx0JHVuaXRzID0gJHRoaXJkX3NsaWRlcl9lbGVtLmZpbmQoJy5pdGVtJyk7XG5cblx0XHQkc2Vjb25kX3NsaWRlcl9lbGVtXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuXG5cdFx0JHRoaXJkX3NsaWRlcl9lbGVtLmNhcm91c2VsKHBhcnNlSW50KHVuaXQpKTtcblxuXHRcdC8vIElmIHRoZSB0YXJnZXQgdW5pdCBpcyBub3QgdGhlIGFjdGl2ZSBvbmUsIHdlIHNob3VsZCBjYXJvdXNlbCB0byBpdFxuXHRcdC8vIGJlZm9yZSBzaG93aW5nIGl0LlxuXHRcdCR1bml0cy5lcSh1bml0KS5oYXNDbGFzcygnYWN0aXZlJylcblx0XHRcdD8gJHRoaXJkX3NsaWRlcl9lbGVtXG5cdFx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJylcblx0XHRcdDogJHRoaXJkX3NsaWRlcl9lbGVtLm9uZSgnc2xpZC5icy5jYXJvdXNlbCcsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCR0aGlyZF9zbGlkZXJfZWxlbVxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKTtcblx0XHRcdFx0fSwgMTAwKTtcblx0XHRcdH0pO1xuXHR9KTtcblx0Ly8gU3VidW5pdCBidXR0b24uXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLmFjdGl2aXR5LXRleHQtZGF0YVwiKS5mb3JFYWNoKGZ1bmN0aW9uKHN1YnVuaXQpIHtcblx0XHRzdWJ1bml0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdFx0XHR2YXIgYWN0aW9uID0gc3VidW5pdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9uY2xpY2tcIik7XG5cdFx0XHRldmFsKGFjdGlvbik7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIEZpcnN0IHBhZ2UgLSBMYW5kaW5nLiAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5Ib21lcGFnZS5wcm90b3R5cGUuZ2V0Rmlyc3RwYWdlSHRtbCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWFpblBhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAnbWFpbl9wYWdlJywgJ2NsYXNzJzogKCF0aGlzLmZyb21BY3Rpdml0eSA/ICdhY3RpdmUnIDogJycpICsgJyBwYWdlLWl0ZW0nfSk7XG5cblx0Ly8gQm9vayBpbmZvLlxuXHR2YXIgYm9va0luZm8gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnY2xhc3MnOiAnYm9vay1pbmZvJ30pLFxuXHRcdHRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdIMScpLFxuXHRcdGRlc2NyaXB0aW9uID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCB7J2NsYXNzJzogJ2Rlc2NyaXB0aW9uJ30pO1xuXG5cdHRpdGxlLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRhdGFbXCJ0aXRsZVwiXSkpO1xuXG5cdGRlc2NyaXB0aW9uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aGlzLmRhdGFbXCJkZXNjcmlwdGlvblwiXSkpO1xuXG5cdG1haW5QYWdlLmFwcGVuZENoaWxkKGJvb2tJbmZvKS5hcHBlbmQodGl0bGUsIGRlc2NyaXB0aW9uKVxuXG5cdHJldHVybiBtYWluUGFnZTtcbn07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBTZWNvbmQgcGFnZSAtIENhcm91c2VsIG9mIHVuaXRzLiAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbkhvbWVwYWdlLnByb3RvdHlwZS5nZXRTZWNvbmRwYWdlSHRtbCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaHRtbCA9ICcnLFxuXHRcdHVuaXRzID0gdGhpcy5kYXRhW1widW5pdHNcIl0sXG5cdFx0YXV4VW5pdHMgPSB1bml0cy5zbGljZSgpLFxuXHRcdHBhZ2VOdW1iZXI7XG5cblx0Ly8gUmVxdWlyZWQgRWxlbWVudHNcblx0dmFyIHNlY29uZFBhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAnc2Vjb25kX3BhZ2UnLCAnY2xhc3MnOiAnY2Fyb3VzZWwgc2xpZGUgY2Fyb3VzZWwtZmFkZSBwYWdlLWl0ZW0nLCAnZGF0YS1pbnRlcnZhbCc6ICdmYWxzZSd9KSxcblx0XHRjYXJvdXNlbFRhcmdldCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgeydpZCc6ICdzZWNvbmRfcGFnZScsICdjbGFzcyc6ICdjYXJvdXNlbC1pbm5lcid9KTtcblxuXHQvLyBJZiB0aGVyZSBhcmVuJ3QgZW5vdWdoIHVuaXRzIHRvIGZpbGwgdGhlIGxhc3QgcGFnZSwgd2UgdXNlIGVtcHR5IG9iamVjdHMgdG8gZmlsbFxuXHQvLyB0aGF0IHNwYWNlcyBhbmQgbWFrZSBmbGV4LWJveCB3b3JrIGZpbmUuXG5cdHZhciBwYWdlcyA9IE1hdGguY2VpbCh1bml0cy5sZW5ndGggLyB0aGlzLklURU1TX1BFUl9QQUdFKSxcblx0XHRldmVuVW5pdHNOdW1iZXIgPSBwYWdlcyA+IDEgPyAoTWF0aC5jZWlsKHVuaXRzLmxlbmd0aCAvIHRoaXMuSVRFTVNfUEVSX1BBR0UpICogdGhpcy5JVEVNU19QRVJfUEFHRSkgOiB1bml0cy5sZW5ndGg7XG5cblx0aWYgKHVuaXRzLmxlbmd0aCA8IGV2ZW5Vbml0c051bWJlcikge1xuXHRcdHdoaWxlIChhdXhVbml0cy5sZW5ndGggPCBldmVuVW5pdHNOdW1iZXIpIHtcblx0XHRcdGF1eFVuaXRzLnB1c2goe30pO1xuXHRcdH1cblx0fVxuXG5cdGF1eFVuaXRzLmZvckVhY2goKGZ1bmN0aW9uKHVuaXQsIGluZGV4KSB7XG5cdFx0dmFyIG5ld1BhZ2UgPSBpbmRleCAlIHRoaXMuSVRFTVNfUEVSX1BBR0UgPT0gMCxcblx0XHRcdGNsb3NlUGFnZSA9IChpbmRleCArIDEpICUgdGhpcy5JVEVNU19QRVJfUEFHRSA9PSAwIHx8IGluZGV4ICsgMSA9PT0gYXV4VW5pdHMubGVuZ3RoLFxuXHRcdFx0aXNGaWxsZWQgPSB0eXBlb2YgdW5pdC5zdWJ1bml0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHVuaXQuc3VidW5pdHMubGVuZ3RoID4gMCB8fCB1bml0LnJlc291cmNlcy5sZW5ndGggPiAwKSxcblx0XHRcdGp1c3RGaWxsID0gT2JqZWN0LmtleXModW5pdCkubGVuZ3RoID09PSAwLCAvLyBjb21wcm9iYW1vcyBxdWUgbm8gc2VhIHVuYSBhY3RpdmlkYWQgZGUgcmVsbGVuby5cblx0XHRcdGNsYXNzU3RyaW5nID0gJ3VuaXQgZW1wdHknICsgKGp1c3RGaWxsID8gJyBmaWxsLXVuaXQnIDogJycpLFxuXHRcdFx0YXR0cmlidXRlU3RyaW5nID0gJyc7XG5cblx0XHQoIXBhZ2VOdW1iZXIgJiYgdHlwZW9mIHBhZ2VOdW1iZXIgPT09ICd1bmRlZmluZWQnKSAgLy8gSWYgcGFnZU51bWJlciBpcyB1bmRlZmluZWQsIHdlIHNldCBpdCB0byAwLlxuXHRcdFx0PyAocGFnZU51bWJlciA9IDApXG5cdFx0XHQ6IG5ld1BhZ2UgJiYgKCsrcGFnZU51bWJlcik7IC8vIEVsc2UsIGlmIHdlJ3JlIGNyZWF0aW5nIGEgbmV3IHBhZ2UsIHdlIHNob3VsZCBpbmNyZWFzZSBpdC5cblxuXHRcdGlmIChpc0ZpbGxlZCkge1xuXHRcdFx0Y2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZy5yZXBsYWNlKCcgZW1wdHknLCAnJyk7XG5cdFx0XHRhdHRyaWJ1dGVTdHJpbmcgPSAnZGF0YS11bml0PVwiJyArIHRoaXMubGF5b3V0RGF0YS5maWxsZWRVbml0cy5sZW5ndGggKyAnXCInO1xuXHRcdFx0dW5pdC5wYWdlSWQgPSBwYWdlTnVtYmVyO1xuXHRcdFx0dGhpcy5sYXlvdXREYXRhLmZpbGxlZFVuaXRzLnB1c2godW5pdCk7XG5cdFx0fVxuXG5cdFx0aHRtbCArPSBuZXdQYWdlXG5cdFx0XHQ/ICc8ZGl2IGNsYXNzPVwiaXRlbSAnICsgKGluZGV4ID09IDAgPyAnYWN0aXZlJyA6ICcnKSArICdcIiBkYXRhLXBhZ2U9XCInICsgKHBhZ2VOdW1iZXIpICsgJ1wiPidcblx0XHRcdDogJyc7XG5cblx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCInICsgY2xhc3NTdHJpbmcgKyAnXCIgJyArIGF0dHJpYnV0ZVN0cmluZyArICdcIj4nO1xuXHRcdFx0XHRpZiAoIWp1c3RGaWxsKSB7XG5cdFx0XHRcdFx0dmFyIGRlZmF1bHRCZyA9IHVuaXRbXCJpbWFnZVwiXS5tYXRjaCgvXFwvaW1hZ2VzXFwvbGlicm9cXC92ZXJkZVxcLnBuZy9nKSAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0YmdVcmwgPSBkZWZhdWx0QmcgPyB0aGlzLlNUWUxFLmRlZmF1bHRVbml0SW1hZ2UgOiB1bml0W1wiaW1hZ2VcIl07XG5cdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cImltZycgKyAoZGVmYXVsdEJnID8gJyBkZWZhdWx0JyA6ICcnKSArICdcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnICsgYmdVcmwgKyAnKVwiPjwvZGl2Pic7XG5cdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cInVuaXQtaW5mb1wiPic7XG5cdFx0XHRcdFx0XHRodG1sICs9ICc8aDI+JyArIHVuaXRbXCJ0aXRsZVwiXSArICc8L2gyPic7XG5cdFx0XHRcdFx0XHRodG1sICs9ICc8cCB0aXRsZT1cIicgKyB1bml0W1wiZGVzY3JpcHRpb25cIl0gKyAnXCI+JyArIHVuaXRbXCJkZXNjcmlwdGlvblwiXSArICc8L3A+Jztcblx0XHRcdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXHRcdFx0XHR9XG5cdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXG5cdFx0aHRtbCArPSAoY2xvc2VQYWdlID8gJzwvZGl2PicgOiAnJyk7XG5cdH0pLmJpbmQodGhpcykpO1xuXHRjYXJvdXNlbFRhcmdldC5pbm5lckhUTUwgPSBodG1sO1xuXG5cdC8vIFdyYXAgZXZlcnl0aGluZyBpbnNpZGUgc2Vjb25kUGFnZS5cblx0c2Vjb25kUGFnZS5hcHBlbmQoY2Fyb3VzZWxUYXJnZXQpO1xuXG5cdHRoaXMuY2Fyb3VzZWxpemUoc2Vjb25kUGFnZSwge30sICdzZWNvbmQtc2xpZGVyX2NvbnRyb2wnKTtcblxuXHQvLyBJZiB0aGVyZSBhcmUgbGVzcyB1bml0cyB0aGFuIGl0ZW1zIHBlciBwYWdlLCB3ZSBtdXN0IGhpZGUgdGhlIGNhcm91c2VsIGJ1dHRvbi5cblx0KGF1eFVuaXRzLmxlbmd0aCA8PSB0aGlzLklURU1TX1BFUl9QQUdFKSAmJiBzZWNvbmRQYWdlLnF1ZXJ5U2VsZWN0b3IoJy5uZXh0LmZhLmZhLWNoZXZyb24tcmlnaHQnKS5jbGFzc0xpc3QuYWRkKCdpbnZpc2libGUnKTtcblxuXHRyZXR1cm4gc2Vjb25kUGFnZTtcbn07XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBUaGlyZCBQYWdlIC0gTGlzdCBvZiBhY3Rpdml0aWVzLiAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbkhvbWVwYWdlLnByb3RvdHlwZS5nZXRUaGlyZHBhZ2VIdG1sID0gZnVuY3Rpb24oKSB7XG5cdHZhciBodG1sID0gJydcblx0XHR0aGlyZFBhZ2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ0RJVicsIHsnaWQnOiAndGhpcmRfcGFnZScsICdjbGFzcyc6ICdjYXJvdXNlbCBzbGlkZSBjYXJvdXNlbC1mYWRlIHBhZ2UtaXRlbSAnICsgKHRoaXMuZnJvbUFjdGl2aXR5ID8gJ2FjdGl2ZScgOiAnJyksICdkYXRhLWludGVydmFsJzogJ2ZhbHNlJ30pLFxuXG5cdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCI+JztcblxuXHRcdFx0dGhpcy5sYXlvdXREYXRhLmZpbGxlZFVuaXRzLmZvckVhY2goKGZ1bmN0aW9uKHVuaXQsIGluZGV4KSB7XG5cdFx0XHRcdHRoaXMucHJldkFjdGl2aXR5ID09PSBwYXJzZUludCh1bml0LmlkKSB8fCAhdGhpcy5mcm9tQWN0aXZpdHkgJiYgaW5kZXggPT0gMFxuXHRcdFx0XHRcdD8gaXNBY3RpdmUgPSAnIGFjdGl2ZSdcblx0XHRcdFx0XHQ6IGlzQWN0aXZlID0gJyc7XG5cblx0XHRcdFx0dmFyIGRlZmF1bHRCZyA9IHVuaXRbXCJpbWFnZVwiXS5tYXRjaCgvXFwvaW1hZ2VzXFwvbGlicm9cXC92ZXJkZVxcLnBuZy9nKSAhPT0gbnVsbFxuXHRcdFx0XHRcdGJnVXJsID0gZGVmYXVsdEJnID8gdGhpcy5TVFlMRS5kZWZhdWx0VW5pdEltYWdlIDogdW5pdFtcImltYWdlXCJdO1xuXG5cdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpdGVtJyArIGlzQWN0aXZlICsgJ1wiIGRhdGEtcGFnZT1cIicgKyB1bml0LnBhZ2VJZCArICdcIiBkYXRhLXVuaXQ9XCInICsgdW5pdC5pZCArICdcIj4nO1xuXHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJ1bml0XCI+JztcblxuXHRcdFx0XHRcdFx0Ly8gVW5pdCBpbWFnZS5cblx0XHRcdFx0XHRcdGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJpbWcnICsgKGRlZmF1bHRCZyA/ICcgZGVmYXVsdCcgOiAnJykgKyAnXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyArIGJnVXJsICsgJylcIj48L2Rpdj4nO1xuXG5cdFx0XHRcdFx0XHQvLyBVbml0IGluZm8uXG5cdFx0XHRcdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwidW5pdC1pbmZvXCI+Jztcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGgyPicgKyB1bml0W1widGl0bGVcIl0gKyAnPC9oMj4nO1xuXHRcdFx0XHRcdFx0XHRodG1sICs9ICc8cD4nICsgdW5pdFtcImRlc2NyaXB0aW9uXCJdICsgJzxwPic7XG5cdFx0XHRcdFx0XHRodG1sICs9ICc8L2Rpdj4nO1xuXHRcdFx0XHRcdGh0bWwgKz0gJzwvZGl2Pic7XG5cblx0XHRcdFx0XHQvLyBVbml0IGNvbnRlbnQuXG5cdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cInVuaXRfY29udGVudFwiPic7XG5cblxuXHRcdFx0XHRcdFx0dmFyIHN1YnVuaXRzID0gdW5pdFtcInN1YnVuaXRzXCJdLFxuXHRcdFx0XHRcdFx0XHRyZXNvdXJjZXMgPSB1bml0W1wicmVzb3VyY2VzXCJdLFxuXHRcdFx0XHRcdFx0XHR0X3N1YnVuaXRzID0gc3VidW5pdHMubGVuZ3RoICsgcmVzb3VyY2VzLmxlbmd0aCxcblx0XHRcdFx0XHRcdFx0X2NyZWF0ZUFjdGl2aXR5RWxlbWVudCA9IHRoaXMuY3JlYXRlQWN0aXZpdHlFbGVtZW50LmJpbmQodGhpcyk7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSBzdWJ1bml0cywgd2UgYWRkIHRoZSBzdWJ1bml0cyBjb250YWluZXIuXG5cdFx0XHRcdFx0XHRzdWJ1bml0cy5sZW5ndGggPiAwICYmIChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGgzIGNsYXNzPVwic3VidW5pdHMtaGVhZGVyXCI+JyArIHRleHR3ZWIoXCJjb3Vyc2VfdW5pdF9hY3Rpdml0aWVzXCIpICsgJzwvaDM+Jztcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGRpdiBjbGFzcz1cImFjdGl2aXRpZXMtbGlzdFwiPic7XG5cdFx0XHRcdFx0XHRcdFx0c3VidW5pdHMuZm9yRWFjaChmdW5jdGlvbihhY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0IWFjdGl2aXR5Lm9jdWx0YXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgKGh0bWwgKz0gX2NyZWF0ZUFjdGl2aXR5RWxlbWVudChhY3Rpdml0eSkub3V0ZXJIVE1MKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdFx0XHRcdH0pKCk7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZXJlIGFyZSByZXNvdXJjZXMsIHdlIGFkZCB0aGUgcmVzb3VyY2VzIGNvbnRhaW5lci5cblx0XHRcdFx0XHRcdHJlc291cmNlcy5sZW5ndGggPiAwICYmIChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPGgzIGlkPVwicmVzb3VyY2VzLWhlYWRlclwiPicgKyB0ZXh0d2ViKCdjb3Vyc2Vfc3VwcGxlbWVudF9jb250ZW50JykgKyAnPC9oMz4nO1xuXHRcdFx0XHRcdFx0XHRodG1sICs9ICc8ZGl2IGNsYXNzPVwiYWN0aXZpdGllcy1saXN0XCI+Jztcblx0XHRcdFx0XHRcdFx0XHRyZXNvdXJjZXMuZm9yRWFjaChmdW5jdGlvbihhY3Rpdml0eSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0IWFjdGl2aXR5Lm9jdWx0YXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JiYgKGh0bWwgKz0gX2NyZWF0ZUFjdGl2aXR5RWxlbWVudChhY3Rpdml0eSkub3V0ZXJIVE1MKTtcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdFx0XHRcdH0pKCk7XG5cdFx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdFx0aHRtbCArPSAnPC9kaXY+Jztcblx0XHRcdH0pLmJpbmQodGhpcykpO1xuXG5cdFx0aHRtbCArPSAnPC9kaXY+JztcblxuXHR0aGlyZFBhZ2UuaW5uZXJIVE1MID0gaHRtbDtcblxuXHR0aGlzLmNhcm91c2VsaXplKHRoaXJkUGFnZSwge30sICd0aGlyZC1zbGlkZXJfY29udHJvbCcpO1xuXG5cdHJldHVybiB0aGlyZFBhZ2U7XG59O1xuXG5Ib21lcGFnZS5wcm90b3R5cGUuY3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uKHR5cGUsIGF0dHJpYnV0ZXMpIHtcblx0dmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG5cdChhdHRyaWJ1dGVzICYmIHR5cGVvZiBhdHRyaWJ1dGVzID09PSAnb2JqZWN0JykgJiYgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbihhdHRyTmFtZSkge1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSlcblx0fSk7XG5cblx0cmV0dXJuIGVsZW1lbnQ7XG59O1xuXG5Ib21lcGFnZS5wcm90b3R5cGUuYWRkR3JhZGVzID0gZnVuY3Rpb24oKSB7XG5cdHZhciBfYWRkR3JhZGUgPSAoZnVuY3Rpb24oYWN0aXZpdHlPYmosIGlkKSB7XG5cdFx0XHRpZiAoIWFjdGl2aXR5T2JqIHx8IHR5cGVvZiBhY3Rpdml0eU9iaiA9PT0gdW5kZWZpbmVkIHx8IGFjdGl2aXR5T2JqID09PSBudWxsIHx8IGFjdGl2aXR5T2JqLm5vdGEgPT09ICcnKSByZXR1cm47XG5cblx0XHRcdHZhciBub3RhID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTUEFOJywgeydjbGFzcyc6ICdub3RhJ30pLFxuXHRcdFx0XHR3cmFwcGVyID0gdGhpcy5tYWluQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWlkPVwiJyArIGlkICsgJ1wiXScpO1xuXG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKG5vdGEpLmFwcGVuZChhY3Rpdml0eU9iai5ub3RhKTtcblx0XHR9KS5iaW5kKHRoaXMpO1xuXG5cdGZvciAodmFyIGlkQWN0aXZpZGFkIGluIHRoaXMuREFUQV9MT0FERUQuYWN0aXZpZGFkZXMpIHtcblx0XHRpZiAoaXNOYU4ocGFyc2VJbnQoaWRBY3RpdmlkYWQpKSkgcmV0dXJuO1xuXHRcdHZhciBhY3RpdmlkYWQgPSB0aGlzLkRBVEFfTE9BREVELmFjdGl2aWRhZGVzW2lkQWN0aXZpZGFkXTtcblx0XHRfYWRkR3JhZGUoYWN0aXZpZGFkLCBpZEFjdGl2aWRhZCk7XG5cdH1cbn1cblxuSG9tZXBhZ2UucHJvdG90eXBlLmNhcm91c2VsaXplID0gZnVuY3Rpb24oZWxlbWVudCwgY29uZmlnLCBjbGFzc05hbWUpIHtcblx0dmFyICRlbGVtZW50ID0gJChlbGVtZW50KSxcblx0XHRkZWZhdWx0Q29uZmlnID0ge2N5Y2xlOiBmYWxzZSwgcmlkZTogZmFsc2UsIHBhdXNlOiBmYWxzZX0sXG5cdFx0Y29udHJvbExlZnQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ3NsaWRlcl9jb250cm9sIHByZXYgZmEgZmEtY2hldnJvbi1sZWZ0IGludmlzaWJsZSd9KSxcblx0XHRjb250cm9sUmlnaHQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ1NQQU4nLCB7J2NsYXNzJzogJ3NsaWRlcl9jb250cm9sIG5leHQgZmEgZmEtY2hldnJvbi1yaWdodCd9KTtcblxuXHRpZiAoY2xhc3NOYW1lKSB7XG5cdFx0Y29udHJvbExlZnQuY2xhc3NOYW1lID0gY29udHJvbExlZnQuY2xhc3NOYW1lLmNvbmNhdCgnICcsIGNsYXNzTmFtZSk7XG5cdFx0Y29udHJvbFJpZ2h0LmNsYXNzTmFtZSA9IGNvbnRyb2xSaWdodC5jbGFzc05hbWUuY29uY2F0KCcgJywgY2xhc3NOYW1lKTtcblx0fVxuXG5cdCRlbGVtZW50XG5cdFx0LnByZXBlbmQoY29udHJvbExlZnQpXG5cdFx0LmFwcGVuZChjb250cm9sUmlnaHQpO1xuXG5cdCRlbGVtZW50LmNhcm91c2VsKGRlZmF1bHRDb25maWcpO1xuXG5cdC8vIExlZnQvcmlnaHQgc2xpZGVyIGNvbnRyb2xzXG5cdGNvbnRyb2xMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0JGVsZW1lbnQuY2Fyb3VzZWwoJ3ByZXYnKTtcblx0fSk7XG5cdGNvbnRyb2xSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCRlbGVtZW50LmNhcm91c2VsKCduZXh0Jyk7XG5cdH0pO1xufTtcbi8qKlxuICogW2NyZWF0ZUFjdGl2aXR5RWxlbWVudCBDcmVhIHVuIGVsZW1lbnRvIGRlbCBsaXN0YWRvIGRlIGFjdGl2aWRhZGVzIGRlbCB0ZW1hIGNvbiBsb3MgZGF0b3MgZGUgdW5hIGFjdGl2aWRhZC5dXG4gKiBAcGFyYW0gIHtqc29ufSBhY3Rpdml0eSBEYXRvcyBkZSBsYSBhY3RpdmlkYWQuXG4gKiBAcmV0dXJuIHtodG1sfSAgICAgICAgICBFbGVtZW50byBIVE1MIGRlbCBsaXN0YWRvIGRlIGFjdGl2aWRhZGVzLlxuICovXG5Ib21lcGFnZS5wcm90b3R5cGUuY3JlYXRlQWN0aXZpdHlFbGVtZW50ID0gZnVuY3Rpb24oYWN0aXZpdHkpIHtcblx0dmFyIGFjdGl2aXR5V3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnRElWJywgeydjbGFzcyc6ICdzdWJ1bml0JywgJ2RhdGEtaWQnOiBhY3Rpdml0eS5pZH0pO1xuXG5cdC8vIFNlbmQgaG9tZXdvcmsgYnV0dG9uLlxuXHRpZiAodGhpcy5kYXRhLmluY2x1ZGVIb21ld29ya0ljb24gJiYgYWN0aXZpdHkuY2FuQmVIb21ld29yaykge1xuXHRcdHZhciBpY29uV3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnU1BBTicsIHsnY2xhc3MnOiAnaWNvbiBpY29uLWVudmlhcid9KSxcblx0XHRcdGltYWdlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdJTUcnLCB7XG5cdFx0XHRcdCdzcmMnOiB0aGlzLmRhdGEuc3VwcG9ydHNUYXNrcyA/ICcvdGhlbWVzL3Jlc3BvbnNpdmUvaW1hZ2VzL2xpYnJvL2ljb25zOC1zZW5kLTkwLnBuZycgOiAnL3RoZW1lcy9yZXNwb25zaXZlL2ltYWdlcy9saWJyby9hY3Rpdi1pY29uLWRlYmVyZXMucG5nJyxcblx0XHRcdFx0J2FsdCc6IHRoaXMuZGF0YS5zdXBwb3J0c1Rhc2tzID8gdGV4dHdlYignY291cnNlX2l0ZW1fc2VuZF90YXNrJykgOiB0ZXh0d2ViKCdjb3Vyc2VfaXRlbV9zZW5kX2hvbWV3b3JrJylcblx0XHRcdH0pO1xuXG5cdFx0aWNvbldyYXBwZXIuYXBwZW5kKGltYWdlKTtcblxuXHRcdC8vIENyZWFtb3MgbGEgZXRpcXVldGEgXCJzY3JpcHRcIiBhIGxhIHF1ZSBlc3RhcsOhIGFzb2NpYWRhIGxhIGFjY2nDs24gZGVsIGJvdMOzbiBkZSBlbnZpYXIgZGViZXJlcy5cblx0XHR2YXIgc2NyaXB0VGFnID0gdGhpcy5jcmVhdGVFbGVtZW50KCdTQ1JJUFQnLCB7J3R5cGUnOiAndGV4dC9qYXZhc2NyaXB0J30pLFxuXHRcdFx0c2NyaXB0Q29kZSA9ICckKFwiI3RoaXJkX3BhZ2VcIikub24oXCJ0YXAgY2xpY2tcIiwgXFwnW2RhdGEtaWQ9XCInICsgYWN0aXZpdHkuaWQgKyAnXCJdIC5pY29uLWVudmlhclxcJywgZnVuY3Rpb24oKXsnXG5cdFx0XHQrICgodGhpcy5kYXRhLnN1cHBvcnRzVGFza3MgJiYgYWN0aXZpdHkub25seVZpc2libGVUZWFjaGVycylcblx0XHRcdFx0PyAnX3Nob3dBbGVydCgnICsgdGV4dHdlYigndGFza192aXNpYmxlX29ubHlfdGVhY2hlcicpICsgJyk7J1xuXHRcdFx0XHQ6ICdvcGVuU2VuZEFjdGl2aXR5SG9tZXdvcmsoJyArIGFjdGl2aXR5LmlkICsgJywgJyArIHRoaXMuZGF0YS5zdXBwb3J0c1Rhc2tzICsgJyk7Jylcblx0XHRcdCsgJ30pJztcblxuXHRcdHNjcmlwdFRhZy5pbm5lclRleHQgPSBzY3JpcHRDb2RlO1xuXG5cdFx0YWN0aXZpdHlXcmFwcGVyLmFwcGVuZChpY29uV3JhcHBlciwgc2NyaXB0VGFnKTtcblx0fVxuXG5cdC8vIEFjdGl2aXR5IGRhdGFcblx0dmFyIGRhdGFXcmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KCdESVYnLCB7J2NsYXNzJzogJ2FjdGl2aXR5LWRhdGEnfSk7IC8vIFdyYXBwZXJcblxuXHR2YXIgYW5jaG9yID0gdGhpcy5jcmVhdGVFbGVtZW50KCdBJywgeydjbGFzcyc6ICdhY3Rpdml0eS10ZXh0LWRhdGEnLCAnaHJlZic6ICdqYXZhc2NyaXB0OnZvaWQoMCknLCAnZGF0YS1vbmNsaWNrJzogYWN0aXZpdHlbXCJvbmNsaWNrVGl0bGVcIl19KTsgLy8gTGluayB0byB0aGUgYWN0aXZpdHlcblxuXHQvLyBBY3Rpdml0eSB0aXRsZVxuXHR2YXIgdGl0bGVFbCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnUCcsIHsnY2xhc3MnOiAnYWN0aXZpdHktdGl0bGUnfSksXG5cdFx0dGl0bGVUZXh0ID0gYWN0aXZpdHlbJ3RpdGxlJ10gIT09ICcnID8gYWN0aXZpdHlbJ3RpdGxlJ10gOiB0ZXh0d2ViKCdjb3Vyc2VfYWN0aXZpZGFkX25vX25hbWUnKTtcblxuXHRhbmNob3IuYXBwZW5kQ2hpbGQodGl0bGVFbCkuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlVGV4dCkpO1xuXG5cdC8vIElmIHRoZXJlJ3MgYSBkZXNjcmlwdGlvbiwgd2UgaW5zZXJ0IGl0LlxuXHRpZiAodHlwZW9mIGFjdGl2aXR5WydkZXNjcmlwdGlvbiddICE9PSAndW5kZWZpbmVkJyAmJiBhY3Rpdml0eVsnZGVzY3JpcHRpb24nXSAhPSAnJykge1xuXHRcdHZhciBkZXNjcmlwdGlvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnUCcsIHsnY2xhc3MnOiAnYWN0aXZpdHktZGVzY3JpcHRpb24nfSk7XG5cdFx0ZGVzY3JpcHRpb24uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFjdGl2aXR5WydkZXNjcmlwdGlvbiddKSk7XG5cblx0XHRhbmNob3IuYXBwZW5kKGRlc2NyaXB0aW9uKTtcblx0fVxuXG5cdGFjdGl2aXR5V3JhcHBlci5hcHBlbmRDaGlsZChkYXRhV3JhcHBlcikuYXBwZW5kKGFuY2hvcik7XG5cblx0cmV0dXJuIGFjdGl2aXR5V3JhcHBlcjtcbn1cblxuSG9tZXBhZ2UucHJvdG90eXBlLnByZWxvYWRJbWFnZSA9IGZ1bmN0aW9uKHVybCwgY2FsbGJhY2ssIG9uRXJyb3IpIHtcblx0dmFyIHByZWxvYWRlciA9IHRoaXMuY3JlYXRlRWxlbWVudCgnaW1nJywgeydzcmMnOiB1cmx9KVxuXHRcdGZ1bGxDYWxsYmFjayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y2FsbGJhY2sodXJsKTtcblx0XHRcdHByZWxvYWRlciA9IG51bGw7XG5cdFx0fTtcblx0cHJlbG9hZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdWxsQ2FsbGJhY2spO1xuXHRwcmVsb2FkZXIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBvbkVycm9yKTtcbn1cbiIsIi8qXG4qICAgSmF2YXNjcmlwdCBwcmluY2lwYWwgY29uIGxhIGVzdHJ1Y3R1cmEgYsOhc2ljYSBkZWwgZXN0aWxvXG4qL1xucmVxdWlyZSgnLi9ob21lcGFnZS5qcycpO1xuXG5pbXBvcnQgY2tlU3R5bGVzIGZyb20gJy4vY2tlX3N0eWxlcyc7XG5pbXBvcnQgb3ZlcnJpZGVzIGZyb20gJy4vb3ZlcnJpZGVzJztcblxuKGZ1bmN0aW9uIChibGluaykge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIFRodW5kZXJDbG9uYWJsZVN0eWxlID0gZnVuY3Rpb24gKCkge1xuXHRcdGJsaW5rLnRoZW1lLnN0eWxlc1tcInRodW5kZXJcIl0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0fVxuXG5cdFRodW5kZXJDbG9uYWJsZVN0eWxlLnByb3RvdHlwZSA9IHtcblx0XHRwYXJlbnQ6IGJsaW5rLnRoZW1lLnN0eWxlc1tcInRodW5kZXJcIl0ucHJvdG90eXBlLFxuXHRcdGJvZHlDbGFzc05hbWU6ICdjb250ZW50X3R5cGVfY2xhc2VfdGh1bmRlci1jbG9uYWJsZScsXG5cdFx0ZXh0cmFQbHVnaW5zOiBbJ2ltYWdlMiddLFxuXHRcdGNrRWRpdG9yU3R5bGVzOiB7XG5cdFx0XHRuYW1lOiAndGh1bmRlci1jbG9uYWJsZScsXG5cdFx0XHRzdHlsZXM6IGNrZVN0eWxlc1xuXHRcdH0sXG5cblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdC8vIEhlcmVkbyBkZSBvdHJvIGVzdGlsb1xuXHRcdFx0dGhpcy5wYXJlbnQuaW5pdC5jYWxsKHRoaXMucGFyZW50LCB0aGlzKTtcblx0XHRcdHRoaXMucmVtb3ZlRmluYWxTbGlkZSgpO1xuXHRcdH0sXG5cdFx0Li4ub3ZlcnJpZGVzXG5cdH07XG5cblx0VGh1bmRlckNsb25hYmxlU3R5bGUucHJvdG90eXBlID0gXy5leHRlbmQoe30sIG5ldyBibGluay50aGVtZS5zdHlsZXNbXCJ0aHVuZGVyXCJdKCksIFRodW5kZXJDbG9uYWJsZVN0eWxlLnByb3RvdHlwZSk7XG5cblx0YmxpbmsudGhlbWUuc3R5bGVzWyd0aHVuZGVyLWNsb25hYmxlJ10gPSBUaHVuZGVyQ2xvbmFibGVTdHlsZTtcbn0pKCBibGluayApO1xuIiwiLypcclxuKiAgIEphdmFzY3JpcHQgZG9uZGUgZXN0w6FuIGxhcyBmdW5jaW9uZXMgcXVlIHNvYnJlZXNjcmliZW4gYSBmdW5jaW9uZXMgZGUgQmFzaWNcclxuKi9cclxuXHJcbmNvbnN0IG92ZXJyaWRlcyA9ICB7XHJcblx0cmVtb3ZlRmluYWxTbGlkZTogKHQpID0+IHtcclxuXHRcdGxldCB0aGlzU3R5bGUgPSBibGluay5hY3Rpdml0eS5jdXJyZW50U3R5bGU7XHJcblx0XHR0aGlzU3R5bGUucGFyZW50LnJlbW92ZUZpbmFsU2xpZGUuY2FsbCh0aGlzU3R5bGUucGFyZW50LCB0aGlzU3R5bGUsIHRydWUpO1xyXG5cdH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgb3ZlcnJpZGVzO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjIxNTk2OTIxODIyXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIkQ6L3dvcmtzcGFjZXMvd2ViL2NvbW1vbi11dGlscy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==
