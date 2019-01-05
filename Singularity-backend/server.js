const express = require('express');
const cors = require('cors');
const app = express();          
const bodyParser = require('body-parser');
const rq = require('request-promise');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

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
            console.log(JSON.parse(res).result);
            response.send(JSON.parse(res).result);
        })
        .catch((err) => {
            console.log(err.response.body);
            response.send('Error');
        })
});

// all of routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('Server started, visit http://localhost:' + port + '/api');