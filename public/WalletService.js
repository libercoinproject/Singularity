const child_process = require('child_process');
const AnsiParser = require("ansi-parser");

class WalletService {
  constructor(pathToDaemon){
    this.daemon = child_process.spawn(pathToDaemon);
  };

  getAddress (){
    return new Promise((resolve) => {
      this.daemon.stdin.write('address\n');
      this.daemon.stdout.on('data', (data) => {
        let str = data.toString();
        if (str.includes('Your grinbox address')){
          this.daemon.stdout.removeAllListeners('data');
          resolve({address: AnsiParser.removeAnsi(str.slice(str.indexOf(': ')+2, str.indexOf('\n')))});
        };
      });
    });
  };
  
  getBalance (){
    this.daemon.stdin.write('info\n');
    return new Promise((resolve) => {
      const obj = {};
      this.daemon.stdout.on('data', (data) => {
        let str = data.toString();
        if (str.startsWith(' Total')){
          this.daemon.stdout.removeAllListeners('data');
          const arr = str.split('\n');
          obj.total = arr[0].slice(str.indexOf('|')+2, str.indexOf('\n')-1);
          obj.awaiting = arr[1].slice(str.indexOf('|')+2, str.indexOf('\n')-1);
          obj.locked = arr[2].slice(str.indexOf('|')+2, str.indexOf('\n')-1);
          resolve(obj);
        };
      });
    });
  };

  sendCoins (amount, address){
    this.daemon.stdin.write(`send ${amount} --to ${address}\n`);
    return new Promise((resolve) => {
      this.daemon.stdout.on('data', (data) => {
        let str = AnsiParser.removeAnsi(data.toString());
        this.daemon.stdout.removeAllListeners('data');
        if (str.includes('Not enough funds')){
          resolve({message: str.slice(1, str.indexOf('\n'))});
        };
      });
    });
  };
};

module.exports = {
  service: WalletService,
};