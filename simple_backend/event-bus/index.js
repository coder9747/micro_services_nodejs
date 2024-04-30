const express = require("express");
const cors = require("cors");


const app = express();

app.use(express.json());
app.use(cors());






app.use("/events", async (req, res) => {
    try {
        await fetch("http://localhost:20000/events",
            {
                method: "POST",
                headers: { "Content-Type":"application/json" },
                body: JSON.stringify(req.body),
            });
    } catch (error) {
        console.log(error.message);
    }
    res.json(true);
})







app.listen(30000, () => {
    console.log('Event-bus Running At port 30000')
})