const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();

app.use(express.json());
app.use(cors());



app.post("/event", async (req, res) => {
    //emit events to other services
    console.log('event recived');
    try {
        console.log('event recived');
        await axios.post('http://localhost:5000/event',req.body);
        res.json(true);
    } catch (error) {
            console.log(error.message);
            res.json();
    }

}) 







app.listen(3000, () => {
    console.log('Event Bus Running At Port 3000');
})