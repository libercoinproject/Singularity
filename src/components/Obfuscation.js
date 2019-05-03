import React from "react";
import BnWlogo from "../img/libercoin_BnW.png";
//If you want to remove vertical alignments you should delete tags "flex jc-c fl-column"

class Obfuscation extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="obfuscation flex fl-column jc-c">
            <div class="flex ali-c">
              <h1 class="main-heading">Obfuscation</h1>
              <div class="obfuscation__question-block flex jc-c ali-c"><span>?</span></div>
            </div>
            <div class="send__flex-cards">
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
            <div class="adresses__circles-block flex jc-c">
              <div class="adresses__circle"></div>
              <div class="adresses__circle"></div>
              <div class="adresses__circle"></div>
            </div>
            <div class="flex obfuscation__inputs-flex">
              <div>
                <h2 class="obfuscation__label">Amount</h2>
                <div class="flex ali-c">
                  <input type="text" value="Amount" class="text-input obfuscation__input"/>
                  <p class="receive__currency-name-f-input">LBR</p>
                </div>
              </div>
              <div>
                <h2 class="obfuscation__label">Nominal value</h2>
                <input type="text" value="Amount" class="text-input obfuscation__input"/>
              </div>
            </div>
            <div class="flex">
              <div class="receive__btn flex ali-c jc-c">Mint</div>
              <div class="receive__btn flex ali-c jc-c">Spend</div>
            </div>
          </div>
        </div>

    );
  }
}

export default Obfuscation;
