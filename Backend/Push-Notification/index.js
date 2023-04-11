const express = require('express')
const app = express();

app.use(express.json());

app.get('/hi', (req, res)=>{
    res.status(200).json({message:"Server running"})
})
app.use("/api", require("./routes/app.routes"));

app.listen(process.env.port || 4000, function() {
    console.log("Ready to Go!");
})