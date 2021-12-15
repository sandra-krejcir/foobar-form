<script>
  import { cart } from "./theCart";
 
  
  async function postIt() {
    document.querySelector(".payment").classList.toggle("hidden");
    document.querySelector(".thankYou").classList.toggle("hidden");

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

    await localStorage.clear();
  }
</script>

<div>
  <!-- <span>arrow</span> -->
  <slot />
</div>
<h2>Payment Details</h2>
<form id="theForm">
  <div class="button_conatiner">
    <img class="line1" src="./lib/decorations/line3.png" alt="line3" />
    <button class="pay_button" type="button">Pay in person</button>
    <button class="pay_button" type="button">MobilePay</button>
    <img class="line2" src="./lib/decorations/line3.png" alt="line3" />
  </div>
  <p>Or</p>
  <div>
    <label for="cardHolder">Card Holder</label>
    <input
      type="text"
      minlength="2"
      name="cardHolder"
      id="cardHolder"
      value=""
      placeholder="John Doe"
     
      required
    />

    <div class="card_info">
      <div>
        <label for="cardNumber">Card Number</label>
        <input
          type="text"
          minlength="20"
          maxlength="20"
          name="cardNumber"
          id="cardNumber"
          value=""
          placeholder="XXXX-XXXX-XXXX-XXXX"
        />
      </div>
      <div>
        <label for="cardExp">Expires</label>
        <input
          type="text"
          minlength="5"
          maxlength="5"
          name="cardExp"
          id="cardExp"
          value=""
          placeholder="mm/yy"
        />
      </div>
      <div>
        <label for="cardCvc">CVC</label>
        <input
          type="text"
          minlength="3"
          maxlength="3"
          name="cardCvc"
          id="cardCvc"
          value=""
          placeholder="000"
        />
      </div>
    </div>
    <label for="phoneNumber">Phone Number</label>
    <input
      type="text"
      minlength="15"
      name="phoneNumber"
      id="phoneNumber"
      value=""
      placeholder="+45 XX XX XX XX"
    />

    <p class="recept">You receive your recept via a Text</p>
    <div class="terms_container">
<<<<<<< HEAD
      <input type="checkbox" id="terms" name="terms" required value=""/>
      <p class="terms">I Agree to the Terms and Conditions.</p>
=======
      <input type="checkbox" id="terms" name="terms" />
      <label name="terms" for="terms"
        >I Agree to the Terms and Conditions.</label
      >
>>>>>>> finishing-sprint-on-design
    </div>
  </div>
  <div class="total">
    <p>Total: $</p>
    <div class="line" />
  </div>
  <div class="button_container">
    <button class="sendOrder" type="submit" on:submit={postIt}> Complete Order</button>
    <div class="frame" />
  </div>
</form>

<style>
  h2,
  p {
    color: #801b16;
    text-align: center;
  }

  .button_conatiner {
    display: grid;
    justify-content: center;
  }

  .pay_button {
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

  .total {
    display: grid;
    justify-content: center;
    margin-top: 1rem;
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

  .frame {
    background-size: cover;
    width: 13.1rem;
    height: 3rem;
    top: 1.8rem;
    left: 02rem;
    background-repeat: no-repeat;
  }

  .button_container {
    margin-left: 1rem;
  }

  [type="checkbox"] + label::before {
    outline: 2px solid #801b16;
  }
</style>
