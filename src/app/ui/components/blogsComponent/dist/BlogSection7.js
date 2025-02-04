'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fonts_1 = require("../../fonts/fonts");
var image_1 = require("next/image");
var link_1 = require("next/link"); // Import Link for navigation
var data4_1 = require("../../data/data4");
function BlogLayout7() {
    var _a = react_1.useState(false), isVisible = _a[0], setIsVisible = _a[1];
    var handleScroll = function () {
        var element = document.getElementById('blogLayout');
        if (element) {
            var rect = element.getBoundingClientRect();
            // Trigger when the element is in view
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
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
                    React.createElement(link_1["default"], { href: "/blo/detail6/" + data4_1.mainCardData5.slug },
                        React.createElement(image_1["default"], { src: data4_1.mainCardData5.imageSrc, alt: data4_1.mainCardData5.title, width: 400, height: 200, className: "w-full h-auto rounded cursor-pointer" })),
                    React.createElement("span", { className: "absolute top-4 left-4 bg-red-500 text-white text-xs px-3 py-1 rounded" }, "Blog")),
                React.createElement("h2", { className: fonts_1.playfair_Display.className + " mt-4 text-2xl font-semibold" },
                    React.createElement(link_1["default"], { href: "/blo/detail6/" + data4_1.mainCardData5.slug, className: "cursor-pointer" }, data4_1.mainCardData5.title)),
                React.createElement("p", { className: fonts_1.open_sans.className + " mt-2 text-gray-600" },
                    React.createElement(link_1["default"], { href: "/blo/detail6/" + data4_1.mainCardData5.slug, className: "cursor-pointer" }, data4_1.mainCardData5.description)),
                React.createElement("div", { className: "mt-4 flex items-center gap-4" },
                    React.createElement("span", { className: fonts_1.open_sans.className + " text-sm text-gray-500" }, data4_1.mainCardData5.articleCount),
                    React.createElement("button", { className: "px-3 py-1 border border-gray-300 text-sm rounded" }, data4_1.mainCardData5.category))))));
}
exports["default"] = BlogLayout7;
