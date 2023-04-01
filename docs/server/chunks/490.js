"use strict";
exports.id = 490;
exports.ids = [490];
exports.modules = {

/***/ 4490:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ getAllPosts),
/* harmony export */   "z": () => (/* binding */ getPostBySlug)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1774);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);
([remark__WEBPACK_IMPORTED_MODULE_3__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const POSTS_DIRECTORY = path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), "_posts");
function getAllPosts() {
    const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(POSTS_DIRECTORY);
    return fileNames.map((fileName)=>{
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(POSTS_DIRECTORY, fileName);
        const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
        const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);
        return {
            slug,
            content: "",
            ...data
        };
    });
}
async function getPostBySlug(slug) {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_2___default().join(POSTS_DIRECTORY, `${slug}.md`);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, "utf8");
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_1___default()(fileContents);
    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_3__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__["default"]).process(matterResult.content);
    const contentHtml = processedContent.toString();
    return {
        slug,
        content: contentHtml,
        ...matterResult.data
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;