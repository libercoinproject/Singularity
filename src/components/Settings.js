import React from "react";

class Settings extends React.Component {
  render() {
    return (
        <div class="content">
          <div class="settings flex ali-c">
            <div class="settings__left">
              <h1 class="main-heading">Settings</h1>
              <h3 class="settings__lable">Your IP</h3>
              <p class="settings-ip">192.228.420.74</p>
              <div class="settings__btn flex ali-c jc-c">Connect via tor</div>
              <h3 class="settings__lable">Theme color</h3>
              <div class="flex">
                <div class="setting__cube-selector" id="settings__black"></div>
                <div class="setting__cube-selector" id="settings__white"></div>
              </div>
              <h3 class="settings__lable">Connect to LiberNode</h3>
              <input type="text" class="text-input settings__input"/>
              <h3 class="settings__lable">Default sorting function</h3>
              <div class="settings__selector flex ali-c">
                <p>Sort by name</p>
                <span></span>
              </div>
            </div>
            <div class="settings__right">
              <h3 class="settings__lable">Contact support</h3>
              <div class="settings__btn flex ali-c jc-c">LMessage</div>
              <div class="settings__btn flex ali-c jc-c">E-Mail</div>
            </div>
          </div>
        </div>
    );
  }
}

export default Settings;
