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

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ \"xml2js\");\n/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ \"util\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, openai__WEBPACK_IMPORTED_MODULE_1__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, openai__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\nconst parseXml = util__WEBPACK_IMPORTED_MODULE_6___default().promisify(xml2js__WEBPACK_IMPORTED_MODULE_5__.parseString);\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n    apiKey: process.env.OPENAI_API_KEY\n});\nasync function handler(req, res) {\n    const publicDir = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\");\n    if (!fs__WEBPACK_IMPORTED_MODULE_2___default().existsSync(publicDir)) {\n        fs__WEBPACK_IMPORTED_MODULE_2___default().mkdirSync(publicDir, {\n            recursive: true\n        });\n    }\n    try {\n        // Fetch a random arXiv paper\n        const arxivResponse = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1&sortBy=lastUpdatedDate&sortOrder=descending\");\n        console.log(\"arXiv API response:\", arxivResponse.data);\n        // Parse XML\n        const result = await parseXml(arxivResponse.data);\n        console.log(\"Parsed XML:\", JSON.stringify(result, null, 2));\n        if (!result.feed || !result.feed.entry || !result.feed.entry[0]) {\n            throw new Error(\"Unexpected arXiv API response structure\");\n        }\n        const entry = result.feed.entry[0];\n        const paper = {\n            title: entry.title[0],\n            summary: entry.summary[0]\n        };\n        console.log(\"Extracted paper:\", paper);\n        // Generate bedtime story using OpenAI\n        const prompt = `Convert this scientific paper titled '${paper.title}' with the following abstract into a short bedtime story for a 10-year-old child: ${paper.summary}`;\n        const completion = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    \"role\": \"system\",\n                    \"content\": \"You are a helpful assistant that converts scientific papers into bedtime stories for children.\"\n                },\n                {\n                    \"role\": \"user\",\n                    \"content\": prompt\n                }\n            ],\n            max_tokens: 300\n        });\n        if (!completion.choices || completion.choices.length === 0) {\n            throw new Error(\"No completion choices returned from OpenAI\");\n        }\n        const bedtimeStory = completion.choices[0].message.content.trim();\n        console.log(\"Generated bedtime story:\", bedtimeStory);\n        // Generate audio using ElevenLabs API\n        const voiceId = req.query.voiceId || \"EXAVITQu4vr4xnSDxMaL\"; // Josh voice\n        const fileName = `story_${crypto__WEBPACK_IMPORTED_MODULE_4___default().randomBytes(4).toString(\"hex\")}.mp3`;\n        const filePath = path__WEBPACK_IMPORTED_MODULE_3___default().join(process.cwd(), \"public\", fileName);\n        const elevenLabsResponse = await (0,axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            method: \"post\",\n            url: `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,\n            headers: {\n                \"Accept\": \"audio/mpeg\",\n                \"Content-Type\": \"application/json\",\n                \"xi-api-key\": process.env.ELEVEN_API_KEY\n            },\n            data: {\n                text: bedtimeStory,\n                model_id: \"eleven_monolingual_v1\",\n                voice_settings: {\n                    stability: 0.5,\n                    similarity_boost: 0.5\n                }\n            },\n            responseType: \"arraybuffer\"\n        });\n        fs__WEBPACK_IMPORTED_MODULE_2___default().writeFileSync(filePath, elevenLabsResponse.data);\n        res.status(200).json({\n            story: bedtimeStory,\n            audioUrl: `/${fileName}`\n        });\n    } catch (error) {\n        console.error(\"Error generating story:\", error);\n        if (error.response) {\n            console.error(\"API response error:\", error.response.data);\n        }\n        res.status(500).json({\n            error: \"Failed to generate story\",\n            details: error.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0JBQ1ZDLGdCQUFnQjtvQkFDZEMsV0FBVztvQkFDWEMsa0JBQWtCO2dCQUNwQjtZQUNGO1lBQ0FDLGNBQWM7UUFDaEI7UUFFQWpFLHVEQUFnQixDQUFDc0QsVUFBVUMsbUJBQW1COUIsSUFBSTtRQUVsRFgsSUFBSXFELE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBT3hCO1lBQWN5QixVQUFVLENBQUMsQ0FBQyxFQUFFbkIsU0FBUyxDQUFDO1FBQUM7SUFDdkUsRUFBRSxPQUFPb0IsT0FBTztRQUNkaEQsUUFBUWdELEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLElBQUlBLE1BQU1DLFFBQVEsRUFBRTtZQUNsQmpELFFBQVFnRCxLQUFLLENBQUMsdUJBQXVCQSxNQUFNQyxRQUFRLENBQUMvQyxJQUFJO1FBQzFEO1FBQ0FYLElBQUlxRCxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVHLE9BQU87WUFBNEJFLFNBQVNGLE1BQU16QixPQUFPO1FBQUM7SUFDbkY7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3NjaWVudGlmaWMtYmVkdGltZS1zdG9yaWVzLXNpbXBsZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS1zdG9yeS5qcz84Zjk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgT3BlbkFJIGZyb20gJ29wZW5haSc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5pbXBvcnQgeyBwYXJzZVN0cmluZyB9IGZyb20gJ3htbDJqcyc7XG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcblxuY29uc3QgcGFyc2VYbWwgPSB1dGlsLnByb21pc2lmeShwYXJzZVN0cmluZyk7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk9QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgcHVibGljRGlyID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnKTtcbiAgaWYgKCFmcy5leGlzdHNTeW5jKHB1YmxpY0RpcikpIHtcbiAgICBmcy5ta2RpclN5bmMocHVibGljRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gRmV0Y2ggYSByYW5kb20gYXJYaXYgcGFwZXJcbiAgICBjb25zdCBhcnhpdlJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vZXhwb3J0LmFyeGl2Lm9yZy9hcGkvcXVlcnk/c2VhcmNoX3F1ZXJ5PWFsbDplbGVjdHJvbiZzdGFydD0wJm1heF9yZXN1bHRzPTEmc29ydEJ5PWxhc3RVcGRhdGVkRGF0ZSZzb3J0T3JkZXI9ZGVzY2VuZGluZycpO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKCdhclhpdiBBUEkgcmVzcG9uc2U6JywgYXJ4aXZSZXNwb25zZS5kYXRhKTtcblxuICAgIC8vIFBhcnNlIFhNTFxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHBhcnNlWG1sKGFyeGl2UmVzcG9uc2UuZGF0YSk7XG4gICAgY29uc29sZS5sb2coJ1BhcnNlZCBYTUw6JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCAyKSk7XG5cbiAgICBpZiAoIXJlc3VsdC5mZWVkIHx8ICFyZXN1bHQuZmVlZC5lbnRyeSB8fCAhcmVzdWx0LmZlZWQuZW50cnlbMF0pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBhclhpdiBBUEkgcmVzcG9uc2Ugc3RydWN0dXJlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgZW50cnkgPSByZXN1bHQuZmVlZC5lbnRyeVswXTtcbiAgICBjb25zdCBwYXBlciA9IHtcbiAgICAgIHRpdGxlOiBlbnRyeS50aXRsZVswXSxcbiAgICAgIHN1bW1hcnk6IGVudHJ5LnN1bW1hcnlbMF0sXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCdFeHRyYWN0ZWQgcGFwZXI6JywgcGFwZXIpO1xuXG4gICAgLy8gR2VuZXJhdGUgYmVkdGltZSBzdG9yeSB1c2luZyBPcGVuQUlcbiAgICBjb25zdCBwcm9tcHQgPSBgQ29udmVydCB0aGlzIHNjaWVudGlmaWMgcGFwZXIgdGl0bGVkICcke3BhcGVyLnRpdGxlfScgd2l0aCB0aGUgZm9sbG93aW5nIGFic3RyYWN0IGludG8gYSBzaG9ydCBiZWR0aW1lIHN0b3J5IGZvciBhIDEwLXllYXItb2xkIGNoaWxkOiAke3BhcGVyLnN1bW1hcnl9YDtcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHtcInJvbGVcIjogXCJzeXN0ZW1cIiwgXCJjb250ZW50XCI6IFwiWW91IGFyZSBhIGhlbHBmdWwgYXNzaXN0YW50IHRoYXQgY29udmVydHMgc2NpZW50aWZpYyBwYXBlcnMgaW50byBiZWR0aW1lIHN0b3JpZXMgZm9yIGNoaWxkcmVuLlwifSxcbiAgICAgICAge1wicm9sZVwiOiBcInVzZXJcIiwgXCJjb250ZW50XCI6IHByb21wdH1cbiAgICAgIF0sXG4gICAgICBtYXhfdG9rZW5zOiAzMDAsXG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbXBsZXRpb24uY2hvaWNlcyB8fCBjb21wbGV0aW9uLmNob2ljZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbXBsZXRpb24gY2hvaWNlcyByZXR1cm5lZCBmcm9tIE9wZW5BSScpO1xuICAgIH1cblxuICAgIGNvbnN0IGJlZHRpbWVTdG9yeSA9IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQudHJpbSgpO1xuXG4gICAgY29uc29sZS5sb2coJ0dlbmVyYXRlZCBiZWR0aW1lIHN0b3J5OicsIGJlZHRpbWVTdG9yeSk7XG5cbiAgICAvLyBHZW5lcmF0ZSBhdWRpbyB1c2luZyBFbGV2ZW5MYWJzIEFQSVxuICAgIGNvbnN0IHZvaWNlSWQgPSByZXEucXVlcnkudm9pY2VJZCB8fCAnRVhBVklUUXU0dnI0eG5TRHhNYUwnOyAvLyBKb3NoIHZvaWNlXG4gICAgY29uc3QgZmlsZU5hbWUgPSBgc3RvcnlfJHtjcnlwdG8ucmFuZG9tQnl0ZXMoNCkudG9TdHJpbmcoJ2hleCcpfS5tcDNgO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gcGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdwdWJsaWMnLCBmaWxlTmFtZSk7XG5cbiAgICBjb25zdCBlbGV2ZW5MYWJzUmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIHVybDogYGh0dHBzOi8vYXBpLmVsZXZlbmxhYnMuaW8vdjEvdGV4dC10by1zcGVlY2gvJHt2b2ljZUlkfWAsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBY2NlcHQnOiAnYXVkaW8vbXBlZycsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4aS1hcGkta2V5JzogcHJvY2Vzcy5lbnYuRUxFVkVOX0FQSV9LRVlcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRleHQ6IGJlZHRpbWVTdG9yeSxcbiAgICAgICAgbW9kZWxfaWQ6ICdlbGV2ZW5fbW9ub2xpbmd1YWxfdjEnLFxuICAgICAgICB2b2ljZV9zZXR0aW5nczoge1xuICAgICAgICAgIHN0YWJpbGl0eTogMC41LFxuICAgICAgICAgIHNpbWlsYXJpdHlfYm9vc3Q6IDAuNVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInXG4gICAgfSk7XG5cbiAgICBmcy53cml0ZUZpbGVTeW5jKGZpbGVQYXRoLCBlbGV2ZW5MYWJzUmVzcG9uc2UuZGF0YSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHN0b3J5OiBiZWR0aW1lU3RvcnksIGF1ZGlvVXJsOiBgLyR7ZmlsZU5hbWV9YCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHN0b3J5OicsIGVycm9yKTtcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSByZXNwb25zZSBlcnJvcjonLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0ZhaWxlZCB0byBnZW5lcmF0ZSBzdG9yeScsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiYXhpb3MiLCJPcGVuQUkiLCJmcyIsInBhdGgiLCJjcnlwdG8iLCJwYXJzZVN0cmluZyIsInV0aWwiLCJwYXJzZVhtbCIsInByb21pc2lmeSIsIm9wZW5haSIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJPUEVOQUlfQVBJX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwdWJsaWNEaXIiLCJqb2luIiwiY3dkIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsImFyeGl2UmVzcG9uc2UiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInJlc3VsdCIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZWVkIiwiZW50cnkiLCJFcnJvciIsInBhcGVyIiwidGl0bGUiLCJzdW1tYXJ5IiwicHJvbXB0IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1vZGVsIiwibWVzc2FnZXMiLCJtYXhfdG9rZW5zIiwiY2hvaWNlcyIsImxlbmd0aCIsImJlZHRpbWVTdG9yeSIsIm1lc3NhZ2UiLCJjb250ZW50IiwidHJpbSIsInZvaWNlSWQiLCJxdWVyeSIsImZpbGVOYW1lIiwicmFuZG9tQnl0ZXMiLCJ0b1N0cmluZyIsImZpbGVQYXRoIiwiZWxldmVuTGFic1Jlc3BvbnNlIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsIkVMRVZFTl9BUElfS0VZIiwidGV4dCIsIm1vZGVsX2lkIiwidm9pY2Vfc2V0dGluZ3MiLCJzdGFiaWxpdHkiLCJzaW1pbGFyaXR5X2Jvb3N0IiwicmVzcG9uc2VUeXBlIiwid3JpdGVGaWxlU3luYyIsInN0YXR1cyIsImpzb24iLCJzdG9yeSIsImF1ZGlvVXJsIiwiZXJyb3IiLCJyZXNwb25zZSIsImRldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-story.js\n");

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