import React from 'react';

class Step1 extends React.Component {
  render(){
    return (
      <div className="steps__details">
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">What size do you need?</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
      </div>
    )
  }
}
export default Step1;
