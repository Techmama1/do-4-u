// Step 2a   STRIPE

import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';
import "./form.css";


class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="checkout">
        <p>Would you like to complete the purchase?</p>
        <CardElement />
        <button onClick={this.submit}>Send</button>
      </div>
    );
  }
}

  

//STRIPE  Step 3a.

 async submit (ev) {
    let {token} = await this.props.stripe.createToken({name: "Name"});
     let response = await fetch("/charge", {
       method: "POST",
       headers: {"Content-Type": "text/plain"},
       body: token.id
     })
  
     if (response.ok) console.log("Purchase Complete!")
   };



//STRIPE step 3 b

   constructor(props) {
     super(props);
     this.state = {complete: false};
     this.submit = this.submit.bind(this);
   }


 async submit(ev) {

     if (response.ok) this.setState({complete: true});

   }
  
   render() {

     if (this.state.complete) return <h1>Purchase Complete</h1>;
  
     return (
       <div className="checkout">
         <p>Would you like to complete the purchase?</p>
         <CardElement />
         <button onClick={this.submit}>Send</button>
       </div>
     );
   }


 export default injectStripe(CheckoutForm);
