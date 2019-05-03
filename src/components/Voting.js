import React from "react";

class Voting extends React.Component {
  render() {
    return (
        <div className="content">
          <div class="voting">
            <h1 class="main-heading">Voting</h1>
            <div class="flex ali-c">
              <div class="voting__input-search-block">
                <input type="text" value="Search" class="text-input voting__search-input"/>
                <span class="voting__search-icon"></span>
              </div>
              <div class="receive__btn flex ali-c jc-c">Create voting</div>
            </div>
            <div class="voting__item flex ali-c">
              <p class="voting__name">Voting name 1</p>
              <div class="flex jc-c fl-column">
                <span class="voting__vote-preview-params"><span class="medium">185,964</span> votes</span>
                <span class="voting__vote-preview-params"><span class="medium">1,000,000</span> goal</span>
              </div>
              <div>
                <div class="voting__res-circle"></div>
              </div>
              <div class="flex jc-c ali-c fl-column">
                <span class="voting__preview-percent-res"><span class="green">67</span>/<span class="red">33</span></span>
                <div class="voting__btn-vote flex jc-c ali-c">Vote</div>
              </div>
            </div>
            <div class="voting__item flex ali-c">
              <p class="voting__name">Voting name 2</p>
              <div class="flex jc-c fl-column">
                <span class="voting__vote-preview-params"><span class="medium">185,964</span> votes</span>
                <span class="voting__vote-preview-params"><span class="medium">1,000,000</span> goal</span>
              </div>
              <div>
                <div class="voting__res-circle"></div>
              </div>
              <div class="flex jc-c ali-c fl-column">
                <span class="voting__preview-percent-res"><span class="green">67</span>/<span class="red">33</span></span>
                <div class="voting__btn-vote flex jc-c ali-c">Vote</div>
              </div>
            </div>
            <div class="voting__item flex ali-c">
              <p class="voting__name">Voting name 3</p>
              <div class="flex jc-c fl-column">
                <span class="voting__vote-preview-params"><span class="medium">185,964</span> votes</span>
                <span class="voting__vote-preview-params"><span class="medium">1,000,000</span> goal</span>
              </div>
              <div>
                <div class="voting__res-circle"></div>
              </div>
              <div class="flex jc-c ali-c fl-column">
                <span class="voting__preview-percent-res"><span class="green">67</span>/<span class="red">33</span></span>
                <div class="voting__btn-vote flex jc-c ali-c">Vote</div>
              </div>
            </div>
            <div class="voting__item flex ali-c">
              <p class="voting__name">Voting name 4</p>
              <div class="flex jc-c fl-column">
                <span class="voting__vote-preview-params"><span class="medium">185,964</span> votes</span>
                <span class="voting__vote-preview-params"><span class="medium">1,000,000</span> goal</span>
              </div>
              <div>
                <div class="voting__res-circle"></div>
              </div>
              <div class="flex jc-c ali-c fl-column">
                <span class="voting__preview-percent-res"><span class="green">67</span>/<span class="red">33</span></span>
                <div class="voting__btn-vote flex jc-c ali-c">Vote</div>
              </div>
            </div>
            <div class="voting__item flex ali-c">
              <p class="voting__name">Voting name 5</p>
              <div class="flex jc-c fl-column">
                <span class="voting__vote-preview-params"><span class="medium">185,964</span> votes</span>
                <span class="voting__vote-preview-params"><span class="medium">1,000,000</span> goal</span>
              </div>
              <div>
                <div class="voting__res-circle"></div>
              </div>
              <div class="flex jc-c ali-c fl-column">
                <span class="voting__preview-percent-res"><span class="green">67</span>/<span class="red">33</span></span>
                <div class="voting__btn-vote flex jc-c ali-c">Vote</div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Voting;
