(window["webpackJsonp_kodigo_block"] = window["webpackJsonp_kodigo_block"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_kodigo_block"] = window["webpackJsonp_kodigo_block"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Edit; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/** Practice */


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

function Edit(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message', 'kodigo-block'),
    value: attributes.message,
    onChange: function onChange(val) {
      return setAttributes({
        message: val
      });
    }
  }));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toolbar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.js */ "./src/toolbar.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */



/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])('create-block/kodigo-block', {
  /**
   * @see https://make.wordpress.org/core/2020/11/18/block-api-version-2/
   */
  apiVersion: 2,

  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Kodigo Block', 'kodigo-block'),

  /**
   * This is a short description for your block, can be translated with `i18n` functions.
   * It will be shown in the Block Tab in the Settings Sidebar.
   */
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Example block written with ESNext standard and JSX support – build step required.', 'kodigo-block'),

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',

  /**
   * An icon property should be specified to make it easier to identify a block.
   * These can be any of WordPress’ Dashicons, or a custom svg element.
   */
  icon: 'smiley',

  /**
   * Optional block extended support features.
   */
  supports: {
    // Removes support for an HTML mode.
    html: false
  },

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  var attributes = _ref.attributes,
      className = _ref.className;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: className
  }, attributes.message);
}

/***/ }),

/***/ "./src/toolbar.js":
/*!************************!*\
  !*** ./src/toolbar.js ***!
  \************************/
/*! exports provided: kodigoMarkup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kodigoMarkup", function() { return kodigoMarkup; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);



/**
 * WordPress dependencies
 */




var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$richText = wp.richText,
    toggleFormat = _wp$richText.toggleFormat,
    getTextContent = _wp$richText.getTextContent,
    insert = _wp$richText.insert;
var _wp$richText2 = wp.richText,
    registerFormatType = _wp$richText2.registerFormatType,
    getActiveFormat = _wp$richText2.getActiveFormat;
/**
 * Block constants
 */

