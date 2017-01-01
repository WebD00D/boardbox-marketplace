import React, { Component } from 'react';

import Faqs from './Faqs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="nav">
            <div className="nav__wrapper">
              <div className="nav__logo"><img src="http://getboardbox.com/wp-content/uploads/2016/05/BBSMALL.png" alt="Boardbox Logo" /></div>
              <div className="nav__links">
                <div className="nav__links__link">Featured</div>
                <div className="nav__links__link">FAQs</div>
                <a href="http://www.getboardbox.com"><div className="nav__links__link nav__links__link--cta">Order a Boardbox</div></a>
              </div>
            </div>
          </div>
          <div className="hero">
            <div className="headline">
              <div className="headline__primary">Weekly deals for the <br /> board-sport enthusiast</div>
              <div className="headline__sub">Get the hookup on surf, skate, & snowboarding goods.</div>
            </div>
          </div>
        </div>
        <div className="featured-brand">
          <div className="featured-brand__tag">Featured Brand</div>
          <div className="featured-brand__brand"><img src="https://voltfuse.com/wp-content/uploads/2016/10/regtm-boxlogo.png" alt="Voltfuse Logo" /></div>
          <div className="featured-brand__about">
            Lorem ipsum dolor set amit consectetur ipsum spentis
            der wolkemmen aus mitte bin deti. Auf dem wroker ruchsack
            bin der olm hause. Vir dich sie aus mitten snowboarten
            dem auf de rectar. Vo wohnen sie es mitte den rich auch
            besuch. Der der wohan auf mit dem er sie est.
          </div>
          <div className="featured-brand__product">
            <div className="featured-brand__product__container">
              <div className="featured-brand__product__image"></div>
              <div className="featured-brand__product__info">
                <div className="featured-brand__pname">Grey Nordic Beanie</div>
                <div className="featured-brand__pdesc">
                  <div>A nordic styled beanie with a twist of modern style and function.</div>
                  <div><small>One size fits most</small></div>
                </div>
                <div className="featured-brand__summary">
                  <div className="featured-brand__summary--pricing">
                    $14.99 <span>$25.00</span>
                  </div>
                  <a href="#" className="featured-brand__btn">Get Yours</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="faqs">
          <Faqs />
        </div>


      </div>
    );
  }

  handleCollapse(event) {
    event.preventDefault();

  }



}
export default App;
