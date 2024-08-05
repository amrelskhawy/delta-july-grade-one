"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/input/dist/chunk-RELDVE63.mjs\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [studentsData, setStudentData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [id, setID] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const fetchData = async ()=>{\n        setLoading(true);\n        try {\n            const response = await fetch(\"/results-data.json\");\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch data\");\n            }\n            let students = await response.json();\n            setStudentData(students);\n            setLoading(false);\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n            setLoading(false);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetchData();\n    }, []);\n    const naviagate = ()=>{\n        if (id.length === 14) {\n            router.push(\"student/\" + id);\n        }\n    };\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"loading ...\"\n        }, void 0, false, {\n            fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \" min-h-screen relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container grid  mx-auto text-center justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"md:text-3xl text-2xl my-8  font-bold\",\n                                children: [\n                                    \"نتيجة دفعة مارس الترم الاول\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"2025/2025\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"input-container max-w-[800px] p-4 \",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_4__.input_default, {\n                                        value: id,\n                                        onChange: (e)=>{\n                                            setID(e.target.value);\n                                        },\n                                        id: \"idInput\",\n                                        type: \"text\",\n                                        label: \"ادخل الرقم القومى\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-start text-slate-500 mt-3\",\n                                        children: \"يرجي ادخال الرقم القومي المسجل لدينا لاظهار معلومات الطالب\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_5__.button_default, {\n                                        onClick: ()=>naviagate(),\n                                        className: \"w-full my-4\",\n                                        color: \"primary\",\n                                        children: \"اظهار\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                            lineNumber: 62,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" absolute bottom-0 left-0 w-full\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\أكاديمية الدلتا\\\\الدلتا\\\\delta-july-2024-grade-1\\\\app\\\\page.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this);\n    }\n}\n_s(Home, \"kDZn2K8KNlBs9jfFXSI9hFbB9mk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXlDO0FBQ1M7QUFDTjtBQUNBO0FBRzdCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGVBQWUsR0FBR0osK0NBQVFBLENBQUMsRUFBRTtJQUNsRCxNQUFNSyxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTSxDQUFDTyxJQUFJQyxNQUFNLEdBQUdQLCtDQUFRQSxDQUFDO0lBQzdCLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNVSxZQUFZO1FBQ2hCRCxXQUFXO1FBQ1gsSUFBSTtZQUNGLE1BQU1FLFdBQVcsTUFBTUMsTUFBTTtZQUM3QixJQUFJLENBQUNELFNBQVNFLEVBQUUsRUFBRTtnQkFDaEIsTUFBTSxJQUFJQyxNQUFNO1lBQ2xCO1lBQ0EsSUFBSUMsV0FBVyxNQUFNSixTQUFTSyxJQUFJO1lBQ2xDWixlQUFlVztZQUNmTixXQUFXO1FBQ2IsRUFBRSxPQUFPUSxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDUixXQUFXO1FBRWI7SUFDRjtJQUVBUixnREFBU0EsQ0FBQztRQUVSUztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLFlBQVk7UUFDaEIsSUFBSWIsR0FBR2MsTUFBTSxLQUFLLElBQUk7WUFDcEJmLE9BQU9nQixJQUFJLENBQUMsYUFBYWY7UUFDM0I7SUFDRjtJQUVBLElBQUlFLFNBQVM7UUFDWCxxQkFDRSw4REFBQ2M7c0JBQUU7Ozs7OztJQUVQLE9BQU87UUFDTCxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUM1QiwwREFBTUE7Ozs7OzhCQUVQLDhEQUFDMkI7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRDtzQ0FDQyw0RUFBQ0U7Z0NBQUdELFdBQVU7O29DQUF3QztrREFFcEQsOERBQUNFOzs7OztvQ0FBSzs7Ozs7Ozs7Ozs7O3NDQUtWLDhEQUFDSDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7O2tEQUNDLDhEQUFDMUIsNERBQUtBO3dDQUFDOEIsT0FBT3JCO3dDQUFJc0IsVUFBVSxDQUFDQzs0Q0FDM0J0QixNQUFNc0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dDQUN0Qjt3Q0FBR3JCLElBQUc7d0NBQVV5QixNQUFLO3dDQUFPQyxPQUFNOzs7Ozs7a0RBQ2xDLDhEQUFDVjt3Q0FBRUUsV0FBVTtrREFBaUM7Ozs7OztrREFHOUMsOERBQUMxQiw2REFBTUE7d0NBQUNtQyxTQUFTLElBQU1kO3dDQUFhSyxXQUFVO3dDQUFjVSxPQUFNO2tEQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFPbEYsOERBQUNYO29CQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7SUFJckI7QUFDRjtHQXpFd0J0Qjs7UUFFUEgsc0RBQVNBOzs7S0FGRkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCB7IElucHV0LCBCdXR0b24gfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbc3R1ZGVudHNEYXRhLCBzZXRTdHVkZW50RGF0YV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBbaWQsIHNldElEXSA9IHVzZVN0YXRlKFwiXCIpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldExvYWRpbmcodHJ1ZSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9yZXN1bHRzLWRhdGEuanNvbicpO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggZGF0YScpO1xyXG4gICAgICB9XHJcbiAgICAgIGxldCBzdHVkZW50cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0U3R1ZGVudERhdGEoc3R1ZGVudHMpXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yKTtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBmZXRjaERhdGEoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IG5hdmlhZ2F0ZSA9ICgpID0+IHtcclxuICAgIGlmIChpZC5sZW5ndGggPT09IDE0KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCdzdHVkZW50LycgKyBpZClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8cD5sb2FkaW5nIC4uLjwvcD5cclxuICAgIClcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWluLWgtc2NyZWVuIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkICBteC1hdXRvIHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWQ6dGV4dC0zeGwgdGV4dC0yeGwgbXktOCAgZm9udC1ib2xkXCIgPlxyXG4gICAgICAgICAgICAgINmG2KrZitis2Kkg2K/Zgdi52Kkg2YXYp9ix2LMg2KfZhNiq2LHZhSDYp9mE2KfZiNmEXHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgMjAyNS8yMDI1XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lciBtYXgtdy1bODAwcHhdIHAtNCBcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW5wdXQgdmFsdWU9e2lkfSBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldElEKGUudGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgICAgICAgIH19IGlkPVwiaWRJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbGFiZWw9XCLYp9iv2K7ZhCDYp9mE2LHZgtmFINin2YTZgtmI2YXZiVwiIC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zdGFydCB0ZXh0LXNsYXRlLTUwMCBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICDZitix2KzZiiDYp9iv2K7Yp9mEINin2YTYsdmC2YUg2KfZhNmC2YjZhdmKINin2YTZhdiz2KzZhCDZhNiv2YrZhtinINmE2KfYuNmH2KfYsSDZhdi52YTZiNmF2KfYqiDYp9mE2LfYp9mE2KhcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBuYXZpYWdhdGUoKX0gY2xhc3NOYW1lPVwidy1mdWxsIG15LTRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgINin2LjZh9in2LFcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHctZnVsbFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJJbnB1dCIsIkJ1dHRvbiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsInN0dWRlbnRzRGF0YSIsInNldFN0dWRlbnREYXRhIiwicm91dGVyIiwiaWQiLCJzZXRJRCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiRXJyb3IiLCJzdHVkZW50cyIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJuYXZpYWdhdGUiLCJsZW5ndGgiLCJwdXNoIiwicCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiYnIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInR5cGUiLCJsYWJlbCIsIm9uQ2xpY2siLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});