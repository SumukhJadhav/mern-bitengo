const express = require('express');
const app = express();

const mongoDB = require('./db')
mongoDB();

const port = 5000;
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello world!!!!!")
})

app.use(express.json())
app.use("/api",require("./Routes/CreateUser"))



app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})