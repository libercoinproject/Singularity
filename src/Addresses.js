import React from 'react';
import axios from "axios";
import BnWlogo from "./img/libercoin_BnW.png";
//If you want to remove vertical alignments you should delete tags "flex jc-c fl-column"

class Addresses extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      addresses: [],
    }
  }
  getData = () => {
    const host = 'http://localhost:8000/api/addresses';
    axios.get(host)
      .then((response) => {
        console.log(response.data);
        this.setState(() => {
          return {
            addresses: response.data,
          };
        });
      })
      .catch((error) => {

      });
  }
  componentDidMount(){
    this.getData();
  }
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

class AddressesPage extends React.Component {
  onAdd = () => {
    const host = 'http://localhost:8000/api/getnewaddress';
    axios.get(host)
      .then((response) => {
        this.refs.Addresses.getData();
      })
      .catch((error) => {

      });
  }
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
