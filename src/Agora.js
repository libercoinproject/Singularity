import React from "react";
import USFlag from "./img/us-flag.svg";

class Agora extends React.Component {
  constructor(props) {
    super(props);
    this.agoraSliderChange = this.agoraSliderChange.bind(this);
  }

  agoraSliderChange() {
    if (document.getElementById("agora__slider-block").className == "agora__slider-block agora__slider-not-active") {
      document.getElementById("agora__slider-block").className = "agora__slider-block agora__slider-active";
      document.getElementById("agora__delivery").style.display = "block";
    } else if (document.getElementById("agora__slider-block").className == "agora__slider-block agora__slider-active") {
      document.getElementById("agora__slider-block").className = "agora__slider-block agora__slider-not-active";
      document.getElementById("agora__delivery").style.display = "none";
    }
  }
  // document.getElementById("agora__slider")
  render() {
    return (
        <div className="content">
          <div className="agora">
            <h1 className="main-heading">Agora</h1>
            <div className="flex agora__search-params">
              <div>
                <h3 className="subheading agora__subheading">Product name</h3>
                <input type="text" className="text-input agora__input"/>
              </div>
              <div className="agora__price-block">
                <h3 className="subheading agora__subheading">Price</h3>
                <input type="text" className="text-input agora__input"/>
              </div>
              <div>
                <h3 className="subheading agora__subheading">Delivery</h3>
                <div className="agora__range-slider" id="agora__slider" onClick={this.agoraSliderChange}>
                  <div className="agora__slider-block agora__slider-not-active" id="agora__slider-block"></div>
                </div>
              </div>
              <div id="agora__delivery">
                <h3 className="subheading agora__subheading">Delivery to</h3>
                <div class="agora__delivery-select flex ali-c">
                  <img src={USFlag} class="agora__country-flag"/>
                  <p>United States</p>
                </div>
              </div>
            </div>
            <div class="agora__products">
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
              <div class="agora__market-items">
                <div class="agora__product-img"></div>
                <p class="agora__product-name">Product 1</p>
                <p class="agora__product-price">11 LBR</p>
                <div class="flex jc-a">
                  <div class="agora__product-tag-block flex jc-c ali-c">Vegan</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Organic</div>
                  <div class="agora__product-tag-block flex jc-c ali-c">Tomato</div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Agora;
