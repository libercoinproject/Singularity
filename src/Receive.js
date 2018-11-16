import React from "react";
import QR from "./img/QR_Code.png";
//If you want to remove vertical alignments you should delete tags "flex jc-c fl-column"
class Receive extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="receive flex jc-c fl-column">
            <h1 class="main-heading">Receive</h1>
            <div class="flex ali-c">
              <div class="receive__wallet-block flex fl-column">
                <p class="receive__wallet-name">Wallet name</p>
                <p class="receive__adress">ZVZrbLt2Mmu3rSzcGxHoFNKo3shyC6K81M <span></span></p>
              </div>
              <div class="receive__select-btn flex ali-c jc-c">Select another</div>
            </div>
            <h1 class="receive__heading">Details</h1>
            <div class="flex ali-c">
              <input type="text" value="Amount" class="text-input receive__input"/>
              <p class="receive__currency-name-f-input">LBR</p>
            </div>
            <div class="flex">
              <div class="receive__btn flex ali-c jc-c">Copy URI</div>
              <div class="receive__btn flex ali-c jc-c">Get QR Code</div>
            </div>
            <div class="flex ali-c">
              <img src={QR} alt="" class="receive__qr-code"/>
              <div>
                <p class="receive__qr-adress"><span>URI</span><br/>libercoin:ZVZrbLt2Mmu3rSzcGx<br/>HoFNKo3shyC6K81M?amount=45</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Receive;
