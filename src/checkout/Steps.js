import React from 'react';

import Step1 from './Step1';
import Step2 from './Step2';


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
        checkoutText = 'Review your Order & Pay'
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
        return <div>Hello from Step 3</div>
    }
  }

  goToNextStep(){
    switch (this.state.step) {
      case 1:
        this.setState({ step: 2 })
        break;
      case 2:
          this.setState({ step: 3 })
          break;
      default:

    }
  }

}

export default Steps;
