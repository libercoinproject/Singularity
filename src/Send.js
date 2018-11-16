import React from "react";
import BnWlogo from "./img/libercoin_BnW.png";

class Send extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="send">
            <h1 class="main-heading">Send</h1>
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
            <div>
              <h2 class="send__subheading">Send to</h2>
              <input type="text" value="Adress" class="send__input text-input"/>
              <div class="flex ali-c">
                <input type="text" value="Amount" class="send__input text-input"/>
                <p class="receive__currency-name-f-input">LBR</p>
              </div>
              <h2 class="send__subheading">Comments</h2>
              <textarea cols="50" rows="10" class="text-input send__textarea"></textarea>
              <div class="receive__btn flex ali-c jc-c">Confirm</div>
            </div>
          </div>
        </div>
    );
  }
}

export default Send;
