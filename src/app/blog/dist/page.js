"use strict";
exports.__esModule = true;
var react_1 = require("react");
var BlogSection1_1 = require("../ui/components/blogsComponent/BlogSection1");
var ShowMoreLayout_1 = require("../ui/components/homeComponents/ShowMoreLayout");
var BlogSection2_1 = require("../ui/components/blogsComponent/BlogSection2");
var BlogSection3_1 = require("../ui/components/blogsComponent/BlogSection3");
var Marquee_1 = require("../ui/components/layoutComponents/Marquee");
var BlogSection4_1 = require("../ui/components/blogsComponent/BlogSection4");
var BlogSection5_1 = require("../ui/components/blogsComponent/BlogSection5");
var BlogSection6_1 = require("../ui/components/blogsComponent/BlogSection6");
var BlogSection7_1 = require("../ui/components/blogsComponent/BlogSection7");
var page = function () {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement(Marquee_1["default"], null),
        react_1["default"].createElement(BlogSection7_1["default"], null),
        react_1["default"].createElement(BlogSection6_1["default"], null),
        react_1["default"].createElement(BlogSection5_1["default"], null),
        react_1["default"].createElement(BlogSection4_1["default"], null),
        react_1["default"].createElement(BlogSection1_1["default"], null),
        react_1["default"].createElement(BlogSection2_1["default"], null),
        react_1["default"].createElement(BlogSection3_1["default"], null),
        react_1["default"].createElement(ShowMoreLayout_1["default"], null)));
};
exports["default"] = page;
