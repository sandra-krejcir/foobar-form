<!-- <img alt="logo" /> -->

<h1 class="logo">FooBar</h1>

<div class="create_account_container">
  <p class="bigger_font">
    Your phone number will be used to receive receipts and to log in. Make a
    strong password for your Account.
  </p>
  <form>
    <div>
      <label for="phoneNumber_ca">Phone Number</label>
      <input
        type="tel"
        minlength="8"
        maxlength="15"
        id="phoneNumber_ca"
        name="phoneNumber_ca"
        pattern="(+)[0-9]{3}-[0-9]{3}-[0-9]{4}"
        title="Must contain at least 8 numberes and bo more than 15 numbers"
        placeholder="+45 XX XX XX XX"
        required
        inputmode="tel"
      />
    </div>
    <div>
      <label for="password_ca">Password</label>
      <input
        type="password_ca"
        minlength="8"
        id="password_ca"
        name="password_ca"
        title="Must contain at least 8 or more characters"
        placeholder="******"
        required
      />
    </div>
    <p>Enter your card info once, and save time ordering</p>
    <div>
      <label for="cardHolder_ca">Card Holder</label>
      <input
        type="text"
        minlength="2"
        name="cardHolder_ca"
        id="cardHolder_ca"
        pattern="^[A-Z][a-z]*(\s([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?((\s|\-)([A-Z]|\([A-Z])[a-z\'\(\)]*)?$"
        placeholder="John Doe"
        required
      />
    </div>
    <div class="card_info">
      <div>
        <label for="cardNumber_ca">Card Number</label>
        <input
          type="number"
          minlength="16"
          maxlength="19"
          name="cardNumber_ca"
          id="cardNumber_ca"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          required
          inputmode="numeric"
        />
      </div>
      <div>
        <label for="cardExp_ca">Expires</label>
        <input
          type="tekst"
          minlength="5"
          maxlength="5"
          name="cardExp_ca"
          id="cardExp_ca"
          placeholder="mm/yy"
          required
          inputmode="decimal"
          title="Must include '/' eg. 00/00"
        />
      </div>
      <div>
        <label for="cardCvc_ca">CVC</label>
        <input
          type="number"
          minlength="3"
          maxlength="3"
          name="cardCvc_ca"
          id="cardCvc_ca"
          placeholder="000"
          required
          inputmode="numeric"
        />
      </div>
    </div>

    <div class="terms_news_container">
      <div class="news">
        <input type="checkbox" id="newsletter_ca" name="newsletter_ca" />
        <label name="newsletter_ca" for="newsletter_ca"
          >I want messages with special offers</label
        >
      </div>
      <div class="terms">
        <input type="checkbox" id="terms_ca" name="terms_ca" required />
        <label
          name="terms_ca"
          for="terms_ca"
          title="You mesu accepts Terms and Conditions"
          >I Agree to the Terms and Conditions.</label
        >
      </div>
    </div>
    <div class="button_container">
      <button type="submit">Create Account</button>
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

  #cardNumber_ca {
    width: 11rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardExp_ca {
    width: 3rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardCvc_ca {
    width: 1.7rem;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  #cardHolder_ca,
  #phoneNumber_ca,
  #password_ca {
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
