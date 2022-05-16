"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var head_1 = require("next/head");
var PropertyCard_1 = require("../components/PropertyCard");
var link_1 = require("next/link");
var firebase_1 = require("../lib/firebase");
exports.getServerSideProps = function () { return __awaiter(void 0, void 0, void 0, function () {
    var posts, snapshot, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                posts = [];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, firebase_1.db.ref('/properties').once('value', function (snapshot) {
                        snapshot.forEach(function (childSnapshot) {
                            var childData = childSnapshot.val();
                            posts = __spreadArrays(posts, [childData]);
                        });
                    })];
            case 2:
                snapshot = _a.sent();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/, {
                    props: {
                        posts: posts
                    }
                }];
        }
    });
}); };
function Home(_a) {
    var posts = _a.posts;
    return (React.createElement("div", { className: "flex min-h-screen flex-col items-center justify-center py-2" },
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Quick Reply"),
            React.createElement("link", { rel: "icon", href: "/favicon.ico" })),
        React.createElement("main", { className: "flex w-full flex-1 flex-col items-center justify-center px-20 text-center" },
            React.createElement("h1", { className: "text-6xl font-bold" },
                "Welcome to",
                ' ',
                React.createElement("a", { className: "text-blue-600", href: "https://www.quickreply.ai/" }, "Quick Reply!")),
            React.createElement(link_1["default"], { href: "/property" },
                React.createElement("div", { className: "mt-6 w-96 rounded-xl border p-6 text-left" },
                    React.createElement("h2", { className: "text-2xl font-bold" }, "Add New Property"))),
            React.createElement("div", { className: "mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full" }, posts.map(function (item, index) {
                return React.createElement(PropertyCard_1["default"], { key: index, name: item.name || "name", description: item.description || "description", size: item.size || "size" });
            }))),
        React.createElement("footer", { className: "mt-8 flex h-24 w-full items-center justify-center border-t" },
            React.createElement("a", { className: "flex items-center justify-center gap-2", href: "https://github.com/Dipendra-creator", target: "_blank", rel: "noopener noreferrer" }, "Created by Dipendra Bhardwaj"))));
}
exports["default"] = Home;
