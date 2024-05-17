const express = require("express");
const randomBytes = require("crypto").randomBytes;
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const comments = {};

app.post("/event", (req, res) => {
    console.log('event recived');
    try {
        const { id, type } = req.body;
        console.log(type);
        if (type == 'PostCreated') {
            comments[id] = [];
        }
        else if (type == 'CommentCreated') {
            const { content } = req.body;
            const commentId = randomBytes(4).toString('hex');
            comments[id].push({
                commentId,
                content,
            });
        }
        console.log(comments);
        res.json(true);
    } catch (error) {
        console.log(error.message);
        res.json(false);
    }
})









app.listen(5000, () => {
    console.log('Comment Running At Port 5000');
})