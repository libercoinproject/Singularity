import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
                <div className="content">
                  <h2 className="contentTitle">Dashboard</h2>
                  <div className="blockRow">
                    <div className="blockBalance">
                      <p className="blockBalanceElement">Total balance</p>
                      <h2 className="blockBalanceElement">123 LBR</h2>
                      <p className="blockBalanceElement">50 LBR pending</p>
                    </div>
                    <div className="blockPrice">
                        <div className="blockPriceElement">
                          <p>10 $</p>
                        </div>
                        <div className="blockPriceElement">600 R</div>
                        <div className="blockPriceElement">0.1 BTC</div>
                  </div>
                  </div>
                  <h2 className="contentTitle">Last transactions</h2>
                  <div className="blockTransactionColumn">
                    <div className="blockTransaction">
                      <p className="blockTransactionSend">Send</p>
                      <p className="blockTransactionElement">Hash</p>
                      <p className="blockTransactionElement">Sum 1</p>
                    </div>
                    <div className="blockTransaction">
                      <p className="blockTransactionReceive">Receive</p>
                      <p className="blockTransactionElement">Hash</p>
                      <p className="blockTransactionElement">Sum 2</p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default Dashboard;