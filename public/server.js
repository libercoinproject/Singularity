const startAPI = () => {
    const express = require('express');
    const cors = require('cors');
    const unzip = require('unzip');
    const api = express();
    const bodyParser = require('body-parser');
    const rq = require('request');
    const rqPromise = require('request-promise');
    const fs = require('fs');

    api.use(bodyParser.urlencoded({ extended: true }));
    api.use(bodyParser.json());
    api.use(cors());

    const port = process.env.PORT || 8000;
    const router = express.Router();
    
    let downloaded = 0;
    let percents = 0;
    router.get('/getPercents', function (request, response) {
        response.send({ downloaded: percents });
    });
    router.get('/checkData', function (request, response) {
        if (fs.existsSync("./core")){
            percents = 100;
            response.send({exists: true});
        } else {
            response.send({ exists: false });
            fs.mkdir('core', (err) => {
                if (!err){
                    downloaded = 0;
                    dataLength = 0;
                    const file = 'https://github.com/GistOnionWei/libercoin_dev/releases/download/0.1.0/linux.zip';
                    const out = fs.createWriteStream('./core/build.zip');
                    const req = rq({
                        method: 'GET',
                        uri: file
                    });
                    req.pipe(out);
                    req.on('response', function (data) {
                        const dataLength = data.headers['content-length'];
                        req.on('data', function (chunk) {
                            downloaded += chunk.length;
                            if (Math.floor(100.0 * downloaded / dataLength) === 100){
                                percents = 99;
                            } else {
                                percents = Math.floor(100.0 * downloaded / dataLength);
                            };
                        });
                    });
                    req.on('end', function () {
                        fs.createReadStream('./core/build.zip')
                            .pipe(unzip.Extract({ path: './core' }))
                            .on('close', () => {
                                percents = 100;
                            });
                        console.log('ended.')
                    });
                } else {
                    console.log('error')
                }
            });
        }
    });
    
    router.get('/walletinfo', function (request, response) {
        const options = {
            url: "http://localhost:6215",
            method: "post",
            headers:
            {
                "content-type": "text/plain"
            },
            auth: {
                user: 'user',
                pass: 'password'
            },
            body: JSON.stringify({ "jsonrpc": "1.0", "id": "backend", "method": "getwalletinfo", "params": [] })
        };
        rqPromise(options)
            .then((res) => {
                response.send(JSON.parse(res).result);
            })
            .catch((err) => {
                response.send('Error');
            })
    });

    router.get('/addresses', function (request, response) {
        const options = {
            url: "http://localhost:6215",
            method: "post",
            headers:
            {
                "content-type": "text/plain"
            },
            auth: {
                user: 'user',
                pass: 'password'
            },
            body: JSON.stringify({ "jsonrpc": "1.0", "id": "backend", "method": "getaddressesbyaccount", "params": ["4b6300b2eb190c645b3b477d4c45fa48cf5ca6a9"] })
        };
        rqPromise(options)
            .then((res) => {
                response.send(JSON.parse(res).result);
            })
            .catch((err) => {
                response.send('Error');
            })
    });

    router.get('/getnewaddress', function (request, response) {
        const options = {
            url: "http://localhost:6215",
            method: "post",
            headers:
            {
                "content-type": "text/plain"
            },
            auth: {
                user: 'user',
                pass: 'password'
            },
            body: JSON.stringify({ "jsonrpc": "1.0", "id": "backend", "method": "getnewaddress", "params": ["4b6300b2eb190c645b3b477d4c45fa48cf5ca6a9"] })
        };
        rqPromise(options)
            .then((res) => {
                response.send(JSON.parse(res).result);
            })
            .catch((err) => {
                response.send('Error');
            })
    });

    router.get('/generate', function (request, response) {
        const options = {
            url: "http://localhost:6215",
            method: "post",
            headers:
            {
                "content-type": "text/plain"
            },
            auth: {
                user: 'user',
                pass: 'password'
            },
            body: JSON.stringify({ "jsonrpc": "1.0", "id": "backend", "method": "generate", "params": [1] })
        };
        rqPromise(options)
            .then((res) => {
                response.send(JSON.parse(res).result);
            })
            .catch((err) => {
                console.log(err);
                response.send('Error');
            })
    });

    // all of routes will be prefixed with /api
    api.use('/api', router);

    api.listen(port);
    console.log('Server started, visit http://localhost:' + port + '/api');
};

module.exports.startAPI = startAPI;