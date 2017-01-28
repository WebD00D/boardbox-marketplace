import React from 'react';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

class Steps extends React.Component {

  state = {
    step: 1
  }

  render(){

    let checkoutText = '';
    switch (this.state.step) {
      case 1:
        checkoutText = 'Choose Your Preferences';
        break;
      case 2:
        checkoutText = 'Choose a Shipping Destination';
        break;
      case 3:
        checkoutText = 'Review Order & Pay'
        break;
      default:

    }

    return (
      <div className="steps">
        <div className="current-step">{this.state.step}<span> / 3</span></div>
        <div className="current-step__title">{checkoutText}</div>
        <div className={`steps__icons steps--${this.state.step}`}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div style={{width:'100%', marginTop: 30}}>
          {this.getStepDetails()}
        </div>
        <div className="next-step">
          <button type="submit" onClick={() => this.goToNextStep()} className="next-step__btn">NEXT</button>
        </div>
      </div>
    )
  }



  getStepDetails(){
    if ( this.state.step === 1 ) {
        return <Step1 />
    } else if ( this.state.step === 2 ) {
        return <Step2 />
    } else {
        return <Step3 handleClick={(arg) => this.goToStep(arg)} />
    }
  }

  validate(input){
    if (input.value === "") {
      input.className += " input-error";
      return false;
    } else {
      input.className = " ";
      return true;
    }
  }

  goToStep(step){
    this.setState({ step: step })
  }

  goToNextStep(){
    switch (this.state.step) {
      case 1:
        // store size in local storage
        let size = document.getElementById('txtSizeNeeded');

        if ( this.validate(size) ){
          localStorage.setItem('bbox_size-needed', size.value);
          this.setState({ step: 2 })
        }

        break;
      case 2:

        let hasError = false;

        let recipient = document.getElementById('txtRecipient');
        let address1 = document.getElementById('txtAddress1');
        let address2 = document.getElementById('txtAddress2');
        let city = document.getElementById('txtCity');
        let state = document.getElementById('txtStateProvince');
        let zip = document.getElementById('txtZipPostal');
        let country = document.getElementById('txtCountry');

        if ( this.validate(recipient) ){
          localStorage.setItem('bbox_recipient', recipient.value);
        } else {
          hasError = true;
        }

        if ( this.validate(address1) ){
          localStorage.setItem('bbox_address1', address1.value);
        } else {
          hasError = true;
        }

        if ( this.validate(city) ){
          localStorage.setItem('bbox_city', city.value);
        } else {
          hasError = true;
        }

        if ( this.validate(state) ){
          localStorage.setItem('bbox_state', state.value);
        } else {
          hasError = true;
        }

        if ( this.validate(zip) ){
          localStorage.setItem('bbox_zip', zip.value);
        } else {
          hasError = true;
        }

        if ( this.validate(state) ){
          localStorage.setItem('bbox_country', country.value);
        } else {
          hasError = true;
        }

        if (!hasError){
          this.setState({ step: 3 })
        }

        break;
      default:
          // TODO: Do Stripe stuff.

          
    }
  }

}

export default Steps;
