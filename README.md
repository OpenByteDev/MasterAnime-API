# MasterAnime API

[![Build Status](https://travis-ci.org/OpenByteDev/MasterAnime-API.svg?branch=master)](https://travis-ci.org/OpenByteDev/MasterAnime-API)
[![npm version](https://badge.fury.io/js/masteranime-api.svg)](https://www.npmjs.com/package/masteranime-api) 
[![Maintainability](https://api.codeclimate.com/v1/badges/b8f4e4eedcb246e39962/maintainability)](https://codeclimate.com/github/OpenByteDev/MasterAnime-API/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b8f4e4eedcb246e39962/test_coverage)](https://codeclimate.com/github/OpenByteDev/MasterAnime-API/test_coverage)
[![Dependency Status](https://david-dm.org/OpenByteDev/MasterAnime-API/status.svg)](https://david-dm.org/OpenByteDev/MasterAnime-API)
[![DevDependency Status](https://david-dm.org/OpenByteDev/MasterAnime-API/dev-status.svg)](https://david-dm.org/OpenByteDev/MasterAnime-API?type=dev)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Doge](https://img.shields.io/badge/doge-wow-yellow.svg)]()

An api interface for masterani.me

<hr>

## Getting Started
### Installation
```bash
$ npm i masteranime-api
```

### Usage
```js
const { MasterAnimeAPI } = require('masteranime-api');

(async () => {
    const trending = await MasterAnimeAPI.getTrending();
    trending.popular_today.forEach(e => console.log(e.title));
})();
```

### API
The API generated with [TypeDoc](http://typedoc.org/) can be found [here](https://openbytedev.github.io/MasterAnime-API/).
