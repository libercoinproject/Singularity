import React from 'react';

class Dashboard extends React.Component {
    render() {
        return (
                <div class="dashboard">
                  <div class="content">
                    <h1 class="main-heading">Dashboard</h1>
                    <div class="dashboard__price-flex-block">
                      <div class="dashboard__balance-block">
                        <p class="dashboard__balance-text">Total Balance</p>
                        <p class="dashboard__balance">123 LBR</p>
                        <p class="dashboard__balance-text">9.45 LBR pending</p>
                      </div>
                      <div class="dashboard__price-exchange-column-block">
                        <div class="dashboard__price-exhange-block">
                          <p class="exchange__price">1245$</p>
                          <span></span>
                        </div>
                        <div class="dashboard__price-exhange-block">
                          <p class="exchange__price">1091.32€</p>
                          <span></span>
                        </div>
                        <div class="dashboard__price-exhange-block">
                          <p class="exchange__price">0.12875 BTC</p>
                          <span></span>
                        </div>
                      </div>
                    </div>
                    <h1 class="dashboard__heading">Transactions</h1>
                    <div class="dashboard__transaction-item">
                      <div class="dashboard__trans-type-block">
                        <p class="dashboard__trans-type">Send</p>
                      </div>
                      <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                      <p class="dashboard__trans-amount">12.5 LBR</p>
                    </div>
                    <div class="dashboard__transaction-item">
                      <div class="dashboard__trans-type-block">
                        <p class="dashboard__trans-type">Receive</p>
                      </div>
                      <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                      <p class="dashboard__trans-amount">5.4 LBR</p>
                    </div>
                    <div class="dashboard__transaction-item">
                      <div class="dashboard__trans-type-block">
                        <p class="dashboard__trans-type">Send</p>
                      </div>
                      <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                      <p class="dashboard__trans-amount">206 LBR</p>
                    </div>
                    <div class="dashboard__transaction-item">
                      <div class="dashboard__trans-type-block">
                        <p class="dashboard__trans-type">Send</p>
                      </div>
                      <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                      <p class="dashboard__trans-amount">22.12 LBR</p>
                    </div>
                    <div class="dashboard__transaction-item">
                      <div class="dashboard__trans-type-block">
                        <p class="dashboard__trans-type">Receive</p>
                      </div>
                      <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                      <p class="dashboard__trans-amount">100.01 LBR</p>
                    </div>
                  </div>
                </div>
        );
    }
}

export default Dashboard;
