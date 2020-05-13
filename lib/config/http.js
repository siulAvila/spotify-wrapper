"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpotifyException = SpotifyException;
exports["default"] = exports.handleErrors = void 0;

var _nodeFetch = require("node-fetch");

var _keys = _interopRequireDefault(require("./keys"));

global.fetch = require('node-fetch');

function SpotifyException(status, message) {
  this.message = message;
  this.status = status;
}

var handleErrors = function handleErrors(response) {
  if (response.error) {
    var _response$error = response.error,
        status = _response$error.status,
        message = _response$error.message;
    throw new SpotifyException(status, message);
  } else {
    return response;
  }
};

exports.handleErrors = handleErrors;
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
      return handleErrors(response);
    })["catch"](function (error) {
      return Promise.reject(error.message);
    });
  }
};
var _default = httpService;
exports["default"] = _default;