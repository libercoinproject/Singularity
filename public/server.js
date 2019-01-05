const startAPI = () => {
    const express = require('express');
    const cors = require('cors');
    const api = express();
    const bodyParser = require('body-parser');
    const rq = require('request-promise');

    api.use(bodyParser.urlencoded({ extended: true }));
    api.use(bodyParser.json());
    api.use(cors());

    const port = process.env.PORT || 8000;
    const router = express.Router();

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
        rq(options)
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
        rq(options)
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
        rq(options)
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
        rq(options)
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