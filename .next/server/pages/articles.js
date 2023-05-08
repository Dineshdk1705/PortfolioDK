"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/articles";
exports.ids = ["pages/articles"];
exports.modules = {

/***/ "./src/components/AnimatedText.jsx":
/*!*****************************************!*\
  !*** ./src/components/AnimatedText.jsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst quote = {\n    initial: {\n        opacity: 1\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5,\n            staggerChildren: 0.08\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            duration: 1\n        }\n    }\n};\nconst AnimatedText = ({ text , className =\"\"  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: `w-full inline-block text-dark font-bold capitalize text-8xl dark:text-light ${className}`,\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    variants: singleWord,\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/AnimatedText.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/AnimatedText.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/AnimatedText.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedText);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYTtBQUV2QyxNQUFNRSxRQUFRO0lBQ1pDLFNBQVM7UUFDUEMsU0FBUztJQUNYO0lBQ0FDLFNBQVM7UUFDUEQsU0FBUztRQUNURSxZQUFZO1lBQ1ZDLE9BQU87WUFDUEMsaUJBQWlCO1FBQ25CO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLGFBQWE7SUFDakJOLFNBQVM7UUFDUEMsU0FBUztRQUNUTSxHQUFHO0lBQ0w7SUFDQUwsU0FBUztRQUNQRCxTQUFTO1FBQ1RNLEdBQUc7UUFDSEosWUFBWTtZQUNWSyxVQUFVO1FBQ1o7SUFDRjtBQUNGO0FBRUEsTUFBTUMsZUFBZSxDQUFDLEVBQUVDLEtBQUksRUFBRUMsV0FBWSxHQUFFLEVBQUUsR0FBSztJQUNqRCxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFDYiw0RUFBQ2Isb0RBQVM7WUFDUmEsV0FBVyxDQUFDLDRFQUE0RSxFQUFFQSxVQUFVLENBQUM7WUFDckdHLFVBQVVmO1lBQ1ZDLFNBQVE7WUFDUkUsU0FBUTtzQkFFUFEsS0FBS0ssS0FBSyxDQUFDLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDMUIsOERBQUNwQixzREFBVztvQkFFVmEsV0FBVTtvQkFDVkcsVUFBVVI7O3dCQUVUVzt3QkFBSzs7bUJBSkRBLE9BQU8sTUFBTUM7Ozs7Ozs7Ozs7Ozs7OztBQVU5QjtBQUVBLGlFQUFlVCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby1zdGFydGVyLWNvZGUvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanN4P2RiYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgcXVvdGUgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBvcGFjaXR5OiAxLFxuICB9LFxuICBhbmltYXRlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgICAgc3RhZ2dlckNoaWxkcmVuOiAwLjA4LFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBzaW5nbGVXb3JkID0ge1xuICBpbml0aWFsOiB7XG4gICAgb3BhY2l0eTogMCxcbiAgICB5OiA1MCxcbiAgfSxcbiAgYW5pbWF0ZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMSxcbiAgICB9LFxuICB9LFxufTtcblxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHsgdGV4dCwgY2xhc3NOYW1lID0gXCJcIiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbXgtYXV0byBweS0yIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIG92ZXJmbG93LWhpZGRlbiBzbTpweS0wXCI+XG4gICAgICA8bW90aW9uLmgxXG4gICAgICAgIGNsYXNzTmFtZT17YHctZnVsbCBpbmxpbmUtYmxvY2sgdGV4dC1kYXJrIGZvbnQtYm9sZCBjYXBpdGFsaXplIHRleHQtOHhsIGRhcms6dGV4dC1saWdodCAke2NsYXNzTmFtZX1gfVxuICAgICAgICB2YXJpYW50cz17cXVvdGV9XG4gICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgPlxuICAgICAgICB7dGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxtb3Rpb24uc3BhblxuICAgICAgICAgICAga2V5PXt3b3JkICsgXCItXCIgKyBpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiXG4gICAgICAgICAgICB2YXJpYW50cz17c2luZ2xlV29yZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7d29yZH0mbmJzcDtcbiAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLmgxPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwicXVvdGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJzdGFnZ2VyQ2hpbGRyZW4iLCJzaW5nbGVXb3JkIiwieSIsImR1cmF0aW9uIiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.jsx\n");

/***/ }),

