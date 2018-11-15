import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Addresses from './Addresses';
import Receive from './Receive';
import Send from './Send';
import Obfuscation from './Obfuscation';
import Transactions from './Transactions';
import Voting from "./Voting";
import logo from "./img/libercoin_logo.png";
const styleLogo = {
  display: 'flex',
  alignItems: 'center',
}

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
        return (
          <BrowserRouter>
            <div className="Main">
                <div className="pages">
                  <div style={styleLogo}>
                    <img src={logo} className="main__logo"/>
                    <p className="main__logo-text">Libercoin</p>
                  </div>
                  <Link to="/"><p className="main__menu-list-item"><span></span>Dashboard</p></Link>
                  <Link to="/addresses"><p className="main__menu-list-item"><span></span>My addresses</p></Link>
                  <Link to="/receive"><p className="main__menu-list-item"><span></span>Receive</p></Link>
                  <Link to="/send"><p className="main__menu-list-item"><span></span>Send</p></Link>
                  <Link to="/obfuscation"><p className="main__menu-list-item"><span></span>Obfuscation</p></Link>
                  <Link to="/transactions"><p className="main__menu-list-item"><span></span>Transactions</p></Link>
                  <Link to="/voting"><p className="main__menu-list-item"><span></span>Voting</p></Link>
                </div>
                  <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/receive" component={Receive}/>
                    <Route path="/addresses" component={Addresses}/>
                    <Route path="/send" component={Send}/>
                    <Route path="/obfuscation" component={Obfuscation}/>
                    <Route path="/transactions" component={Transactions}/>
                    <Route path="/voting" component={Voting}/>
                  </Switch>
            </div>
          </BrowserRouter>
        );
    }
}

export default Main;
