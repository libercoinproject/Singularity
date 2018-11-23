import React from "react";

class LMessage extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="lmessage">
            <h1 class="main-heading">LMessage</h1>
            <div class="lmessage__top-labels flex ali-c">
              <div class="lmessage__contacts-label-block flex ali-c">
                <h2 class="lmessage__small-heading">Contacts</h2>
                <div class="lmessage__add-contact-btn flex jc-c ali-c">+</div>
                <p class="lmessage__sorting-func"><span class="medium">Sort by:</span> /function</p>
              </div>
            </div>
            <div class="lmessage__contact-item flex ali-c">
              <div class="lmessage__contact-item-text-block">
                <p class="lmessage__contact-name">Anyname Last</p>
                <p class="lmessage__contact-adress">LM-BcbRq<span>coYSQUUmXFKsPJgVQPSiFA3Xash</span></p>
              </div>
              <div class="lmessage__contact-write-btn flex jc-c ali-c"><span></span></div>
            </div>
            <div class="lmessage__contact-item flex ali-c">
              <div class="lmessage__contact-item-text-block">
                <p class="lmessage__contact-name">Another Name</p>
                <p class="lmessage__contact-adress">LM-BcbRq<span>coYSQUUmXFKsPJgVQPSiFA3Xash</span></p>
              </div>
              <div class="lmessage__contact-write-btn flex jc-c ali-c"><span></span></div>
            </div>
            <h2 class="lmessage__small-heading">Messages</h2>
            <div class="lmessage__message-item flex ali-c">
              <div class="lmessage__message-item-text-block">
                <div class="flex ali-c lmessage__message-text-f-margin">
                  <p class="lmessage__message-title">Anyname Last</p>
                  <p class="lmessage__message-date">18:45</p>
                </div>
                <div class="lmessage__message-block lmessage__message-text-f-margin">
                  <p class="lmessage__message-preview">I will add there very interesting message. But I’m not sure)</p>
                </div>
              </div>
              <span class="lmessage__bookmark"></span>
            </div>
            <div class="lmessage__message-item flex ali-c">
              <div class="lmessage__message-item-text-block">
                <div class="flex ali-c lmessage__message-text-f-margin">
                  <p class="lmessage__message-title">Another One</p>
                  <p class="lmessage__message-date">16:48</p>
                </div>
                <div class="lmessage__message-block lmessage__message-text-f-margin">
                  <p class="lmessage__message-preview">I will add there very interesting message. But I’m not sure)</p>
                </div>
              </div>
              <span class="lmessage__bookmark"></span>
            </div>
            <div class="lmessage__message-item flex ali-c">
              <div class="lmessage__message-item-text-block">
                <div class="flex ali-c lmessage__message-text-f-margin">
                  <p class="lmessage__message-title">Good Person</p>
                  <p class="lmessage__message-date">18:02</p>
                </div>
                <div class="lmessage__message-block lmessage__message-text-f-margin">
                  <p class="lmessage__message-preview">I will add there very interesting message. But I’m not sure)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default LMessage;
