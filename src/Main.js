import React from 'react';
import Dashboard from './Dashboard';
import Addresses from './Addresses';
import Receive from './Receive';
import Send from './Send';
import Obfuscation from './Obfuscation';
import Transactions from './Transactions';
import Voting from "./Voting";
import logo from "./Libercoin.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        Dashboard: true,
        Addresses: false,
        Receive: false,
        Send: false,
        Obfuscation: false,
        Transactions: false,
        Voting: false
    };
  }
  renderContent = (page) => {
    if (this.state[page] !== true){
      let tempState = this.state;
      for(let i in tempState){
        tempState[i] = false
      }
      tempState[page] = true;
      this.setState(() => {
        return {tempState};
      });
    }
  };
  render() {
        return (
            <div className="Main">
                <div className="pages">
                  <img src={logo} />
                  <p onClick={() => {this.renderContent('Dashboard')}}>Dashboard</p>
                  <p onClick={() => {this.renderContent('Addresses')}}>My addresses</p>
                  <p onClick={() => {this.renderContent('Receive')}}>Receive</p>
                  <p onClick={() => {this.renderContent('Send')}}>Send</p>
                  <p onClick={() => {this.renderContent('Obfuscation')}}>Obfuscation</p>
                  <p onClick={() => {this.renderContent('Transactions')}}>Transactions</p>
                  <p onClick={() => {this.renderContent('Voting')}}>Voting</p>
                </div>
                {this.state.Dashboard && <Dashboard/>}
                {this.state.Addresses && <Addresses/>}
                {this.state.Receive && <Receive/>}
                {this.state.Send && <Send/>}
                {this.state.Obfuscation && <Obfuscation/>}
                {this.state.Transactions && <Transactions/>}
                {this.state.Voting && <Voting/>}
            </div>
        );
    }
}

export default Main;