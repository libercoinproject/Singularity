import React from "react";
// const Chart = require("chart.js");

class Status extends React.Component {
  // componentDidMount() {
  //   var ctx = document.getElementById("myChart");
  //   var ctx2 = document.getElementById("myChart2");
  //   var myChart = new Chart(ctx, {
  //     type: 'line',
  //   data: {
  //       labels: [1,2,3,4,5,6],
  //       datasets: [{
  //           label: 'Net Hashrate',
  //           data: [2, 4, 6, 9, 8, 12.6],
  //           backgroundColor: '#00c853',
  //           fill: false,
  //           borderColor: '#00c853'
  //       }]
  //   },
  //   options: {
  //       responsive: false,
  //   }
  //   })
  //   var myChart2 = new Chart(ctx2, {
  //     type: 'line',
  //   data: {
  //       labels: [1,2,3,4,5,6,7,8,9,10,11,12],
  //       datasets: [{
  //           label: 'Connections',
  //           data: [45,36,30,24,23,27,50,72,90,188,195,201],
  //           backgroundColor: '#00c853',
  //           fill: false,
  //           borderColor: '#00c853'
  //       }]
  //   },
  //   options: {
  //       responsive: false,
  //   }
  //   })
  // }

  render() {
    return (
        <div class="content">
          <div class="status flex fl-column jc-c">
            <div class="flex ali-c">
            <div class="status__flex1">
              <h1 class="main-heading">Network Status</h1>
              <p class="status__subheading">Block height</p>
              <p class="status__data">186</p>
              <p class="status__subheading">PoW difficulty</p>
              <p class="status__data">1</p>
              <p class="status__subheading">Net Hashrate</p>
              <p class="status__data">12.6</p>
              <p class="status__subheading">Total Volume</p>
              <p class="status__data">2683 <span>LBR</span></p>
              <p class="status__subheading">Connections</p>
              <p class="status__data">201</p>
            </div>
            <div class="status__flex2 flex">
              <canvas id="myChart" width="300" height="300"></canvas>
              <canvas id="myChart2" width="300" height="300"></canvas>
            </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Status;
