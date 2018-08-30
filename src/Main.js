import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Addresses from './Addresses';
import Receive from './Receive';
import Send from './Send';
import Obfuscation from './Obfuscation';
import Transactions from './Transactions';
import Voting from "./Voting";
import logo from "./img/libercoin.png";

class Main extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
        return (
          <BrowserRouter>
            <div className="Main">
                <div className="pages">
                  <img src={logo} />
                  <Link to="/"><p>Dashboard</p></Link>
                  <Link to="/addresses"><p>My addresses</p></Link>
                  <Link to="/receive"><p>Receive</p></Link>
                  <Link to="/send"><p>Send</p></Link>
                  <Link to="/obfuscation"><p>Obfuscation</p></Link>
                  <Link to="/transactions"><p>Transactions</p></Link>
                  <Link to="/voting"><p>Voting</p></Link>
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