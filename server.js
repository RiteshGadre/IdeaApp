const express = require('express');
const serverConfig = require('./configs/server.config')

const app= express();

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server started on port number ${serverConfig.PORT}`);
})