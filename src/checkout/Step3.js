import React from 'react';

class Step3 extends React.Component {

  componentDidMount(){

  }

  render(){

    return (
      <div className="review">
        <div className="review__preferences">
          <div>
            <div className="review__section-header">Product Preferences</div>
            <div className="review__item">
              Grey Nordic Beanie
              <span>{localStorage.getItem('bbox_size-needed')}</span>
            </div>
          </div>
          <div className="review__edit" onClick={() => this.props.handleClick(1)}>Edit</div>
        </div>
        <div className="review__shipping">
          <div>
            <div className="review__section-header">Shipping Info</div>
            <div className="review__item">{localStorage.getItem('bbox_recipient')}</div>
            <div className="review__item">{localStorage.getItem('bbox_address1')}</div>
            <div className="review__item">{localStorage.getItem('bbox_address2')}</div>
            <div className="review__item">{`${localStorage.getItem('bbox_city')} , ${localStorage.getItem('bbox_state')} ${localStorage.getItem('bbox_zip')}  `} </div>
            <div className="review__item">{localStorage.getItem('bbox_country')}</div>
          </div>
          <div className="review__edit" onClick={() => this.props.handleClick(2)}>Edit</div>
        </div>
        <div className="review__shipping">
          <div>
            <div className="review__section-header">Cost</div>
            <div className="review__item">
              <div>Subtotal: <b>$14.00</b></div>
            </div>
            <div className="review__item">
              <div>Shipping & Tax : <b>$5.00</b></div>
            </div>
            <div className="review__item">
              <div>Total: <b>$19.00</b></div>
            </div>
          </div>
        </div>
        <div className="review__shipping">
          <small>Click next to go to paypal. On successful payment,
          you'll be re-directed back to this site, and shown a confirmation of your order.</small>
        </div>
        <form action="/your-charge-code" method="POST" id="payment-form">
          <span className="payment-errors"></span>
          <div className="form-row">
            <label>
              <span>Card Number</span>
              <input type="text" size="20" data-stripe="number" />
            </label>
          </div>
          <div className="form-row">
            <label>
              <span>Expiration (MM/YY)</span>
              <input type="text" size="2" data-stripe="exp_month"/>
            </label>
            <span> / </span>
            <input type="text" size="2" data-stripe="exp_year"/>
          </div>
          <div className="form-row">
            <label>
              <span>CVC</span>
              <input type="text" size="4" data-stripe="cvc"/>
            </label>
          </div>
          <input type="submit" className="submit" value="Submit Payment"/>
        </form>
      </div>
    )
  }
}
export default Step3;
