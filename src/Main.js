import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import { AddressesPage } from './Addresses';
import Receive from './Receive';
import Send from './Send';
import Obfuscation from './Obfuscation';
import Transactions from './Transactions';
import Voting from "./Voting";
import LMessage from "./LMessage";
import Agora from "./Agora";
import Libernodes from "./Libernodes";
import Status from "./Netstatus";
import Settings from "./Settings";
import logo from "./img/libercoin_logo.png";
const styleLogo = {
  display: 'flex',
  alignItems: 'center',
}

class Main extends React.Component {
  render() {
        return (
          <BrowserRouter>
            <div className="Main">
                <div className="pages">
                  <div style={styleLogo}>
                    <img src={logo} className="main__logo" alt=""/>
                    <p className="main__logo-text">Libercoin</p>
                  </div>
                  <Link to="/"><p className="main__menu-list-item"><span></span>Dashboard</p></Link>
                  <Link to="/addresses"><p className="main__menu-list-item"><span></span>My addresses</p></Link>
                  <Link to="/receive"><p className="main__menu-list-item"><span></span>Receive</p></Link>
                  <Link to="/send"><p className="main__menu-list-item"><span></span>Send</p></Link>
                  {/*<Link to="/obfuscation"><p className="main__menu-list-item"><span></span>Obfuscation</p></Link>
                  <Link to="/transactions"><p className="main__menu-list-item"><span></span>Transactions</p></Link>
                  <Link to="/voting"><p className="main__menu-list-item"><span></span>Voting</p></Link>
                  <Link to="/lmessage"><p className="main__menu-list-item"><span></span>LMessage</p></Link>
                  <Link to="/agora"><p className="main__menu-list-item"><span></span>Agora</p></Link>
                  <Link to="/libernodes"><p className="main__menu-list-item"><span></span>Libernodes</p></Link>
                  <Link to="/status"><p className="main__menu-list-item"><span></span>Network Status</p></Link>
                  <Link to="/settings"><p className="main__menu-list-item"><span></span>Settings</p></Link>*/}
                </div>
                  <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/receive" component={Receive}/>
                    <Route path="/addresses" component={AddressesPage}/>
                    <Route path="/send" component={Send}/>
                    <Route path="/obfuscation" component={Obfuscation}/>
                    <Route path="/transactions" component={Transactions}/>
                    <Route path="/voting" component={Voting}/>
                    <Route path="/lmessage" component={LMessage}/>
                    <Route path="/agora" component={Agora}/>
                    <Route path="/libernodes" component={Libernodes}/>
                    <Route path="/status" component={Status}/>
                    <Route path="/settings" component={Settings}/>
                  </Switch>
            </div>
          </BrowserRouter>
        );
    }
}

export default Main;
