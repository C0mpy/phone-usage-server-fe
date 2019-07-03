const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/phone-usage-server-fe'));
app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/phone-usage-server-fe/index.html'));
})

console.log('Console Listening!');
