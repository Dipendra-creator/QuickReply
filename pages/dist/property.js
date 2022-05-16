"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var react_1 = require("react");
var firebase_1 = require("../lib/firebase");
var Property = function () {
    var _a = react_1.useState(""), name = _a[0], setName = _a[1];
    var _b = react_1.useState(""), description = _b[0], setDescription = _b[1];
    var _c = react_1.useState(""), size = _c[0], setSize = _c[1];
    function addItems(name, description, size) {
        var items = {
            name: name,
            description: description,
            size: size
        };
        firebase_1.db.ref('/properties').push(items);
    }
    var handleSubmit = function (e) {
        e.preventDefault();
        addItems(name, description, size);
        setName("");
        setDescription("");
        setSize("");
    };
    var handleNameChange = function (e) {
        setName(e.target.value);
    };
    var handleDescriptionChange = function (e) {
        setDescription(e.target.value);
    };
    var handleSizeChange = function (e) {
        setSize(e.target.value);
    };
    return (react_1["default"].createElement("div", { className: "flex min-h-screen flex-col items-center justify-center py-2" },
        react_1["default"].createElement("main", { className: "flex w-full flex-1 flex-col items-center justify-center px-20 text-center" },
            react_1["default"].createElement("h1", { className: "text-6xl font-bold" },
                "Welcome to",
                ' ',
                react_1["default"].createElement("a", { className: "text-blue-600", href: "https://www.quickreply.ai/" }, "Quick Reply!")),
            react_1["default"].createElement("div", { className: "mt-6 flex max-w-4xl flex-wrap items-center justify-around flex max-w-4xl sm:w-full border" },
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("form", { onSubmit: handleSubmit },
                        react_1["default"].createElement("div", { className: "mt-8 flex flex-col items-center justify-center" },
                            react_1["default"].createElement("label", { className: "text-2xl font-bold" }, "Name"),
                            react_1["default"].createElement("input", { type: "text", name: "name", value: name, onChange: handleNameChange, placeholder: "Enter name", className: "border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" })),
                        react_1["default"].createElement("div", { className: "mt-8 flex flex-col items-center justify-center" },
                            react_1["default"].createElement("label", { className: "text-2xl font-bold" }, "Description"),
                            react_1["default"].createElement("textarea", { name: "description", id: "description", value: description, onChange: handleDescriptionChange, placeholder: "Description", className: "border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring", required: true })),
                        react_1["default"].createElement("div", { className: "mt-8 flex flex-col items-center justify-center" },
                            react_1["default"].createElement("label", { className: "text-2xl font-bold" }, "Size"),
                            react_1["default"].createElement("input", { type: "text", placeholder: "Enter size (100m2)", name: "size", value: size, onChange: handleSizeChange, className: "border block w-full px-4 py-2 mt-2 text-gray-700 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" })),
                        react_1["default"].createElement("div", { className: "mt-8 mb-8 flex flex-col items-center justify-center" },
                            react_1["default"].createElement("button", { type: "submit", className: "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600" }, "Add")),
                        react_1["default"].createElement(link_1["default"], { href: "/" },
                            react_1["default"].createElement("div", { className: "mt-8 mb-8 flex flex-col items-center justify-center" },
                                react_1["default"].createElement("div", { className: "px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600" }, "HOME"))))))),
        react_1["default"].createElement("footer", { className: "mt-8 flex h-24 w-full items-center justify-center border-t" },
            react_1["default"].createElement("a", { className: "flex items-center justify-center gap-2", href: "https://github.com/Dipendra-creator", target: "_blank", rel: "noopener noreferrer" }, "Created by Dipendra Bhardwaj"))));
};
exports["default"] = Property;
