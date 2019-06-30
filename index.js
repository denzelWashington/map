const express = require('express');
const app = express();

app.use('/assets', express.static(__dirname + '/assets'));


app.get('/', function (req, res) {
    res.sendFile( __dirname + "/index.html" );
})

app.listen(4300, function () {
  console.log('Example app listening on port 4300!')
});