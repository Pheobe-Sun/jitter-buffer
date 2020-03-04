// using express to host page
const express = require('express');
const app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser.json()); // for parsing application/json
// app.use(bodyParser.raw({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(bodyParser.raw({type: 'application/'}));
// var urlencodedParser = bodyParser.urlencoded({ extended: true });

const port = process.env.PORT || 3000;

app.use('/', express.static('public'));
// app.use('/feedback', express.static('public/log'));

// Post result to MongoDB
// mongoose.connect('mongodb+srv://Pheobe:qxlab2020@cluster0-oecdm.mongodb.net/test?retryWrites=true&w=majority');


// TEST
// receive csv data from the page
// app.post('/', (req, res) => {
// //     res.redirect('/feedback');
//     console.log('data ready to send ...');
//     console.log(req.body.data);
// });



// retrieve data from /feedback page
// app.get('/feedback', (req, res) => {

    // res.sendFile(__dirname + '/public/log/index.html');
//     console.log('request received');
//     console.log(req.data);
// });

// host the test page (index.html)
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});