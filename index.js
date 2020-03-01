// using express to host page
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//
const port = process.env.PORT || 8088;

app.use('/', express.static('public'));
// app.use('/feedback', express.static('public/log'));

app.post('/feedback', (req, res) => {
//     consnot response = req.body;
//     res.redirect('/feedback');
    console.log('Message received. Hahahahahahhahahaha');
    console.log(req.body);
});
 //

// app.get('/', (req, res) => {
//     console.log('request received');
//     console.log(req.data);
// });

// host the test page (index.html)
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});