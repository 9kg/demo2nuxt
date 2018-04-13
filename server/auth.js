var express = require('express');
var router = express.Router();
const querystring = require('querystring');
const http = require('http');

let redirect_url = `http://${ process.env.NODE_ENV === 'production' ? 'prehrssc.onessc.com' : '192.168.16.151:84'}/?wpe=login`;

router.use(function(req, res, next) {
    if(req.body.token){
        console.log('req.body.token', req.body.token)
        post(req.body.token, (data) => {
            console.log('data', data);
        })
        checkToken(req.body.token, flag => {
            if(flag){
                res.cookie('token', req.body.token, { maxAge: 20*365*24*60*60*1000,path: '/'});
                next();
            }else{
                res.redirect(redirect_url); 
            }
        });
        // 带token访问的是从其他系统跳过来的，检验token是否合法
        // res.cookie('token', req.body.token, { maxAge: 3000,path: '/'});
    }else if(req.cookies.token){
        console.log('req.cookies.token', typeof req.cookies.token)
        // 本地cookies带过来的token

        checkToken(req.body.token, flag => {
            if(flag){
                res.cookie('token', req.body.token, { maxAge: 20*365*24*60*60*1000,path: '/'});
                next();
            }else{
                res.clearCookie('token',{ path: '/' });
                res.redirect(redirect_url); 
            }
        });
    }else{
        console.log('redirect')
        // res.redirect(redirect_url);  

        next();
    }
});


// var opt = {
//     host: parseUrl.host
// };
// opt.method = 'POST';
// opt.path = parseUrl.pathname;
// opt.headers = {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': queryStr.length
// };
function checkToken(token, fn){
    post(token, (data) => {
        fn(data.msgCode !== 'TOKEN_INVALIDATE' && data.success);
    })
}

function post(token, fn) {
    var queryStr = JSON.stringify({
        data: {},
        token: token
    });

    var opt = {
        host: '192.168.16.151',
        port: '8081',
        method: 'POST',
        path: '/hrssc-platform-portal/api/wf/myWorkCount',
        headers: {
            'Content-Type': 'text/plain',
            'Content-Length': queryStr.length
        }
    };

    var req = http.request(opt, function(resp) {
        resp.setEncoding('utf8');
        if (resp.statusCode === 200) {
            var _data = [];
            resp.on('data', (chunk) => {
                _data.push(chunk);
            });
            resp.on('end', () => {
                try {
                    var dataObj = JSON.parse(_data.join(''));
                } catch (e) {
                    log.error('JSON解析失败');
                    fn({ status: -1, msg: "JSON解析失败", 'error': _data });
                    return;
                }
                fn(dataObj);
            })
        } else {
            fn({ 'error': resp.statusCode });
        }
    });
    req.on('error', function(e) {
        fn({ 'error': e })
    });
    console.log('queryStr', queryStr)
    req.write(queryStr + "\n");
    req.end();
}

module.exports = router;