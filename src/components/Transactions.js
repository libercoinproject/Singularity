import React from "react";

class Transactions extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="transactions">
            <h1 class="main-heading">Transactions</h1>
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
                <p class="dashboard__trans-type">Receive</p>
              </div>
              <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
              <p class="dashboard__trans-amount">22.12 LBR</p>
            </div>
            <div class="dashboard__transaction-item">
              <div class="dashboard__trans-type-block">
                <p class="dashboard__trans-type">Send</p>
              </div>
              <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
              <p class="dashboard__trans-amount">100.01 LBR</p>
            </div>
            <div class="dashboard__transaction-item">
              <div class="dashboard__trans-type-block">
                <p class="dashboard__trans-type">Send</p>
              </div>
              <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
              <p class="dashboard__trans-amount">2.4 LBR</p>
            </div>
            <div class="dashboard__transaction-item">
              <div class="dashboard__trans-type-block">
                <p class="dashboard__trans-type">Send</p>
              </div>
              <p class="dashboard__wallet-adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
              <p class="dashboard__trans-amount">45.05 LBR</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Transactions;
