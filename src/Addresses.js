import React from 'react';
import BnWlogo from "./img/libercoin_BnW.png";

class Addresses extends React.Component {
  render() {
    return (
        <div class="content">
          <div class="adresses flex jc-c fl-column">
            <div class="flex ali-c">
              <h1 class="main-heading">Addresses</h1>
              <p class="adresses__sorting"><span>Sort by:</span> /function</p>
            </div>
            <div class="flex">
              <div class="adresses__card-flex-block">
                <div class="adresses__cards">
                  <p class="adresses__card-amount">123 LBR</p>
                  <p class="adresses__adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                  <p class="adresses__wallet-name">Wallet Name</p>
                  <img src={BnWlogo} alt="" class="adresses__back-logo"/>
                </div>
                <div class="adresses__cards">
                  <p class="adresses__card-amount">123 LBR</p>
                  <p class="adresses__adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                  <p class="adresses__wallet-name">Wallet Name</p>
                  <img src={BnWlogo} alt="" class="adresses__back-logo"/>
                </div>
                <div class="adresses__cards">
                  <p class="adresses__card-amount">123 LBR</p>
                  <p class="adresses__adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                  <p class="adresses__wallet-name">Wallet Name</p>
                  <img src={BnWlogo} alt="" class="adresses__back-logo"/>
                </div>
                <div class="adresses__cards">
                  <p class="adresses__card-amount">123 LBR</p>
                  <p class="adresses__adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M</p>
                  <p class="adresses__wallet-name">Wallet Name</p>
                  <img src={BnWlogo} alt="" class="adresses__back-logo"/>
                </div>
              </div>
              <div class="adresses__add-btn-flex-block">
                <div class="adresses__add-btn">+</div>
              </div>
            </div>
            <div class="adresses__circles-block flex jc-c">
              <div class="adresses__circle"></div>
              <div class="adresses__circle"></div>
              <div class="adresses__circle"></div>
            </div>
          </div>
        </div>
    );
  }
}

export default Addresses;
