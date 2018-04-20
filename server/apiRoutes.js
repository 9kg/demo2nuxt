/**
 * mock下全路由匹配
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const router = express.Router();
const recursiveSync = require("recursive-readdir-sync");

recursiveSync("mock", ["!*.js"]).forEach(file => {
  file = file.split(path.sep).join('/');
  let filePathObj = path.parse(file);
  let routePath = path.posix.join('/', filePathObj.dir, filePathObj.name).slice(5);
  
  router.post(routePath, function(req, res, next) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    
    let data = require(path.posix.join('../mock', routePath))(req.body);
    setTimeout(function(){
      res.end(JSON.stringify(data));
    }, Math.floor(Math.random()*1500))
  });
});

module.exports = router;
