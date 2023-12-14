const fs = require("fs");
const value = fs.readFileSync("./data.json",'utf8', (err, data) => {
    if (!err) {
        return data
        
    }
    else {
        return err
    }    
});

const express = require("express");
const app = express()

app.get('/', function (req, res) {
    res.send(` ${JSON.parse(value)[0].name} ; ${JSON.parse(value)[0].id} ; ${JSON.parse(value)[0].age} /
     ${JSON.parse(value)[1].name} ;  ${JSON.parse(value)[1].id} ;  ${JSON.parse(value)[1].age} /
     ${JSON.parse(value)[2].name} ;  ${JSON.parse(value)[2].id} ;  ${JSON.parse(value)[2].age}`)
    "hh"
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});