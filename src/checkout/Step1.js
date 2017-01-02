import React from 'react';

class Step1 extends React.Component {

  componentDidMount(){
    if ( localStorage.getItem('bbox_size-needed') ){
      document.getElementById('txtSizeNeeded').value = localStorage.getItem('bbox_size-needed');
    }
  }

  render(){
    return (
      <div className="steps__details">
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">What size do you need?</div>
          <div className="steps__answer">
            <input id="txtSizeNeeded" type="text" />
          </div>
        </div>
      </div>
    )
  }
}
export default Step1;
