import React, { Component } from "react";
import { Loader } from 'semantic-ui-react';

class Spinner extends Component {
    constructor(){
      super();
      this.state = {
        percents: 0,  
      };
    };

    render(){
      return(
        <div className="loaderBlock">
          <Loader active>Loading core daemon {this.state.percents}%</Loader>
        </div>
      );
    };
};

export { Spinner };