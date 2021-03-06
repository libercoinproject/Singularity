import React from 'react';
import { ApiService } from '../services/ApiService.js';

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.apiService = new ApiService();
    this.state = {
      balance: 0,
      pending: 0,
      lastTransactions: [],
    };
  };

  componentDidMount(){
    (async () => {
      // const data = await this.apiService.getWalletStat();
      this.setState({balance: '0.0000000', pending: '0.0000000'});
    })(); 
  };

  render() {
    return (
      <div className="dashboard">
        <div className="content">
          <h1 className="main-heading">Dashboard</h1>
          <div className="dashboard__price-flex-block">
            <div className="dashboard__balance-block">
              <p className="dashboard__balance-text">Total Balance</p>
              <p className="dashboard__balance">{this.state.balance} LBR</p>
              {this.state.pending > 0 && <p className="dashboard__balance-text">{this.state.pending} LBR pending</p>}
            </div>
            <div className="dashboard__price-exchange-column-block">
              <div className="dashboard__price-exhange-block">
                <p className="exchange__price">0 $</p>
                <span></span>
              </div>
              <div className="dashboard__price-exhange-block">
                <p className="exchange__price">0 €</p>
                <span></span>
              </div>
              <div className="dashboard__price-exhange-block">
                <p className="exchange__price">0 BTC</p>
                <span></span>
              </div>
            </div>
          </div>
          <h1 className="dashboard__heading">Last transactions</h1>
          {this.state.lastTransactions.length === 0 && <p>No any transactions yet.</p>}
          {/*<div className="dashboard__transaction-item">
            <div className="dashboard__trans-type-block">
              <p className="dashboard__trans-type">Send</p>
            </div>
            <p className="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
            <p className="dashboard__trans-amount">12.5 LBR</p>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Dashboard;
