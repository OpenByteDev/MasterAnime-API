# MasterAnime API

[![Build Status](https://travis-ci.org/OpenByteDev/masteranime-api.svg?branch=master)](https://travis-ci.org/OpenByteDev/Smasteranime-api)
[![npm version](https://badge.fury.io/js/masteranime-api.svg)](https://www.npmjs.com/package/masteranime-api) 
[![Coverage Status](https://coveralls.io/repos/github/OpenByteDev/MasterAnime-API/badge.svg?branch=master)](https://coveralls.io/github/OpenByteDev/MasterAnime-API?branch=master)
[![Dependency Status](https://david-dm.org/OpenByteDev/masteranime-api/status.svg)](https://david-dm.org/OpenByteDev/masteranime-api)
[![DevDependency Status](https://david-dm.org/OpenByteDev/masteranime-api/dev-status.svg)](https://david-dm.org/OpenByteDev/masteranime-api?type=dev)
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
