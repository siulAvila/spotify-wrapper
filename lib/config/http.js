"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _nodeFetch = require("node-fetch");

var _keys = _interopRequireDefault(require("./keys"));

global.fetch = require('node-fetch');
var httpService = {
  setHeaders: function setHeaders() {
    var options = {
      headers: new _nodeFetch.Headers({
        'Content-Type': 'application/json',
        Authorization: "".concat(_keys["default"].spotifyAuthorization)
      })
    };
    return options;
  },
  httpRequest: function httpRequest(url) {
    return fetch(url, httpService.setHeaders()).then(function (response) {
      return response.json();
    }).then(function (response) {
      if (response.error) {
        throw new Error(response.error);
      }

      return response;
    })["catch"](function (error) {
      return error;
    });
  }
};
var _default = httpService;
exports["default"] = _default;