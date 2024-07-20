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
exports.id = "pages/api/generate-story";
exports.ids = ["pages/api/generate-story"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("xml2js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-story&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-story.js&middlewareConfigBase64=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-story&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-story.js&middlewareConfigBase64=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/generate-story.js */ \"(api)/./pages/api/generate-story.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/generate-story\",\n        pathname: \"/api/generate-story\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_generate_story_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdlbmVyYXRlLXN0b3J5JnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlMkZhcGklMkZnZW5lcmF0ZS1zdG9yeS5qcyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDTDtBQUMxRDtBQUMwRDtBQUMxRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMseURBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLHlEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLGdIQUFtQjtBQUNsRDtBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCxxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaWVudGlmaWMtYmVkdGltZS1zdG9yaWVzLXNpbXBsZS8/MTViOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2dlbmVyYXRlLXN0b3J5LmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2VuZXJhdGUtc3RvcnlcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZW5lcmF0ZS1zdG9yeVwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-story&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-story.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/generate-story.js":
/*!*************************************!*\
  !*** ./pages/api/generate-story.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, openai__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, openai__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nconst parseXml = util__WEBPACK_IMPORTED_MODULE_4___default().promisify((__webpack_require__(/*! xml2js */ \"xml2js\").parseString));\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function handler(req, res) {\n    const publicDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\");\n    if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(publicDir)) {\n        fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(publicDir, {\n            recursive: true\n        });\n    }\n    try {\n        // Fetch a random arXiv paper\n        const arxivResponse = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1&sortBy=lastUpdatedDate&sortOrder=descending\");\n        console.log(\"arXiv API response:\", arxivResponse.data);\n        // Parse XML\n        const result = await parseXml(arxivResponse.data);\n        console.log(\"Parsed XML:\", JSON.stringify(result, null, 2));\n        if (!result.feed || !result.feed.entry || !result.feed.entry[0]) {\n            throw new Error(\"Unexpected arXiv API response structure\");\n        }\n        const entry = result.feed.entry[0];\n        const paper = {\n            title: entry.title[0],\n            summary: entry.summary[0]\n        };\n        console.log(\"Extracted paper:\", paper);\n        // Generate a shorter bedtime story using OpenAI\n        const prompt = `Convert this scientific paper titled '${paper.title}' into a very short bedtime story for a 6-year-old child. Keep it simple, fun, and within 50 words: ${paper.summary}`;\n        const completion = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"system\",\n                    \"content\": \"You are a helpful assistant that converts scientific papers into very short, simple bedtime stories for young children.\"\n                },\n                {\n                    \"role\": \"user\",\n                    \"content\": prompt\n                }\n            ],\n            max_tokens: 70\n        });\n        if (!completion.choices || completion.choices.length === 0) {\n            throw new Error(\"No completion choices returned from OpenAI\");\n        }\n        let bedtimeStory = completion.choices[0].message.content.trim();\n        console.log(\"Generated bedtime story:\", bedtimeStory);\n        // Remove or replace mathematical symbols\n        bedtimeStory = bedtimeStory.replace(/[$\\\\]/g, \"\");\n        // Generate audio using OpenAI text-to-speech\n        const audioResponse = await openai.audio.speech.create({\n            model: \"tts-1\",\n            voice: \"nova\",\n            input: bedtimeStory\n        });\n        // Convert the audio response to a base64 string\n        const audioBase64 = Buffer.from(await audioResponse.arrayBuffer()).toString(\"base64\");\n        const audioUrl = `data:audio/mp3;base64,${audioBase64}`;\n        res.status(200).json({\n            story: bedtimeStory,\n            audioUrl\n        });\n    } catch (error) {\n        console.error(\"Error generating story:\", error);\n        if (error.response) {\n            const responseData = error.response.data.toString(); // Convert Buffer to string\n            console.error(\"API response error:\", responseData);\n        }\n        res.status(500).json({\n            error: \"Failed to generate story\",\n            details: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFO1lBQ2xCLE1BQU1DLGVBQWVGLE1BQU1DLFFBQVEsQ0FBQ3hDLElBQUksQ0FBQ2tDLFFBQVEsSUFBSSwyQkFBMkI7WUFDaEZwQyxRQUFReUMsS0FBSyxDQUFDLHVCQUF1QkU7UUFDdkM7UUFDQXBELElBQUkrQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU87WUFBNEJHLFNBQVNILE1BQU1sQixPQUFPO1FBQUM7SUFDbkY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaWVudGlmaWMtYmVkdGltZS1zdG9yaWVzLXNpbXBsZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS1zdG9yeS5qcz84Zjk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcblxuY29uc3QgcGFyc2VYbWwgPSB1dGlsLnByb21pc2lmeShyZXF1aXJlKCd4bWwyanMnKS5wYXJzZVN0cmluZyk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgcHVibGljRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICBmcy5ta2RpclN5bmMocHVibGljRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gRmV0Y2ggYSByYW5kb20gYXJYaXYgcGFwZXJcbiAgICBjb25zdCBhcnhpdlJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vZXhwb3J0LmFyeGl2Lm9yZy9hcGkvcXVlcnk/c2VhcmNoX3F1ZXJ5PWFsbDplbGVjdHJvbiZzdGFydD0wJm1heF9yZXN1bHRzPTEmc29ydEJ5PWxhc3RVcGRhdGVkRGF0ZSZzb3J0T3JkZXI9ZGVzY2VuZGluZycpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdhclhpdiBBUEkgcmVzcG9uc2U6JywgYXJ4aXZSZXNwb25zZS5kYXRhKTtcblxuICAgIC8vIFBhcnNlIFhNTFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhcnNlWG1sKGFyeGl2UmVzcG9uc2UuZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ1BhcnNlZCBYTUw6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XG5cbiAgICBpZiAoIXJlc3VsdC5mZWVkIHx8ICFyZXN1bHQuZmVlZC5lbnRyeSB8fCAhcmVzdWx0LmZlZWQuZW50cnlbMF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBhclhpdiBBUEkgcmVzcG9uc2Ugc3RydWN0dXJlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSByZXN1bHQuZmVlZC5lbnRyeVswXTtcbiAgICBjb25zdCBwYXBlciA9IHtcbiAgICAgIHRpdGxlOiBlbnRyeS50aXRsZVswXSxcbiAgICAgIHN1bW1hcnk6IGVudHJ5LnN1bW1hcnlbMF0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCdFeHRyYWN0ZWQgcGFwZXI6JywgcGFwZXIpO1xuXG4gICAgLy8gR2VuZXJhdGUgYSBzaG9ydGVyIGJlZHRpbWUgc3RvcnkgdXNpbmcgT3BlbkFJXG4gICAgY29uc3QgcHJvbXB0ID0gYENvbnZlcnQgdGhpcyBzY2llbnRpZmljIHBhcGVyIHRpdGxlZCAnJHtwYXBlci50aXRsZX0nIGludG8gYSB2ZXJ5IHNob3J0IGJlZHRpbWUgc3RvcnkgZm9yIGEgNi15ZWFyLW9sZCBjaGlsZC4gS2VlcCBpdCBzaW1wbGUsIGZ1biwgYW5kIHdpdGhpbiA1MCB3b3JkczogJHtwYXBlci5zdW1tYXJ5fWA7XG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jaGF0LmNvbXBsZXRpb25zLmNyZWF0ZSh7XG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICBtZXNzYWdlczogW1xuICAgICAgICB7XCJyb2xlXCI6IFwic3lzdGVtXCIsIFwiY29udGVudFwiOiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudCB0aGF0IGNvbnZlcnRzIHNjaWVudGlmaWMgcGFwZXJzIGludG8gdmVyeSBzaG9ydCwgc2ltcGxlIGJlZHRpbWUgc3RvcmllcyBmb3IgeW91bmcgY2hpbGRyZW4uXCJ9LFxuICAgICAgICB7XCJyb2xlXCI6IFwidXNlclwiLCBcImNvbnRlbnRcIjogcHJvbXB0fVxuICAgICAgXSxcbiAgICAgIG1heF90b2tlbnM6IDcwLFxuICAgIH0pO1xuXG4gICAgaWYgKCFjb21wbGV0aW9uLmNob2ljZXMgfHwgY29tcGxldGlvbi5jaG9pY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjb21wbGV0aW9uIGNob2ljZXMgcmV0dXJuZWQgZnJvbSBPcGVuQUknKTtcbiAgICB9XG5cbiAgICBsZXQgYmVkdGltZVN0b3J5ID0gY29tcGxldGlvbi5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudC50cmltKCk7XG5cbiAgICBjb25zb2xlLmxvZygnR2VuZXJhdGVkIGJlZHRpbWUgc3Rvcnk6JywgYmVkdGltZVN0b3J5KTtcblxuICAgIC8vIFJlbW92ZSBvciByZXBsYWNlIG1hdGhlbWF0aWNhbCBzeW1ib2xzXG4gICAgYmVkdGltZVN0b3J5ID0gYmVkdGltZVN0b3J5LnJlcGxhY2UoL1skXFxcXF0vZywgJycpO1xuXG4gICAgLy8gR2VuZXJhdGUgYXVkaW8gdXNpbmcgT3BlbkFJIHRleHQtdG8tc3BlZWNoXG4gICAgY29uc3QgYXVkaW9SZXNwb25zZSA9IGF3YWl0IG9wZW5haS5hdWRpby5zcGVlY2guY3JlYXRlKHtcbiAgICAgIG1vZGVsOiBcInR0cy0xXCIsXG4gICAgICB2b2ljZTogXCJub3ZhXCIsXG4gICAgICBpbnB1dDogYmVkdGltZVN0b3J5LFxuICAgIH0pO1xuXG4gICAgLy8gQ29udmVydCB0aGUgYXVkaW8gcmVzcG9uc2UgdG8gYSBiYXNlNjQgc3RyaW5nXG4gICAgY29uc3QgYXVkaW9CYXNlNjQgPSBCdWZmZXIuZnJvbShhd2FpdCBhdWRpb1Jlc3BvbnNlLmFycmF5QnVmZmVyKCkpLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICBjb25zdCBhdWRpb1VybCA9IGBkYXRhOmF1ZGlvL21wMztiYXNlNjQsJHthdWRpb0Jhc2U2NH1gO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdG9yeTogYmVkdGltZVN0b3J5LCBhdWRpb1VybCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHN0b3J5OicsIGVycm9yKTtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGVycm9yLnJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKTsgLy8gQ29udmVydCBCdWZmZXIgdG8gc3RyaW5nXG4gICAgICBjb25zb2xlLmVycm9yKCdBUEkgcmVzcG9uc2UgZXJyb3I6JywgcmVzcG9uc2VEYXRhKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSBzdG9yeScsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJPcGVuQUkiLCJmcyIsInBhdGgiLCJ1dGlsIiwicGFyc2VYbWwiLCJwcm9taXNpZnkiLCJyZXF1aXJlIiwicGFyc2VTdHJpbmciLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicHVibGljRGlyIiwiam9pbiIsImN3ZCIsImV4aXN0c1N5bmMiLCJta2RpclN5bmMiLCJyZWN1cnNpdmUiLCJhcnhpdlJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJyZXN1bHQiLCJKU09OIiwic3RyaW5naWZ5IiwiZmVlZCIsImVudHJ5IiwiRXJyb3IiLCJwYXBlciIsInRpdGxlIiwic3VtbWFyeSIsInByb21wdCIsImNvbXBsZXRpb24iLCJjaGF0IiwiY29tcGxldGlvbnMiLCJjcmVhdGUiLCJtb2RlbCIsIm1lc3NhZ2VzIiwibWF4X3Rva2VucyIsImNob2ljZXMiLCJsZW5ndGgiLCJiZWR0aW1lU3RvcnkiLCJtZXNzYWdlIiwiY29udGVudCIsInRyaW0iLCJyZXBsYWNlIiwiYXVkaW9SZXNwb25zZSIsImF1ZGlvIiwic3BlZWNoIiwidm9pY2UiLCJpbnB1dCIsImF1ZGlvQmFzZTY0IiwiQnVmZmVyIiwiZnJvbSIsImFycmF5QnVmZmVyIiwidG9TdHJpbmciLCJhdWRpb1VybCIsInN0YXR1cyIsImpzb24iLCJzdG9yeSIsImVycm9yIiwicmVzcG9uc2UiLCJyZXNwb25zZURhdGEiLCJkZXRhaWxzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-story.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fgenerate-story&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fgenerate-story.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();