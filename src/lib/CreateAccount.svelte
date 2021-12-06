<!-- <img alt="logo" /> -->
<h1 class="logo">FooBar</h1>
<div class="create_account_container">
  <p class="bigger_font">
    Your phone number will be used to receive receipts and to log in. Make a
    strong password for your Account.
  </p>
  <form>
    <div>
      <input
        type="text"
        minlength="15"
        maxlength="15"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+45 XX XX XX XX"
      />
      <label for="phoneNumber">Phone Number</label>
    </div>
    <div>
      <input
        type="password"
        minlength="8"
        id="password"
        name="password"
        placeholder="*****"
      />
      <label for="password">Password</label>
    </div>
    <p>Enter your card info once, and save time ordering</p>
    <div>
      <input
        type="text"
        minlength="2"
        name="cardHolder"
        id="cardHolder"
        placeholder="John Doe"
      />
      <label for="cardHolder">Card Holder</label>
    </div>
    <div class="card_info">
      <div>
        <input
          type="text"
          minlength="20"
          maxlength="20"
          name="cardNumber"
          id="cardNumber"
          placeholder="XXXX-XXXX-XXXX-XXXX"
        />
        <label for="cardNumber">Card Number</label>
      </div>
      <div>
        <input
          type="text"
          minlength="5"
          maxlength="5"
          name="cardExp"
          id="cardExp"
          placeholder="mm/yy"
        />
        <label for="cardExp">Expires</label>
      </div>
      <div>
        <input
          type="text"
          minlength="3"
          maxlength="3"
          name="cardCvc"
          id="cardCvc"
          placeholder="mm/yy"
        />
        <label for="cardCvc">CVC</label>
      </div>
    </div>

    <div class="terms_news_container">
      <div class="news">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <p>I want messages with special offers</p>
      </div>
      <div class="terms">
        <input type="checkbox" id="terms" name="terms" />
        <p>I Agree to the Terms and Conditions.</p>
      </div>
    </div>
    <button type="submit">Create Account</button>
  </form>
</div>
<p class="back">Go Back</p>

<style>
  h1 {
    margin-left: 6rem;
    margin-right: 6rem;
  }

  .create_account_container {
    padding: 1rem;
  }

  .bigger_font {
    font-size: 1.3rem;
    margin-top: 0rem;
    margin-bottom: 2rem;
  }

  p {
    text-align: center;
  }

  form {
    display: grid;
    justify-content: center;
    justify-items: center;
  }

  .card_info {
    display: grid;
    grid-template-columns: 12rem 4rem 2.7rem;
  }

  #cardNumber {
    width: 11rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardExp {
    width: 3rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardCvc {
    width: 1.7rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardHolder,
  #phoneNumber,
  #password {
    width: 16.5rem;
  }

  .terms_news_container {
    margin: 2rem;
  }

  .terms,
  .news {
    display: flex;
    align-items: center;
  }

  .news {
    margin-bottom: -1.8rem;
  }

  button {
    margin-bottom: 0;
  }

  .back {
    margin-top: 0;
  }
</style>
