# Spotify Wrapper

[![Build Status](https://travis-ci.org/siulAvila/spotify-wrapper.svg?branch=master)](https://travis-ci.org/siulAvila/spotify-wrapper)

project for Javascript and TDD studies (with jasmine)

Course:https://www.udemy.com/course/js-com-tdd-na-pratica by [Willian Justen](https://github.com/willianjusten/)

A wrapper to work with the [Spotify Web API](https://developer.spotify.com/web-api/).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

| ![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 39+ ✔                                                                                                         | 42+ ✔                                                                                                          | 29+ ✔                                                                                                        | 10.1+ ✔                                                                                                       | Nope ✘                                                                                                    |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install spotify-wrapper-test-tdd --save
```

## How to use

### ES6

```js
// to import a specific method
import { method } from 'spotify-wrapper-test-tdd';

// to import everything
import * as spotifyWrapper from 'spotify-wrapper-test-tdd';
```

### CommonJS

```js
var spotifyWrapper = require('spotify-wrapper-test-tdd');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper-test-tdd.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper-test-tdd.umd.min.js"></script>
```

After that the library will be available to the Global as `spotifyWrapper`. Follow an example:

```js
const albums = spotifyWrapper.albums.searchAlbums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search(query, types)

> Search for informations about artists, albums, tracks or playlists. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/).

**Arguments**

| Argument | Type               | Options                                  |
| -------- | ------------------ | ---------------------------------------- |
| `type`   | _Array of strings_ | ['artist', 'album', 'track', 'playlist'] |
| `query`  | _string_           | 'Any search query'                       |

**Example**

```js
searchItems(['artist', 'album'], 'Incubus').then((data) => {
  // do what you want with the data
});
```

### searchAlbums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as _album_.

**Arguments**

| Argument | Type     | Options            |
| -------- | -------- | ------------------ |
| `query`  | _string_ | 'Any search query' |

**Example**

```js
albums.searchAlbums('Incubus').then((data) => {
  // do what you want with the data
});
```

### getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type     | Options       |
| -------- | -------- | ------------- |
| `id`     | _string_ | 'Specific id' |

**Example**

```js
albums.searchAlbumsById('4aawyAB9vmqN3uQ7FjRGTy').then((data) => {
  // do what you want with the data
});
```

### getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type               | Options        |
| -------- | ------------------ | -------------- |
| `ids`    | _Array of strings_ | ['id1', 'id2'] |

**Example**

```js
searchAlbumsById(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo']).then((data) => {
  // do what you want with the data
});
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
