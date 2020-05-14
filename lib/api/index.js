"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.searchItems = void 0;

var _http = _interopRequireDefault(require("../config/http"));

var _constants = _interopRequireDefault(require("../config/constants"));

var searchItems = function searchItems(query, type) {
  return _http["default"].httpRequest("".concat(_constants["default"], "search?q=").concat(query, "&type=").concat(type));
};

exports.searchItems = searchItems;

var searchById = function searchById(type, id) {
  return _http["default"].httpRequest("".concat(_constants["default"], "/").concat(type, "/").concat(id));
};

var _default = {
  searchItems: searchItems,
  searchById: searchById
};
exports["default"] = _default;