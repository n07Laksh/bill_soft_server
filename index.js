const express = require("express");

const app = express();

app.get("/home",(req,res)=>{
    return res.json({hell:"hello ji how are your"})
})

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Listening on port " + port));