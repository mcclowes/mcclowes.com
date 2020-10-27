module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./utils/contentfulPosts.js
const space = "j74a7zgljse3";
const accessToken = "829f83f3578d447814dad8a51a4c0e5ccb9430b833081ad81f978fa2cc7837e6";

const client = __webpack_require__("5NG/").createClient({
  space: space,
  accessToken: accessToken
});

async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType.name}.`);
}
/* harmony default export */ var contentfulPosts = ({
  fetchEntries
});
// CONCATENATED MODULE: ./components/Header.js

var __jsx = external_react_default.a.createElement;

const Header = () => {
  return __jsx("h1", {
    className: "title"
  }, "mcclowes");
};

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Footer.js


var Footer_jsx = external_react_default.a.createElement;

const Footer = () => {
  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("footer", {
    className: "jsx-4108580678"
  }, "WIP"), Footer_jsx(style_default.a, {
    id: "4108580678"
  }, ["footer.jsx-4108580678{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".logo.jsx-4108580678{height:1em;margin:5px;}"]));
};

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Post.js


var Post_jsx = external_react_default.a.createElement;

const Post = props => {
  const {
    publishingDate,
    image,
    title
  } = props;
  console.log(props);
  if (!publishingDate) return null;
  return Post_jsx("div", {
    className: "jsx-3260401608" + " " + "post"
  }, image && image.fields ? Post_jsx("img", {
    alt: image.fields.description,
    src: `https:${image.fields.file.url}`,
    className: "jsx-3260401608"
  }) : null, Post_jsx("div", {
    className: "jsx-3260401608" + " " + "text"
  }, Post_jsx("h2", {
    className: "jsx-3260401608"
  }, title), Post_jsx("h3", {
    className: "jsx-3260401608"
  }, publishingDate.substring(0, 10))), Post_jsx(style_default.a, {
    id: "3260401608"
  }, [".post.jsx-3260401608{position:relative;margin:10px;width:300px;color:white;cursor:pointer;}", ".description.jsx-3260401608{position:absolute;top:0;padding:10px;box-sizing:border-box;background:linear-gradient(0deg,rgba(0,0,0,0) 20%,rgba(0,0,0,1) 100%);height:100px;opacity:0;-webkit-transition:opacity 0.5s;transition:opacity 0.5s;}", ".post.jsx-3260401608:hover .description.jsx-3260401608{opacity:1;}", ".text.jsx-3260401608{position:absolute;bottom:3px;padding:10px;box-sizing:border-box;width:100%;height:70px;background:linear-gradient(0deg,rgba(0,0,0,0.5) 20%,rgba(0,0,0,0) 100%);}", "h2.jsx-3260401608,h3.jsx-3260401608{margin:5px;}", "h2.jsx-3260401608{margin-bottom:0;}", "h3.jsx-3260401608{margin-top:0;font-size:0.8em;font-weight:400;}", "img.jsx-3260401608{max-width:300px;}"]));
};

/* harmony default export */ var components_Post = (Post);
// CONCATENATED MODULE: ./pages/index.js


var pages_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const Home = ({
  posts
}) => {
  return pages_jsx("div", {
    className: "jsx-3058913633" + " " + "container"
  }, pages_jsx(head_default.a, null, pages_jsx("title", {
    className: "jsx-3058913633"
  }, "mcclowes"), pages_jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-3058913633"
  })), pages_jsx("main", {
    className: "jsx-3058913633"
  }, pages_jsx(components_Header, null), pages_jsx("div", {
    className: "jsx-3058913633" + " " + "posts"
  }, posts.map((post, i) => {
    return pages_jsx(components_Post, _extends({
      key: i
    }, post));
  }))), pages_jsx(components_Footer, null), pages_jsx(style_default.a, {
    id: "632907366"
  }, [".container.jsx-3058913633{height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", "main.jsx-3058913633{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".posts.jsx-3058913633{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"]), pages_jsx(style_default.a, {
    id: "2422562094"
  }, ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu, Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}", "*{box-sizing:border-box;}"]));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Home);
const getStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map(p => {
    return p.fields;
  });
  return {
    props: {
      posts
    }
  };
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });