const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router();
const recursiveSync = require("recursive-readdir-sync");

recursiveSync("mock", ["!*.js"]).forEach(file => {
  let filePathObj = path.parse(file);
  let routePath = path.join('/', filePathObj.dir, filePathObj.name).slice(5);
  
  router.post(routePath, function(req, res, next) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    
    let data = require(path.join('../mock', routePath))(req.body);
    res.end(JSON.stringify(data));
  });
});

module.exports = router;