var name = 'kodigo-block/markup';
var classes = 'tooltip--object kodigo-markup';
var kodigoCurrentPostId = null;
var kodigoModal = null;
window.kodigoAnnotationsRegistry = {
  items: {},
  field: '#kodigo-annotations-list',
  postId: null,
  fields: ['content', 'img', 'type', 'name'],
  defaults: {
    type: 'definition'
  },
  removeItem: function removeItem(key) {
    var itemIndex = this.items.findIndex(function (value, index) {
      return value.key === key;
    });
    this.items.splice(itemIndex, 1);
  },
  addItem: function addItem(key, item) {
    this.items[key] = item;
  },
  getItem: function getItem(key) {
    return this.items[key] != undefined ? this.items[key] : false;
  },
  store: function store() {
    var onSuccessCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var postId = this.postId;
    var items = this.items;
    var url = ajaxurl + '?action=store_kodigo_annotations';
    items = this.items = this.setDefaults(items);
    console.log(items); //do ajax fetch

    KodigoUtils.fetch({
      body: {
        post_id: postId,
        annotations: {
          items: items
        }
      }
    }, url, function (responseData) {
      if (onSuccessCallback != null && typeof onSuccessCallback == 'function') {
        onSuccessCallback(responseData);
      }
    });
  },
  setDefaults: function setDefaults(items) {
    var newItems = {};

    for (var id in items) {
      if (items[id] != undefined) {
        newItems[id] = items[id];

        for (var defaultIndex in this.defaults) {
          if (items[id][defaultIndex] == undefined) {
            newItems[id][defaultIndex] = this.defaults[defaultIndex];
          }
        }
      }
    }

    return newItems;
  },
  loadItems: function loadItems() {
    this.items = {};
    var annotationsField = document.querySelector(this.field).value;
    annotationsField.trim();
    if (annotationsField != '') this.items = JSON.parse(document.querySelector(this.field).value);

    for (var index in this.items) {
      document.getElementById('kodigo-' + index);
    }
  },
  loadItemsAjax: function loadItemsAjax() {
    var _this = this;

    var onSuccessCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var postId = this.postId;
    var items = this.items;
    var url = ajaxurl + '?action=fetch_kodigo_annotations';
    console.log('loading');
    KodigoUtils.fetch({
      body: {
        post_id: postId
      }
    }, url, function (responseData) {
      if (responseData.data !== undefined && responseData.data.items !== undefined) {
        _this.items = responseData.data.items; //this.cleanTags();

        _this.cleanItems();

        _this.items = _this.setDefaults(responseData.data.items);
      }

      if (onSuccessCallback != null && typeof onSuccessCallback == 'function') {
        onSuccessCallback(responseData);
      }
    });
  },
  clean: function clean() {},
  cleanTags: function cleanTags() {
    var _this2 = this;

    document.querySelectorAll('.kodigo-markup').forEach(function (el, index) {
      var str = el.innerHtml;
      var id = el.id;
      id = _this2.extractKey(id); //check if id has corresponding record in the registry
      //delete if it does not have

      if (_this2.getItem(id) == false) {
        var parent = el.parentNode;
        parent.replaceChild(str, el);
      }
    });
  },
  cleanItems: function cleanItems() {
    for (var itemIndex in this.items) {
      if (document.querySelector('#kodigo-' + itemIndex) === null) {
        delete this.items[itemIndex];
      }
    }
  },
  getItems: function getItems() {
    if (this.isEmpty()) {
      this.loadItems();
    }

    return this.items;
  },
  isEmpty: function isEmpty() {
    for (var key in this.items) {
      if (this.items.hasOwnProperty(key)) return false;
    }

    return true;
  },
  extractKey: function extractKey(id) {
    var str = id.split('-');
    return str[1] !== undefined ? str[1] : false;
  }
};
var kodigoAnnotationFormControl = {
  fields: [{
    id: null,
    type: 'select',
    name: 'kodigo_type',
    value: 'definition',
    class: '',
    options: ['definition', 'profile', 'link']
  }, {
    id: null,
    type: 'text',
    name: 'kodigo_profile_name',
    value: '',
    class: ''
  }, {
    id: null,
    type: 'img',
    name: 'kodigo_image_url',
    value: '',
    class: '',
    sizes: ''
  }, {
    id: null,
    type: 'wysiwyg',
    name: 'kodigo_content',
    value: '',
    class: ''
  }, {
    id: null,
    type: 'tiny',
    name: 'kodigo_content',
    value: '',
    class: ''
  }, {
    id: null,
    type: 'hidden',
    name: 'kodigo_annotation_id',
    value: '',
    class: ''
  }, {
    id: null,
    type: 'repeater',
    name: 'kodigo_related_links',
    fields: []
  }],
  generateForm: function generateForm(content) {},
  generateTextField: function generateTextField(fieldInfo) {},
  generateTextAreaField: function generateTextAreaField(fieldInfo) {},
  generateWysiwygField: function generateWysiwygField(fieldInfo) {},
  generateHiddenField: function generateHiddenField(fieldInfo) {},
  generateImageField: function generateImageField(fieldInfo) {},
  generateSelectField: function generateSelectField(fieldInfo) {},
  generateLinkField: function generateLinkField(fieldInfo) {},
  generateRepeaterItems: function generateRepeaterItems(fieldInfo) {},
  generateUniqueID: function generateUniqueID() {
    var kodigoId = Math.random().toString(36).substring(2, 15);
    kodigoId = kodigoId + Math.random().toString(36).substring(2, 15);
    return kodigoId;
  },
  handleConditional: function handleConditional(form) {},
  setContent: function setContent(annotation) {
    jQuery('#kodigo-image-clear').hide();

    for (var index in annotation) {
      if (document.querySelector('#kodigo-' + index) != null) document.querySelector('#kodigo-' + index).value = annotation[index];

      if (index == 'content' && tinyMCE.activeEditor.id == 'kodigo-content') {
        tinyMCE.activeEditor.setContent(annotation[index]);
      }

      if (index == 'img' && annotation[index] != undefined && annotation[index] !== '') {
        document.querySelector('#kodigo-image').src = annotation[index];
        document.querySelector('#kodigo-image-url').src = annotation[index];

        if (annotation[index]) {
          jQuery('#kodigo-image-clear').show();
        }
      }
    }
  },
  clearContent: function clearContent(form) {
    var elements = form.querySelectorAll('.kodigo-form-control');
    elements.forEach(function (el, index) {
      el.value = '';
    });
    jQuery('#kodigo-image-url').val('');
    jQuery('#kodigo-image-url').data('sizes', '');
    jQuery('#kodigo-image').attr('src', '');
  },
  handleConditionalType: function handleConditionalType(form) {
    var _this3 = this;

    var value = form.querySelector('.kodigo-type').value;
    this.toggleConditionalType(form, value);
    form.querySelector('.kodigo-type').addEventListener('change', function (event) {
      var value = event.target.value;

      _this3.toggleConditionalType(form, value);
    });
  },
  toggleConditionalType: function toggleConditionalType(form, currentValue) {
    form.querySelectorAll('.kodigo-type--conditional').forEach(function (el, index) {
      el.style.display = 'none';
    });
    form.querySelectorAll('.kodigo-type--' + currentValue).forEach(function (el, index) {
      el.style.display = 'block';
    });
  },
  loadWPEditor: function loadWPEditor(id) {
    return wp.oldEditor.initialize(id, {
      tinymce: {
        toolbar1: "bold,italic,underline,bullist,",
        force_p_newlines: false,
        force_br_newlines: false
      }
    });
  },
  loadMediaLibraryButton: function loadMediaLibraryButton() {
    if (typeof wp !== 'undefined' && wp.media && wp.media.editor) {
      jQuery('#kodigo-image-clear').on('click', function (e) {
        e.preventDefault();
        jQuery('#kodigo-image-url').val('');
        jQuery('#kodigo-image').attr('src', '');
        jQuery('#kodigo-image-clear').css('display', 'none');
      });
      jQuery('#kodigo-media-library').on('click', function (e) {
        e.preventDefault();
        var imageWrapper = e.target.closest('.kodigo-form-wrapper').querySelector('.kodigo-image--wrapper');
        console.log(imageWrapper);

        wp.media.editor.send.attachment = function (props, attachment) {
          var imageSizes = wp.media.attachment(attachment.id).get('sizes');
          console.log(imageSizes);
          var url = imageSizes.medium ? imageSizes.medium['url'] : imageSizes.full['url'];
          jQuery('#kodigo-image-url').val(url);
          jQuery('#kodigo-image').attr('src', url);
          jQuery('#kodigo-image').data('sizes', imageSizes);
          jQuery('#kodigo-image-clear').css('display', 'block');
          var selectSize = document.createElement('select');
          selectSize.id = 'kodigo-image-sizes';

          for (var size in imageSizes) {
            var optionSize = document.createElement('option');
            optionSize.value = imageSizes[size];
            optionSize.innerHTML = size;
            selectSize.appendChild(optionSize);
          } //imageWrapper.appendChild( selectSize );

        };

        wp.media.editor.open(this);
        return false;
      });
    }
  },
  generateEditAction: function generateEditAction(id, modal) {
    var okCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cancelCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    document.querySelector('#' + 'kodigo-' + id).addEventListener('click', function (event) {
      modal.open(function () {
        var kodigoAnnotation = kodigoAnnotationsRegistry.getItem(id);
        kodigoAnnotation['content'] = wp.oldEditor.getContent('kodigo-content');
        kodigoAnnotation['type'] = jQuery(modal.modalId).find('#kodigo-type').val();
        kodigoAnnotation['img'] = jQuery(modal.modalId).find('#kodigo-image-url').val();
        kodigoAnnotation['img_sizes'] = jQuery(modal.modalId).find('#kodigo-image-url').data('sizes');
        kodigoAnnotationsRegistry.addItem(id, kodigoAnnotation);

        if (okCallback != undefined && typeof okCallback === 'function') {
          okCallback();
        }
      }, function () {
        if (cancelCallback != undefined && typeof cancelCallback === 'function') {
          cancelCallback();
        }
      }, function () {
        //open callback
        var kdata = kodigoAnnotationsRegistry.getItem(id);
        kodigoAnnotationFormControl.setContent(kdata);
        var modalInstance = modal.getInstance();
        jQuery(modal.modalId).dialog('option', 'title', 'Kodigo');
        var kodigoModalForm = modalInstance.element.find('.kodigo-form');
        var kodigoIdField = document.querySelector('#kodigo-annotation-id'); //create extrafield for kodigo id here
        //if field does not exist

        if (kodigoIdField == null) {
          kodigoIdField = document.createElement('input');
          kodigoIdField.setAttribute('type', 'hidden');
          kodigoIdField.setAttribute('id', 'kodigo-annotation-id');
        }

        kodigoIdField.value = id;
        kodigoModalForm.get().forEach(function (el, index) {
          el.appendChild(kodigoIdField);
        });
      }, function () {
        if (jQuery(modal.modalId).dialog('instance')) {
          jQuery(modal.modalId).dialog('destroy');
        }
      }); //modal.open();
    });
  }
};

