const express = require("express");
const randomBytes = require("crypto").randomBytes;
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors());


const post = {};

app.get("/", (req, res) => res.json(post));

app.post("/create-post", async(req, res) => {
    try {
        const { content } = req.body;
        const id = randomBytes(4).toString("hex");
        post[id] = content;

        await axios.post('http://localhost:3000/event', { id, content,type:"PostCreated" },
        );
        res.json(true);

    } catch (error) {
        console.log(error.message);
        res.json(false);
    }
    console.log(post);
});
app.post('/create-comment',async(req,res)=>
{
    console.log('event recived');
    try {
        const {content,id} = req.body;
        await axios.post("http://localhost:3000/event",{id,content,type:"CommentCreated"});
        res.json(true);
    } catch (error) {
        res.json(true);
    }
})




app.listen(4000, () => {
    console.log('changed made again');
    console.log('Post Service Running At Port 4000');
})