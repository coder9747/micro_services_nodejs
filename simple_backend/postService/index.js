const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();



app.use(express.json());
app.use(cors());

const postObj = []


app.post("/create-post", (req, res) => {
    const id = crypto.randomBytes(4).toString("hex");
    postObj.push({
        id,
        content: req.body.postInfo,
        comments: [],
    })
    res.json("ok");
});


app.get("/get-post", (req, res) => res.json(postObj));












app.listen(10000, () => {
    console.log('Running portservice to 10000');
})