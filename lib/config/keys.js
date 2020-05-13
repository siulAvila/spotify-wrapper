"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require('dotenv/config');

var _default = {
  spotifyAuthorization: "Bearer ".concat(process.env.SPOTIFY_API_KEY)
};
exports["default"] = _default;