var KodigoModal = function KodigoModal() {
  var self = this;
  this.modalId = '#kodigo-editor-modal';

  this.getInstance = function () {
    var activeModal = jQuery(self.modalId).dialog('instance');
    return activeModal;
  };

  this.create = function () {
    var okCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var cancelCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var openCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var closeCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var beforeCloseCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    jQuery(self.modalId).dialog({
      dialogClass: "no-close",
      autoOpen: false,
      height: 500,
      width: 500,
      classes: {
        "ui-dialog": "kodigo__ui-dialog"
      },
      open: function open(event, ui) {
        var modalForm = document.querySelector('#kodigo-editor-modal');
        var kodigoModalEditor = kodigoAnnotationFormControl.loadWPEditor('kodigo-content');
        kodigoAnnotationFormControl.loadMediaLibraryButton();
        kodigoAnnotationFormControl.handleConditionalType(modalForm);

        if (openCallback != null && typeof openCallback == 'function') {
          openCallback();
        }
      },
      beforeClose: function beforeClose(event, ui) {
        //remove active editor
        wp.oldEditor.remove('kodigo-content');
        var form = document.querySelector('#kodigo-editor-modal');
        kodigoAnnotationFormControl.clearContent(form);

        if (beforeCloseCallback != null && typeof beforeCloseCallback == 'function') {
          beforeCloseCallback();
        }
      },
      close: function close(event, ui) {
        if (closeCallback != null && typeof closeCallback == 'function') {
          closeCallback();
        }
      },
      buttons: [{
        text: "Cancel",
        class: ' components-button is-tertiary',
        click: function click(e) {
          if (cancelCallback != null && typeof cancelCallback == 'function') {
            cancelCallback();
          }

          jQuery(this).dialog("close");
        }
      }, {
        text: "OK",
        class: this.class + ' components-button is-primary',
        click: function click(e) {
          if (okCallback != null && typeof okCallback == 'function') {
            okCallback();
          }

          jQuery(self.modalId).dialog('close');
        }
      }]
    });
  };

  this.open = function () {
    var okCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var cancelCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var openCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var closeCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var beforeCloseCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    var activeModal = jQuery(self.modalId).dialog('instance');
    var isOpen = false;

    if (activeModal != undefined) {
      isOpen = jQuery(self.modalId).dialog('isOpen');
      self.close();
    }

    self.create(okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback); //self.create( okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback );

    if (!isOpen) {
      jQuery(self.modalId).dialog('open');
    }
  };

  this.edit = function () {
    var okCallback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var cancelCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var openCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var closeCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var beforeCloseCallback = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
    self.create(okCallback, cancelCallback, openCallback, closeCallback, beforeCloseCallback);
    jQuery(self.modalId).dialog('open');
  };

  this.close = function () {
    var activeModal = jQuery(self.modalId).dialog('instance');

    if (activeModal != undefined) {
      jQuery(self.modalId).dialog('close');
      jQuery(self.modalId).dialog('destroy');
    }
  };

  this.setOption = function (optionName, optionValue) {};

  this.setButtons = function () {};

  return this;
};
/**
 * 
 *  Components
 */

