"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _http = _interopRequireDefault(require("../config/http"));

var _constants = _interopRequireDefault(require("../config/constants"));

var searchItems = function searchItems(query, type) {
  return _http["default"].httpRequest("".concat(_constants["default"], "search?q=").concat(query, "&type=").concat(type));
};

var searchById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(type, id) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _http["default"].httpRequest("".concat(_constants["default"], "/").concat(type, "/").concat(id)));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = {
  searchItems: searchItems,
  searchById: searchById
};
exports["default"] = _default;