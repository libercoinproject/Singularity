import React, { Component } from 'react';
import BnWlogo from "../img/libercoin_BnW.png";
import { ApiService } from '../services/ApiService.js';
//If you want to remove vertical alignments you should delete tags "flex jc-c fl-column"

class Addresses extends Component {
  constructor(props){
    super(props);
    this.apiService = new ApiService();
    this.state = {
      addresses: [],
    };
  };

  componentDidMount(){
    (async () => {
      const data = await this.apiService.getWalletStat();
      const newAddresses = [];
      newAddresses.push(data.walletAddress.address);
      await this.setState(() => {
        return {
          addresses: newAddresses, 
        };
      });
    })(); 
  };

  render(){
    return (
      <div>
        {this.state.addresses.length === 0 && <p>No one address was generated.</p>}
        {this.state.addresses.map((addr) => 
          <div className="adresses__cards" key={addr}>
            <p className="adresses__card-amount">{addr.balance} LBR</p>
            <p className="adresses__adress">{addr}</p>
            <p className="adresses__wallet-name">{addr.name}</p>
            <img src={BnWlogo} alt="" className="adresses__back-logo" />
          </div>
        )}
      </div>
    )
  }
}

class AddressesPage extends Component {
  render() {
    return (
      <div className="adresses">
        <div className="content">
          <div className="adresses flex jc-c fl-column">
            <div className="flex ali-c">
              <h1 className="main-heading">Addresses</h1>
              {/*<p className="adresses__sorting"><span>Sort by:</span> /function</p>*/}
            </div>
            <div className="flex">
            <Addresses className="adresses__card-flex-block" ref="Addresses" />
              <div className="adresses__add-btn-flex-block">
                <div className="adresses__add-btn" onClick={this.onAdd}>+</div>
              </div>
            </div>
            <div className="adresses__circles-block flex jc-c">
              <div className="adresses__circle"></div>
              <div className="adresses__circle"></div>
              <div className="adresses__circle"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {AddressesPage, Addresses};