/***/ "./src/components/Layout.jsx":
/*!***********************************!*\
  !*** ./src/components/Layout.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Layout = ({ children , className  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/Layout.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxTQUFTLENBQUMsRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBSztJQUMxQyxxQkFDRSw4REFBQ0M7UUFDQ0QsV0FBVyxDQUFDLHlGQUF5RixFQUFFQSxVQUFVLENBQUM7a0JBRWpIRDs7Ozs7O0FBR1A7QUFFQSxpRUFBZUQsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmVsb3Blci1wb3J0Zm9saW8tc3RhcnRlci1jb2RlLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0LmpzeD80MWQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgdy1mdWxsIGgtZnVsbCBpbmxpbmUtYmxvY2sgei0wIGJnLWxpZ2h0IGRhcms6YmctZGFyayBwLTMyIHhsOnAtMjQgbGc6cC0xNiBtZDpwLTEyIHNtOnAtOCAke2NsYXNzTmFtZX1gfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout.jsx\n");

/***/ }),

/***/ "./src/components/TransitionEffect.jsx":
/*!*********************************************!*\
  !*** ./src/components/TransitionEffect.jsx ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst TransitionEffect = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                exit: {\n                    x: [\n                        \"0%\",\n                        \"100%\"\n                    ],\n                    width: [\n                        \"0%\",\n                        \"100%\"\n                    ]\n                },\n                transition: {\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/TransitionEffect.jsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.2,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/TransitionEffect.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark\",\n                initial: {\n                    x: \"100%\",\n                    width: \"100%\"\n                },\n                animate: {\n                    x: \"0%\",\n                    width: \"0%\"\n                },\n                transition: {\n                    delay: 0.4,\n                    duration: 0.8,\n                    ease: \"easeInOut\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/components/TransitionEffect.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransitionEffect);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFFdkMsTUFBTUUsbUJBQW1CLElBQU07SUFDN0IscUJBQ0U7OzBCQUNFLDhEQUFDRCxxREFBVTtnQkFDVEcsV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsR0FBRztvQkFBUUMsT0FBTztnQkFBTztnQkFDcENDLFNBQVM7b0JBQUVGLEdBQUc7b0JBQU1DLE9BQU87Z0JBQUs7Z0JBQ2hDRSxNQUFNO29CQUFFSCxHQUFHO3dCQUFDO3dCQUFNO3FCQUFPO29CQUFFQyxPQUFPO3dCQUFDO3dCQUFNO3FCQUFPO2dCQUFDO2dCQUNqREcsWUFBWTtvQkFBRUMsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUVqRCw4REFBQ1gscURBQVU7Z0JBQ1RHLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7OzBCQUU3RCw4REFBQ1gscURBQVU7Z0JBQ1RHLFdBQVU7Z0JBQ1ZDLFNBQVM7b0JBQUVDLEdBQUc7b0JBQVFDLE9BQU87Z0JBQU87Z0JBQ3BDQyxTQUFTO29CQUFFRixHQUFHO29CQUFNQyxPQUFPO2dCQUFLO2dCQUNoQ0csWUFBWTtvQkFBRUcsT0FBTztvQkFBS0YsVUFBVTtvQkFBS0MsTUFBTTtnQkFBWTs7Ozs7Ozs7QUFJbkU7QUFFQSxpRUFBZVYsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby1zdGFydGVyLWNvZGUvLi9zcmMvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0LmpzeD9mMmQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFRyYW5zaXRpb25FZmZlY3QgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0zMCBiZy1wcmltYXJ5XCJcbiAgICAgICAgaW5pdGlhbD17eyB4OiBcIjEwMCVcIiwgd2lkdGg6IFwiMTAwJVwiIH19XG4gICAgICAgIGFuaW1hdGU9e3sgeDogXCIwJVwiLCB3aWR0aDogXCIwJVwiIH19XG4gICAgICAgIGV4aXQ9e3sgeDogW1wiMCVcIiwgXCIxMDAlXCJdLCB3aWR0aDogW1wiMCVcIiwgXCIxMDAlXCJdIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuOCwgZWFzZTogXCJlYXNlSW5PdXRcIiB9fVxuICAgICAgLz5cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGJvdHRvbS0wIHJpZ2h0LWZ1bGwgdy1zY3JlZW4gaC1zY3JlZW4gei0yMCBiZy1saWdodFwiXG4gICAgICAgIGluaXRpYWw9e3sgeDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICBhbmltYXRlPXt7IHg6IFwiMCVcIiwgd2lkdGg6IFwiMCVcIiB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjIsIGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiZWFzZUluT3V0XCIgfX1cbiAgICAgIC8+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBib3R0b20tMCByaWdodC1mdWxsIHctc2NyZWVuIGgtc2NyZWVuIHotMTAgYmctZGFya1wiXG4gICAgICAgIGluaXRpYWw9e3sgeDogXCIxMDAlXCIsIHdpZHRoOiBcIjEwMCVcIiB9fVxuICAgICAgICBhbmltYXRlPXt7IHg6IFwiMCVcIiwgd2lkdGg6IFwiMCVcIiB9fVxuICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiAwLjQsIGR1cmF0aW9uOiAwLjgsIGVhc2U6IFwiZWFzZUluT3V0XCIgfX1cbiAgICAgIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2l0aW9uRWZmZWN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwiVHJhbnNpdGlvbkVmZmVjdCIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ4Iiwid2lkdGgiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TransitionEffect.jsx\n");

/***/ }),

