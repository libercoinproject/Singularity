import React, { Component } from "react";
import QR from "../img/QR_Code.png";
//If you want to remove vertical alignments you should delete tags "flex jc-c fl-column"

class Receive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addresses: [],
    };
  };

  render() {
    return (
        <div className="content">
          <div className="receive flex jc-c fl-column">
            <h1 className="main-heading">Receive</h1>
            {this.state.addresses.length === 0 && <p>No one address was generated.</p>}
            {this.state.addresses.length > 0 && <div>
              <div className="flex ali-c">
                <div className="receive__wallet-block flex fl-column">
                  <p className="receive__wallet-name">Wallet name</p>
                  <p className="receive__adress">{this.state.addresses[0]}<span></span></p>
                </div>
                <div className="receive__select-btn flex ali-c jc-c">Select another</div>
              </div>
              <h1 className="receive__heading">Details</h1>
              <div className="flex ali-c">
                <input type="text" placeholder="Amount" className="text-input receive__input"/>
                <p className="receive__currency-name-f-input">LBR</p>
              </div>
              <div className="flex">
                <div className="receive__btn flex ali-c jc-c">Copy URI</div>
                <div className="receive__btn flex ali-c jc-c">Get QR Code</div>
              </div>
              <div className="flex ali-c">
                <img src={QR} alt="" className="receive__qr-code"/>
                <div>
                  <p className="receive__qr-adress"><span>URI</span><br/>libercoin:ZVZrbLt2Mmu3rSzcGx<br/>HoFNKo3shyC6K81M?amount=45</p>
                </div>
              </div>
            </div>}
          </div>
        </div>
    );
  }
}

export default Receive;
