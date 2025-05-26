const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 7000;

app.get("/",(req, res)=>{
    try {
        res.status(200).send("Hello world");
    } catch (error) {
        res.send({error:error.message});
    }
});
app.listen(PORT, ()=>{
    console.log("server is running on PORT ", PORT);
})