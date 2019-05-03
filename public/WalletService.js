const child_process = require('child_process');
const AnsiParser = require("ansi-parser");
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

const myEmitter = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter.once('newListener', (event, listener) => {
  if (event === 'event') {
    // Insert a new listener in front
  };
});

Array.prototype.eventSplice = function(start, deleteCount, callback){
  this.splice(start, deleteCount);
  if (this.length === 0){
    callback(this);
  };
};

const handler = function(array){
  myEmitter.emit('event', array);
};

class WalletService {
  constructor(pathToDaemon){
    this.state = {
      commandQueue: [],
      wallet: {
        address: '',
        balance: '',
      },
    };

    this.daemon = child_process.spawn(pathToDaemon);
    this.daemon.stdout.on('data', (data) => {
      this._parseCommand(data);
    });
    this.daemon.stderr.on('data', (data) => {
      console.log('stderr: ' + data);
    });
    this.daemon.on('exit', (code) => {
      console.log('child process exited with code ' + code);
    });
    this.checkQueue();
  };

  _parseCommand (data){
    switch (this.state.commandQueue[0]){
      case 'getAddress':
        this._parseAddress(data);
      break;
      case 'getBalance':
        this._parseBalance(data);
      break;
      case 'getState':
        this._parseState();
      default:
      break;
    };
  };

  checkQueue(){
    if (this.state.commandQueue.length === 0){
      myEmitter.emit('event');
    };
  };

  getState(){
    return new Promise((resolve) => {
      myEmitter.on('event', () => resolve(this.state.wallet));
      this.checkQueue();
    });
  };

  getAddress (){
    this.state.commandQueue.push('getAddress');
    this.daemon.stdin.write('address\n');
  };
  
  getBalance (){
    this.state.commandQueue.push('getBalance');
    this.daemon.stdin.write('info\n');
  };

  _parseAddress (data){
    let str = data.toString();
    if (str.includes('Your grinbox address')){
      this.state.wallet.address = AnsiParser.removeAnsi(str.slice(str.indexOf(': ')+2, str.indexOf('\n')));
      this.state.commandQueue.eventSplice(0, 1, handler);
    };
  };
  
  _parseBalance (data){
    let str = data.toString();
    if (str.startsWith(' Total')){
      const total = str.slice(str.indexOf('|')+2, str.indexOf('\n')-1);
      this.state.wallet.balance = total;
      this.state.commandQueue.eventSplice(0, 1, handler);
    };
  };
};

module.exports = {
  service: WalletService,
};