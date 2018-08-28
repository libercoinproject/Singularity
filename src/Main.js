import React, { Component } from 'react';
import Dashboard from './Dashboard';
import Addresses from './Addresses';
import Receive from './Receive';
import Send from './Send';
import Obfuscation from './Obfuscation';
import Transactions from './Transactions';
import Voting from "./Voting";

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
                    <ul type="none">
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Dashboard')}}>Dashboard</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Addresses')}}>My addresses</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Receive')}}>Receive</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Send')}}>Send</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Obfuscation')}}>Obfuscation</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Transactions')}}>Transactions</button>
                        </li>
                        <li>
                          <button type="button" onClick={() => {this.renderContent('Voting')}}>Voting</button>
                        </li>
                    </ul>
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