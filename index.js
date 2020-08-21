const express = require('express')

const app = express();

app.get('/',(req,res)=>{
    res.send("This is my response from helm application");
});

app.listen('3000',()=>{console.log('listening at port 3000')});