<script>
  import { cart } from "./theCart";

  async function postIt() {
    let orderArr = $cart.map((obj) => {
      let rObj = {
        name: "",
        amount: "",
      };
      rObj.name = obj.name;
      rObj.amount = obj.amount;

      return rObj;
    });

    console.log(orderArr);

    const res = await fetch("https://foobar-databar.herokuapp.com/order/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderArr),
    });

    const json = await res.json();
    console.log(JSON.stringify(json));
  }
</script>

<div>
  <!-- <span>arrow</span> -->
  <p class="nav_tekst_type2">Edit Order</p>
</div>
<h2>Payment Details</h2>
<form>
  <div class="button_conatiner">
    <img class="line1" src="/src/lib/decorations/line3.png" alt="line3" />
    <button type="button">Pay in person</button>
    <button type="button">MobilePay</button>
    <img class="line2" src="/src/lib/decorations/line3.png" alt="line3" />
  </div>
  <p>Or</p>
  <div>
    <input
      type="text"
      minlength="2"
      name="cardHolder"
      id="cardHolder"
      placeholder="John Doe"
    />
    <label for="cardHolder">Card Holder</label>
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
          placeholder="000"
        />
        <label for="cardCvc">CVC</label>
      </div>
    </div>
    <input
      type="text"
      minlength="15"
      name="phoneNumber"
      id="phoneNumber"
      placeholder="+45 XX XX XX XX"
    />
    <label for="phoneNumber">Phone Number</label>
    <p class="recept">You receive your recept via a Text</p>
    <div class="terms_container">
      <input type="checkbox" id="terms" name="terms" />
      <p class="terms">I Agree to the Terms and Conditions.</p>
    </div>
  </div>
  <div class="total">
    <p>Total: $</p>
    <div class="line" />
  </div>
  <button type="button" on:click={postIt}> Complete Order</button>
</form>

<style>
  h2,
  p {
    color: #801b16;
    text-align: center;
  }

  .nav_tekst_type2 {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
  }

  .button_conatiner {
    display: grid;
    justify-content: center;
  }

  button[type="button"] {
    background: rgba(255, 0, 0, 0);
    color: #801b16;
    border: 1px solid #801b16;
    border-radius: 10rem;
    margin: 0.5rem;
    width: 15rem;
  }

  form {
    display: grid;
    justify-content: center;
  }

  .card_info {
    display: grid;
    grid-template-columns: 12rem 4rem 2.7rem;
  }

  input {
    border-color: #801b16;
    color: #801b16;
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
  #phoneNumber {
    width: 16.5rem;
  }

  label {
    color: #801b16;
  }

  input::placeholder {
    color: #801b16;
  }

  .recept {
    text-align: start;
    margin-top: 0;
  }

  .terms_container {
    display: flex;
    align-items: center;
  }

  .terms {
    font-size: 1rem;
  }

  .total {
    display: grid;
    justify-content: center;
    margin-top: 3rem;
  }

  .total p {
    margin-bottom: 0;
  }

  /* .line {
    border-bottom: 1px solid #801b16;
    width: 5rem;
  } */
  .line {
    /* border-bottom: 1px solid #801b16; */
    background-image: url("/src/lib/decorations/line2.png");
    background-size: cover;
    height: 0.4rem;
    width: 5rem;
    margin-top: 0;
  }

  .line1 {
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
    margin-bottom: -1.3rem;
  }
  .line2 {
    margin-left: auto;
    margin-right: auto;
    margin-top: -1.8rem;
  }
</style>
