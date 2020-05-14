"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = search;

function search() {
  var _this = this;

  return {
    searchItems: function searchItems(query, type) {
      return _this.httpService.httpRequest("".concat(_this.apiUrl, "search?q=").concat(query, "&type=").concat(type));
    },
    searchById: function searchById(type, id) {
      return _this.httpService.httpRequest("".concat(_this.apiUrl, "/").concat(type, "/").concat(id));
    }
  };
}