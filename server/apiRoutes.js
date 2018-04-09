const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router();

var recursive = require("recursive-readdir");
 
// ignore files named "foo.cs" or files that end in ".html".
recursive("mock", ["!*.js"], function (err, files) {
  files.forEach(file => {
    let filePath = path.parse(file);
    console.log(path.join(filePath.dir, filePath.name))
  });
});

fs.readdirSync('./mock').forEach(function(route) {
  router.post(`/${route.slice(0,-3)}`, function(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let data = require(`../mock/${route}`)(req.body);
    res.end(JSON.stringify(data));
  });
});

module.exports = router;
