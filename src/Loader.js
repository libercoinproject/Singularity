import React, { Component } from "react";
import axios from "axios";

class Loader extends Component {
    constructor(){
        super();
        this.timeouts = [];
        this.state = {
          percents: 0,  
        };
    }
    getData = () => {
        const host = 'http://localhost:8000/api/getPercents';
        axios.get(host)
            .then((res) => {
                this.setState({ percents: res.data.downloaded });
                if (res.data.downloaded === 100){
                    this.stop();
                    this.props.setToLoaded();
                };
            })
            .catch((err) => (console.log('error'))); 
    }
    stop = () => {
        this.timeouts.forEach(timeout => {
            clearInterval(timeout);
        });
    }
    componentDidMount(){
        this.timeouts.push(setInterval(this.getData, 1000));
    }
    render(){
        return(
            <div className="loaderBlock">
                <p>Loading core daemon</p>
                <p>{this.state.percents} %</p>
            </div>
        );
    }
}

export { Loader };