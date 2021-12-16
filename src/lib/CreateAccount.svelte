<!-- <img alt="logo" /> -->

<h1 class="logo">FooBar</h1>

<div class="create_account_container">
  <p class="bigger_font">
    Your phone number will be used to receive receipts and to log in. Make a
    strong password for your Account.
  </p>
  <form>
    <div>
      <label for="phoneNumber">Phone Number</label>
      <input
        type="number"
        minlength="8"
        maxlength="15"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+45 XX XX XX XX"
        required
        inputmode="numeric"
      />
    </div>
    <div>
      <label for="password">Password</label>
      <input
        type="password"
        minlength="8"
        id="password"
        name="password"
        placeholder="*****"
        required
      />
    </div>
    <p>Enter your card info once, and save time ordering</p>
    <div>
      <label for="cardHolder">Card Holder</label>
      <input
        type="text"
        minlength="2"
        name="cardHolder"
        id="cardHolder"
        placeholder="John Doe"
        required
      />
    </div>
    <div class="card_info">
      <div>
        <label for="cardNumber">Card Number</label>
        <input
          type="number"
          minlength="16"
          maxlength="20"
          name="cardNumber"
          id="cardNumber"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          required
          inputmode="numeric"
        />
      </div>
      <div>
        <label for="cardExp">Expires</label>
        <input
          type="tekst"
          minlength="5"
          maxlength="5"
          name="cardExp"
          id="cardExp"
          placeholder="mm/yy"
          required
          inputmode="decimal"
        />
      </div>
      <div>
        <label for="cardCvc">CVC</label>
        <input
          type="number"
          minlength="3"
          maxlength="3"
          name="cardCvc"
          id="cardCvc"
          placeholder="mm/yy"
          required
          inputmode="numeric"
        />
      </div>
    </div>

    <div class="terms_news_container">
      <div class="news">
        <input type="checkbox" id="newsletter" name="newsletter" />
        <label name="newsletter" for="newsletter"
          >I want messages with special offers</label
        >
      </div>
      <div class="terms">
        <input type="checkbox" id="terms_and_co" name="terms_and_co" />
        <label name="terms_and_co" for="terms_and_co"
          >I Agree to the Terms and Conditions.</label
        >
      </div>
    </div>
    <div class="button_container">
      <button type="button">Create Account</button>
      <div class="frame_creem_long" />
    </div>
  </form>
</div>
<slot />

<style>
  h1 {
    margin-left: auto;
    margin-right: auto;
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

  .frame_creem_long {
    width: 13.5rem;
  }
</style>
