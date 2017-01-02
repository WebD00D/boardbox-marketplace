import React from 'react';

class Step2 extends React.Component {

  componentDidMount(){

    if ( localStorage.getItem('bbox_recipient') ){
      document.getElementById('txtRecipient').value = localStorage.getItem('bbox_recipient');
    }
    if ( localStorage.getItem('bbox_address1') ){
      document.getElementById('txtAddress1').value = localStorage.getItem('bbox_address1');
    }
    if ( localStorage.getItem('bbox_address2') ){
      document.getElementById('txtAddress2').value = localStorage.getItem('bbox_address2');
    }
    if ( localStorage.getItem('bbox_city') ){
      document.getElementById('txtCity').value = localStorage.getItem('bbox_city');
    }
    if ( localStorage.getItem('bbox_state') ){
      document.getElementById('txtStateProvince').value = localStorage.getItem('bbox_state');
    }
    if ( localStorage.getItem('bbox_zip') ){
      document.getElementById('txtZipPostal').value = localStorage.getItem('bbox_zip');
    }
    if ( localStorage.getItem('bbox_country') ){
      document.getElementById('txtCountry').value = localStorage.getItem('bbox_country');
    }

  }



  render(){
    return (
      <div className="steps__details">
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Recipient</div>
          <div className="steps__answer">
            <input id="txtRecipient" type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Address 1</div>
          <div className="steps__answer">
            <input id="txtAddress1" type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Address 2</div>
          <div className="steps__answer">
            <input id="txtAddress2" type="text" placeholder="Optional" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">City</div>
          <div className="steps__answer">
            <input id="txtCity" type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">State / Province</div>
          <div className="steps__answer">
            <input id="txtStateProvince" type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Zip / Postal</div>
          <div className="steps__answer">
            <input id="txtZipPostal" type="text" />
          </div>
        </div>
        <div className="steps__prompt-wrapper">
          <div className="steps__prompt">Country</div>
          <div className="steps__answer">
            <input id="txtCountry" type="text" />
          </div>
        </div>
      </div>
    )
  }
}
export default Step2;
