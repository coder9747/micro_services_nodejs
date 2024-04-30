const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const comment = {

    
}


app.get("/get-comment",(req,res)=>res.json(comment));



app.post("/create-comment",(req,res)=>
{

})


app.use("/events",(req,res)=>
{
    const {type,payload:{id,content}} = req.body;
    if(type=='PostCreated')
    {
        comment[id] = [];
    }
    console.log(comment);
})











app.listen(20000, () => {
    console.log('Comment Service running at port 20000');
})











