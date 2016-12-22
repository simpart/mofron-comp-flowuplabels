require('mofron-parts-inputtext');
require('mofron-parts-text');
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @file mofron-parts-flowuplabel/index.js
	 */

	mofron.parts.FlowupLabels = function (_mofron$parts$InputTe) {
	    _inherits(_class, _mofron$parts$InputTe);

	    function _class(lbl, txt) {
	        _classCallCheck(this, _class);

	        try {
	            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, [lbl, txt]));
	        } catch (e) {
	            console.error(e.stack);
	            throw e;
	        }
	        return _this;
	    }

	    _createClass(_class, [{
	        key: 'initContents',
	        value: function initContents(vd, prm) {
	            try {
	                if (null === prm) {
	                    throw new Error('invalid parameter');
	                }
	                var lbl_txt = null;
	                if ('object' === (typeof prm === 'undefined' ? 'undefined' : _typeof(prm))) {
	                    lbl_txt = prm[0];
	                } else {
	                    lbl_txt = prm;
	                }
	                if ('object' !== (typeof lbl_txt === 'undefined' ? 'undefined' : _typeof(lbl_txt))) {
	                    lbl_txt = new mofron.parts.Text(lbl_txt);
	                }

	                var fl_top = new mofron.util.Vdom('div');
	                fl_top.addClname('FlowupLabels');
	                this.tgt_id = fl_top.getId();

	                var fl_wrp = new mofron.util.Vdom('div');
	                fl_wrp.addClname('fl_wrap');

	                var lbl = new mofron.util.Vdom('label');
	                lbl.addClname('fl_label');

	                var inp = new mofron.util.Vdom('input');
	                inp.addClname('fl_input');

	                vd.addChild(fl_top);
	                fl_top.addChild(fl_wrp);
	                fl_wrp.addChild(lbl);
	                lbl.addChild(lbl_txt.getVdom());
	                fl_wrp.addChild(inp);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'afterInit',
	        value: function afterInit() {
	            try {
	                $('#' + this.vdom.getChild(0).getId()).FlowupLabels({
	                    feature_onInitLoad: true,
	                    class_focused: 'focused',
	                    class_populated: 'populated'
	                });

	                this.vdom.getChild(0).getChild(0).setStyle('margin', '0px');
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'getTarget',
	        value: function getTarget() {
	            try {
	                return this.vdom.getChild(0).getChild(0).getChild(1);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }, {
	        key: 'text',
	        value: function text(val) {
	            try {
	                var prm = val;
	                if ('object' === (typeof val === 'undefined' ? 'undefined' : _typeof(val))) {
	                    prm = val[1];
	                }
	                return _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'text', this).call(this, prm);
	            } catch (e) {
	                console.error(e.stack);
	                throw e;
	            }
	        }
	    }]);

	    return _class;
	}(mofron.parts.InputText);

/***/ }
/******/ ]);
