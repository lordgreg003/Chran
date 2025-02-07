"use strict";
exports.__esModule = true;
// import Carousel from "./ui/components/homeComponents/Carousel";
// import AboutPage from "./ui/components/homeComponents/About";
// import StatsSection from "./ui/components/homeComponents/StatsSection";
// import Blogs from "./ui/components/blogsComponent/Blogs";
// import SupportVolunteerSection from "./ui/components/homeComponents/SupportVolunteerSection";
var FeatureCard_1 = require("./ui/components/homeComponents/FeatureCard");
var NewsComponent_1 = require("./ui/components/homeComponents/NewsComponent");
var NewsSection_1 = require("./ui/components/homeComponents/NewsSection");
var NewsComponent1_1 = require("./ui/components/homeComponents/NewsComponent1");
var UpcomingEvents_1 = require("./ui/components/homeComponents/UpcomingEvents");
var ShowMoreLayout_1 = require("./ui/components/homeComponents/ShowMoreLayout");
var Marquee_1 = require("./ui/components/layoutComponents/Marquee");
var BlogSection7_1 = require("./ui/components/blogsComponent/BlogSection7");
function Home() {
    return (React.createElement("div", { className: "overflow-x-hidden overflow-x w-full m-0" },
        React.createElement(Marquee_1["default"], null),
        React.createElement(BlogSection7_1["default"], null),
        React.createElement(FeatureCard_1["default"], null),
        React.createElement(NewsComponent_1["default"], null),
        React.createElement(NewsSection_1["default"], null),
        React.createElement(NewsComponent1_1["default"], null),
        React.createElement(UpcomingEvents_1["default"], null),
        React.createElement(ShowMoreLayout_1["default"], null)));
}
exports["default"] = Home;
