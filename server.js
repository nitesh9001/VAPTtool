const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router =require('./routes/api/users');
const path = require("path");
const socket = require('socket.io');
const passport =require('passport');
require('dotenv').config()

const app = express();
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

const db = require("./config/key").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
// mongoose.connect('mongodb://localhost/usernew');
// mongoose.Promise=global.Promise;

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/users", router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3001; 
server = app.listen(port, function(){
    console.log('server is running on port 3001')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })
});

