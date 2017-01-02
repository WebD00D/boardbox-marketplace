import React from 'react';

import Steps from './checkout/Steps';



class Order extends React.Component {

  state = {
    dismissOpen: false
  }

  render(){
    return (
      <div className="order">
        <div className="order__header">
          <div className="dismiss-modal">
            <div id="mdlDismiss" onClick={() => this.handleExitMenu()} className="dismiss-modal__btn">
              &#10005;
            </div>
          </div>
          <div className="order__headline">Checkout</div>
        </div>
        <div id="order-form" className="order__form">
          <Steps />
        </div>
        <div id="overlay" className="checkout-overlay"></div>
      </div>
    )
  }


  handleExitMenu(){
    const menu = document.getElementById("mdlDismiss");
    const form = document.getElementById("order-form");
    const overlay = document.getElementById("overlay");

    if ( !this.state.dismissOpen ) {
      form.className += " order__form--hidden";
      overlay.style.opacity = "0.8";
      menu.className += " dismiss-modal__btn--open";
      overlay.className += " checkout-overlay--open";
      menu.innerHTML = "Leave checkout?";
      this.setState({ dismissOpen: true })
    } else {
      menu.className = "dismiss-modal__btn";
      menu.innerHTML = "&#10005;";
      this.setState({ dismissOpen: false })
      overlay.style.opacity = "0";
        form.className += "order__form";
      overlay.className = "checkout-overlay";

    }

  }

}

export default Order;
