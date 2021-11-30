<div class="payment">
    <div>
      <span>arrow</span>
      <p>Edit Order</p>
    </div>
    <h2>Payment Details</h2>
    <form>
      <button type="button">Pay in person</button>
      <button type="button">MobilePay</button>
      <p>or</p>
      <p></p>
      <input type="text" minlength="2" name="cardHolder" id="cardHolder" placeholder="John Doe">
      <label for="cardHolder">Card Holder</label>
      <div>
        <input type="text" minlength="20" maxlength="20" name="cardNumber" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX">
        <label for="cardNumber">Card Number</label>
        <input type="text" minlength="5" maxlength="5" name="cardExp" id="cardExp" placeholder="mm/yy">
        <label for="cardExp">Expires</label>
        <input type="text" minlength="3" maxlength="3" name="cardCvc" id="cardCvc" placeholder='mm/yy'>
        <label for="cardCvc">CVC</label>
      </div>
      <input type="text" minlength="15" name="phoneNumber" id="phoneNumber" placeholder="+45 XX XX XX XX">
      <label for="phoneNumber">Phone Number</label>
      <br>
      <input type="checkbox"  id="newsletter" name="newsletter"> I would like to recieve updates and newsletters.
      <br>
      <input type="checkbox"  id="terms" name="terms"> I Agree to the Terms and Conditions.
      <p>Total................</p>
      <button type="submit"> Complete Order</button>
    </form>
  </div>