"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = _interopRequireDefault(require("./index"));

var searchAlbums = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
    var albums;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _index["default"].searchItems(query, 'album');

          case 2:
            albums = _context.sent;

            if (!(albums.albums && albums.albums.items)) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", albums.albums.items);

          case 5:
            return _context.abrupt("return", albums);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function searchAlbums(_x) {
    return _ref.apply(this, arguments);
  };
}();

var searchAlbumsById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
    var albums;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _index["default"].searchById('albums', id);

          case 2:
            albums = _context2.sent;
            return _context2.abrupt("return", albums);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function searchAlbumsById(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = {
  searchAlbums: searchAlbums,
  searchAlbumsById: searchAlbumsById
};
exports["default"] = _default;