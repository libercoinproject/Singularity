// const WalletService = require('./WalletService.js').service;
// const express = require('express');
// const cors = require('cors');
// const app = express();

// const daemon = new WalletService('../../wallet713/wallet713');

// app.use(cors());

// app.get('/wallet', async (req, res) => {
//   const balance = await daemon.getBalance();
//   const walletAddress = await daemon.getAddress();
//   const wallet = {
//     balance,
//     walletAddress,
//   };
//   res.send(wallet);
// });

// app.get('/send', async (req, res) => {
//   const daemonResponse = await daemon.sendCoins('1', 'gVwUTYVXHtESPVdbpdcADkkuBNasoraCex7Q3rGWKHpiWnedmYK9');
//   res.send(daemonResponse);
// });

// app.listen(5000, 'localhost');

// module.exports = {
//   service: app,
// };