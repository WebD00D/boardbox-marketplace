import React from 'react';

class Step2 extends React.Component {
  render(){
    return (
      <div className="steps__details">
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Recipient</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Address 1</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Address 2</div>
          <div className="steps__answer">
            <input type="text" placeholder="Optional" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">City</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">State / Province</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Zip / Postal</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Country</div>
          <div className="steps__answer">
            <input type="text" />
          </div>
        </div>
      </div>
    )
  }
}
export default Step2;
