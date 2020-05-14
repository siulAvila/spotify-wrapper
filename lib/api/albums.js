"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = albums;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function albums() {
  var _this = this;

  return {
    searchAlbum: function () {
      var _searchAlbum = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(query) {
        var albumsList;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.search.searchItems(query, 'album');

              case 2:
                albumsList = _context.sent;

                if (!(albumsList.albums && albumsList.albums.items)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", albumsList.albums.items);

              case 5:
                return _context.abrupt("return", albumsList);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchAlbum(_x) {
        return _searchAlbum.apply(this, arguments);
      }

      return searchAlbum;
    }(),
    searchAlbumsById: function () {
      var _searchAlbumsById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(id) {
        var albumsList;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this.search.searchById('albums', id);

              case 2:
                albumsList = _context2.sent;
                return _context2.abrupt("return", albumsList);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function searchAlbumsById(_x2) {
        return _searchAlbumsById.apply(this, arguments);
      }

      return searchAlbumsById;
    }()
  };
}