// load app server using express framework
const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('short'));
app.use(express.static('./public'));

app.get("/", (req, res) => {
    console.log("Respond to root route");
    res.send("Hello from the other side with nodemon");
});

// User's route
app.get("/users", (req, res) => {
    let object = {
        firstName : "Atishay",
        facebookName : "Dil ka chor"
    }
    res.json(object);
});

// localhost:3003
app.listen(3003, () => {
    console.log("App is up and running 3003")
});