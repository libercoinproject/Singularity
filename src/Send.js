import React from "react";
import { Addresses } from "./Addresses";

class Send extends React.Component {
  render() {
    return (
        <div className="content">
          <div className="send">
            <h1 className="main-heading">Send</h1>
          <Addresses className="send__flex-cards" />
            <div className="adresses__circles-block flex jc-c">
              <div className="adresses__circle"></div>
              <div className="adresses__circle"></div>
              <div className="adresses__circle"></div>
            </div>
            <div>
              <h2 className="send__subheading">Send to</h2>
              <input type="text" placeholder="Address" className="send__input text-input"/>
              <div className="flex ali-c">
                <input type="text" placeholder="Amount" className="send__input text-input"/>
                <p className="receive__currency-name-f-input">LBR</p>
              </div>
              <h2 className="send__subheading">Comments</h2>
              <textarea cols="50" rows="10" className="text-input send__textarea"></textarea>
              <div className="receive__btn flex ali-c jc-c">Confirm</div>
            </div>
          </div>
        </div>
    );
  }
}

export default Send;
