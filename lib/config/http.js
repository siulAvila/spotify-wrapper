"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = httpService;
exports.handleErrors = void 0;

var _nodeFetch = require("node-fetch");

global.fetch = require('node-fetch');

var handleErrors = function handleErrors(response) {
  if (response.error) {
    var _response$error = response.error,
        status = _response$error.status,
        message = _response$error.message;
    throw new Error(message, status);
  } else {
    return response;
  }
};

exports.handleErrors = handleErrors;

function httpService() {
  var _this = this;

  return {
    setHeaders: function setHeaders() {
      var options = {
        headers: new _nodeFetch.Headers({
          'Content-Type': 'application/json',
          Authorization: "Bearer ".concat(_this.apiKey)
        })
      };
      return options;
    },
    httpRequest: function httpRequest(url) {
      return fetch(url, _this.httpService.setHeaders()).then(function (response) {
        return response.json();
      }).then(function (response) {
        return handleErrors(response);
      })["catch"](function (error) {
        return Promise.reject(error.message);
      });
    }
  };
}