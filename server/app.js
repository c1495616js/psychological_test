const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const {Schema} = mongoose;
//database
mongoose.connect('mongodb://localhost:28017/young');
const userSchema = new Schema({
  userName:String,
  result:String,
  fullResult:String,
  a:Array,
  b:Array,
  c:Array,
  d:Array
});
const User = mongoose.model('User',userSchema);
////////////////////////////////////////
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
//////////////
////////////
let router = express.Router();
router.route('/users')

    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {

        var user = new User();      // create a new instance of the Bear model
        user.userName = req.body.userName;  // set the bears name (comes from the request)
        user.a = req.body.a;
        user.b = req.body.b;
        user.c = req.body.c;
        user.d = req.body.d;
        user.result = req.body.result;
        user.fullResult = req.body.fullResult;
        // save the bear and check for errors
        user.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'User created!' });
        });

    });

router.route('/all').get(function (req, res) {
  
  User.find({},function(err, users) {
    // var userMap = {};

    // users.forEach(function(user) {
    //   userMap[user._id] = user;
    // });

    // res.send(userMap);
    res.json(users);  
  });
})

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);


/////////////////////
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});





module.exports = app;