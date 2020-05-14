"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _albums = _interopRequireDefault(require("./api/albums"));

var _index = _interopRequireDefault(require("./api/index"));

var _constants = _interopRequireDefault(require("./config/constants"));

var _http = _interopRequireDefault(require("./config/http"));

var SpotifyWrapper = function SpotifyWrapper(options) {
  (0, _classCallCheck2["default"])(this, SpotifyWrapper);
  this.apiUrl = options.apiUrl || _constants["default"];
  this.apiKey = options.apiKey;
  this.albums = _albums["default"].bind(this)();
  this.search = _index["default"].bind(this)();
  this.httpService = _http["default"].bind(this)();
};

exports["default"] = SpotifyWrapper;