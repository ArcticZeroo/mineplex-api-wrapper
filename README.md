#Mineplex API Wrapper
Wrapper for the module `mineplex-api` (which is also a wrapper). Weird.

```
var config = require('./config');
var MineplexAPI = require('mineplex-api-wrapper');
var api = new MineplexAPI(config.token);

api.getPlayerInfo('Artix', (err, res)=>{
    if(err) return console.log('Could not get player info for Artix: ' + err);
    
    console.log(JSON.stringify(res));
});
```

#Installation

`$npm install mineplex-api-wrapper`

#"Features"

* Prettified methods for `mineplex-api` so your code makes slightly more sense
* Rank name conversion, rank permission checking
* Minecraft chat JSON to colored output (with `chalk`)

