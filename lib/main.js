"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _albums = _interopRequireDefault(require("./api/albums"));

var _index = require("./api/index");

var _default = {
  albums: _albums["default"],
  searchItems: _index.searchItems
};
exports["default"] = _default;