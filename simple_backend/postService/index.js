const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();



app.use(express.json());
app.use(cors());

const postObj = []


app.post("/create-post", async(req, res) => {
    const id = crypto.randomBytes(4).toString("hex");
    postObj.push({
        id,
        content: req.body.postInfo,
        comments: [],
    })

    try {
        await fetch("http://localhost:30000/events",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                type:"PostCreated",
                payload:{id,content:req.body.postInfo},
            })
        })
        
    } catch (error) {
        console.log(error.message);
    }

    res.json("ok");
});


app.get("/get-post", (req, res) => res.json(postObj));












app.listen(10000, () => {
    console.log('Post Service portservice to 10000');
})