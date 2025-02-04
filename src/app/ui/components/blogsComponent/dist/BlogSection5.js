'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fonts_1 = require("../../fonts/fonts");
var image_1 = require("next/image");
var link_1 = require("next/link"); // Import Link for navigation
var data3_1 = require("../../data/data3");
function BlogLayout5() {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    // Check the scroll position and add the animation
    var handleScroll = function () {
        var element = document.getElementById('blogLayout');
        if (element) {
            var rect = element.getBoundingClientRect();
            // Trigger when the element is in view
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true); // If it's in the viewport
            }
            else {
                setIsVisible(false); // If it's out of the viewport
            }
        }
    };
    react_1.useEffect(function () {
        window.addEventListener('scroll', handleScroll);
        return function () {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (React.createElement("div", { className: "max-w-screen-lg mx-auto px-4 py-8" },
        React.createElement("div", { className: "h-16" }),
        " ",
        React.createElement("div", { id: "blogLayout", className: "grid grid-cols-1 md:grid-cols-3 gap-8 " + (isVisible ? 'animate__animated animate__zoomIn' : '') },
            React.createElement("div", { className: "md:col-span-2" },
                React.createElement("div", { className: "relative" },
                    React.createElement(link_1["default"], { href: "/blo/detail3/" + data3_1.mainCardData3.slug },
                        React.createElement(image_1["default"], { src: data3_1.mainCardData3.imageSrc, alt: data3_1.mainCardData3.title, width: 400, height: 200, className: "w-full h-auto rounded cursor-pointer" })),
                    React.createElement("span", { className: "absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded" }, "Blog")),
                React.createElement("h2", { className: fonts_1.playfair_Display.className + " mt-4 text-2xl font-semibold" },
                    React.createElement(link_1["default"], { href: "/blo/detail3/" + data3_1.mainCardData3.slug, className: "cursor-pointer" }, data3_1.mainCardData3.title)),
                React.createElement("p", { className: fonts_1.open_sans.className + " mt-2 text-gray-600" },
                    React.createElement(link_1["default"], { href: "/blo/detail3/" + data3_1.mainCardData3.slug, className: "cursor-pointer" }, data3_1.mainCardData3.description)),
                React.createElement("div", { className: "mt-4 flex items-center gap-4" },
                    React.createElement("span", { className: fonts_1.open_sans.className + " text-sm text-gray-500" }, data3_1.mainCardData3.articleCount),
                    React.createElement("button", { className: "px-3 py-1 border border-gray-300 text-sm rounded" }, data3_1.mainCardData3.category))),
            React.createElement("div", { className: "space-y-8" }, data3_1.rightCardsData3.map(function (card, index) { return (React.createElement("div", { key: card.slug, className: "relative " + (isVisible ? "animate__animated animate__zoomIn animate__delay-" + (index + 1) + "s" : '') },
                React.createElement("video", { src: card.videoSrc, controls: true, className: "w-full h-auto rounded cursor-pointer" }, "Your browser does not support the video tag."),
                React.createElement("span", { className: "absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded" }, "Blog"),
                React.createElement("h3", { className: fonts_1.playfair_Display.className + " mt-4 text-lg font-semibold" },
                    React.createElement(link_1["default"], { href: "/blo/detail2/" + card.slug, className: "cursor-pointer" }, card.title)),
                React.createElement("div", { className: "mt-2 flex items-center gap-4" },
                    React.createElement("span", { className: "text-sm text-gray-500" }, card.articleCount),
                    React.createElement("button", { className: fonts_1.open_sans.className + " px-3 py-1 border border-gray-300 text-sm rounded" }, card.category)))); })))));
}
exports["default"] = BlogLayout5;
