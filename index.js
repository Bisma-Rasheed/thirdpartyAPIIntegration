const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/',(req,res)=>{
    res.send({message: 'hello from server'});
})

app.listen(process.env.PORT, ()=>{
    console.log(`server is listening on port ${process.env.PORT}`);
});