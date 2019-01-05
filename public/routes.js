const getWalletInfo = (request, response) => {
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
            response.send('Error');
        })
};

module.exports.getWalletInfo = getWalletInfo;