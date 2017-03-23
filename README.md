## Basic vanilla js ajax handler

### Methods
Methods | 
--- | 
**.post**(url, data, callback) |
**.get**(url, callback) | 
**.put**(url, data, callback) |
**.delete**(url, data, callback) | 

<br>

### Example how to use it

```javascript
var ajax = require('simple-ajax-handler');
var url = 'index.html';
var sendData = {
    // your data
};
ajax.post(url, sendData);
```