/***/ "./src/pages/articles.jsx":
/*!********************************!*\
  !*** ./src/pages/articles.jsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_TransitionEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TransitionEffect */ \"./src/components/TransitionEffect.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.jsx\");\n/* harmony import */ var _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/AnimatedText */ \"./src/components/AnimatedText.jsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_1__, _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__]);\n([_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_1__, _components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst articles = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Articles | Page \"\n                    }, void 0, false, {\n                        fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"any description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TransitionEffect__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex w-full flex-col items-center justify-center dark:text-light\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"pt-16\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AnimatedText__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        text: \"Articles Page! \",\n                        className: \"mb-16 md:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/dineshkumar/Desktop/PortfolioDK/src/pages/articles.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articles);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZEO0FBQ25DO0FBQ0c7QUFDYTtBQUNXO0FBRXJELE1BQU1LLFdBQVcsSUFBTTtJQUNyQixxQkFDRTs7MEJBQ0UsOERBQUNILGtEQUFJQTs7a0NBQ0gsOERBQUNJO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7Ozs7Ozs7MEJBRW5DLDhEQUFDVCxvRUFBZ0JBOzs7OzswQkFDakIsOERBQUNVO2dCQUFLQyxXQUFVOzBCQUNkLDRFQUFDUiwwREFBTUE7b0JBQUNRLFdBQVU7OEJBQ2hCLDRFQUFDUCxnRUFBWUE7d0JBQ1hRLE1BQUs7d0JBQ0xELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QjtBQUVBLGlFQUFlTixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby1zdGFydGVyLWNvZGUvLi9zcmMvcGFnZXMvYXJ0aWNsZXMuanN4PzZhNTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRyYW5zaXRpb25FZmZlY3QgZnJvbSBcIkAvY29tcG9uZW50cy9UcmFuc2l0aW9uRWZmZWN0XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IEFuaW1hdGVkVGV4dCBmcm9tIFwiQC9jb21wb25lbnRzL0FuaW1hdGVkVGV4dFwiO1xuXG5jb25zdCBhcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5BcnRpY2xlcyB8IFBhZ2UgPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImFueSBkZXNjcmlwdGlvblwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8VHJhbnNpdGlvbkVmZmVjdCAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGRhcms6dGV4dC1saWdodFwiPlxuICAgICAgICA8TGF5b3V0IGNsYXNzTmFtZT1cInB0LTE2XCI+XG4gICAgICAgICAgPEFuaW1hdGVkVGV4dFxuICAgICAgICAgICAgdGV4dD1cIkFydGljbGVzIFBhZ2UhIFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xNiBtZDohdGV4dC03eGwgc206IXRleHQtNnhsIHhzOiF0ZXh0LTR4bCBzbTptYi04XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzO1xuIl0sIm5hbWVzIjpbIlRyYW5zaXRpb25FZmZlY3QiLCJSZWFjdCIsIkhlYWQiLCJMYXlvdXQiLCJBbmltYXRlZFRleHQiLCJhcnRpY2xlcyIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImNsYXNzTmFtZSIsInRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/articles.jsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/articles.jsx"));
module.exports = __webpack_exports__;

})();