/**
 * Gutenberg Kodigo Markup controls
 */


var MyButton = function MyButton() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    isPrimary: true
  }, "Click me!");
};

var kodigoMarkup = {
  name: name,
  title: __('Kodigo'),
  tagName: 'span',
  className: 'kodigo-markup',
  attributes: {
    style: 'style'
  },
  edit: function edit(props) {
    var value = props.value;
    var isActive = props.isActive;
    var onChange = props.onChange;

    var onToggle = function onToggle() {
      //generate random ID
      var kodigoId = kodigoAnnotationFormControl.generateUniqueID();
      var postId = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/editor').getCurrentPostId();

      if (isActive) {
        onChange(toggleFormat(value, {
          type: name,
          attributes: {
            id: 'kodigo-' + kodigoId
          },
          className: {
            classes: classes
          }
        }));
        /*kodigoAnnotationsRegistry.removeItem( formValues );
        kodigoAnnotationsRegistry.store();*/
      } else {
        //call modal here
        //attach okCallback
        kodigoModal.open(function () {
          onChange(toggleFormat(value, {
            type: name,
            attributes: {
              id: 'kodigo-' + kodigoId
            },
            className: {
              classes: classes
            }
          })); //fetch original string

          var originalString = jQuery('#kodigo-' + kodigoId).html(); //extract form values

          var kodigoAnnotation = {
            "content": wp.oldEditor.getContent('kodigo-content'),
            "type": jQuery(kodigoModal.modalId).find('#kodigo-type').val(),
            "img": jQuery(kodigoModal.modalId).find('#kodigo-image-url').val(),
            "img_sizes": jQuery(kodigoModal.modalId).find('#kodigo-image-url').data('sizes'),
            "str": originalString,
            "richtext": value
          }; //store annotations to registry

          kodigoAnnotationsRegistry.addItem(kodigoId, kodigoAnnotation); //attach edit action to newly added annotation

          kodigoAnnotationFormControl.generateEditAction(kodigoId, kodigoModal);
        });
      }
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichTextShortcut"], {
      type: "primary",
      character: "k",
      onUse: onToggle
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichTextToolbarButton"], {
      icon: "edit-page",
      title: __(' Kodigo'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "primary",
      shortcutCharacter: "k"
    }));
  }
};
jQuery(function () {
  //kodigoAnnotationsRegistry.loadItems();
  var postId = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/editor').getCurrentPostId();
  kodigoModal = new KodigoModal();
  kodigoAnnotationsRegistry.loadItemsAjax(function (res) {
    if ('data' in res && 'items' in res.data) {
      var _res$data;

      var annotations = (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.items;

      for (var kodigoId in annotations) {
        //attach edit action to newly added annotation
        kodigoAnnotationFormControl.generateEditAction(kodigoId, kodigoModal);
      }
    }
  });

  window._wpLoadBlockEditor.then(function (s) {});

  jQuery('.kodigo-color-field').wpColorPicker();
});
_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_3___default()(function () {
  kodigoAnnotationsRegistry.postId = Number(document.querySelector('#kodigo-post-id').value); //kodigoModal.create();
});
var selectCore = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/editor');
var checked = true; // Start in a checked state.
//kodigo block subscribe event

Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["subscribe"])(function () {
  if (selectCore.isSavingPost()) {
    checked = false;
  } else {
    if (!checked) {
      var postId = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["select"])('core/editor').getCurrentPostId();
      kodigoAnnotationsRegistry.store(function (response) {
        console.log('storing...');
      });
      checked = true;
    }
  }
});

function registerFormats() {
  [kodigoMarkup].forEach(function (_ref) {
    var name = _ref.name,
        settings = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["name"]);

    return registerFormatType(name, settings);
  });
}

;
registerFormats();

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/dom-ready":
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["domReady"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map