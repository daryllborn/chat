const express = require('express')
const app = express();

const port = process.env.PORT || 3000;
const server = app.listen(port, function(){
    console.log(`Listening for requests on port ${port}`);
});

const path = require('path');
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));
