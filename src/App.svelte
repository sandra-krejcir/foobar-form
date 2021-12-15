<script>
  import style from "/src/lib/global.css";
  import Payform from "./lib/ThePayform.svelte";
  import ScrollBeer from "./lib/ScrollBeer.svelte";
  import OrderBeers from "./lib/OrderBeers.svelte";
  import BasketBeer from "./lib/BasketBeer.svelte";
  import Login from "./lib/Loginphone.svelte";
  import CreateAccount from "./lib/CreateAccount.svelte";
  import ThankMessage from "./lib/ThankYou.svelte";
  import { cart } from "./lib/theCart";

  let paymentClicked = false;
  let creatingOn = false;
  let asGuest = false;

  function returnMenu() {
    paymentClicked = !paymentClicked;
    document.querySelector(".payment").classList.toggle("hidden");
    document.querySelector(".thankYou").classList.toggle("hidden");
    cart.reset();
  }
</script>

<svelte:head>
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main class:flex_main={!paymentClicked} class:flex_reverse={paymentClicked}>
  <section class="login hideLog" class:hideRis={asGuest}>
    <div class="hideLog" class:hideRis={creatingOn}>
      <Login>
        <p on:click={() => (creatingOn = !creatingOn)}>Create account</p>
        <div class="line" />
        <div class="button_container">
          <button
            class="guest_button"
            type="button"
            on:click={() => (asGuest = !asGuest)}>Order as Guest</button
          >
          <div class="frame_creem_long" />
        </div>
      </Login>
    </div>

    <div class="hideLog" class:hideRis={!creatingOn}>
      <CreateAccount>
        <p on:click={() => (creatingOn = !creatingOn)}>Go Back</p>
      </CreateAccount>
    </div>
  </section>

  <section
    class="selection"
    class:hideRis={!asGuest}
    class:hidden={paymentClicked}
  >
    <!-- <img src={logo} alt="The company's logo" /> -->

    <h1 class="logo">FooBar</h1>

    <ScrollBeer />
    <p class="nav_tekst_type1">Edit order</p>
  </section>

  <section
    class="theOrder"
    class:hideRis={!asGuest}
    class:hidden={!paymentClicked}
  >
    <h1 class="logo">FooBar</h1>

    <h2>Your Order</h2>
    <div>
      <ul class="makeGrid">
        <OrderBeers />
      </ul>
    </div>
  </section>

  <section class="basket" class:hideRis={!asGuest}>
    <div class="order" class:hidden={paymentClicked}>
      <BasketBeer>
        <div class="total">
          <p>Total: $</p>
          <div class="line" />
        </div>
        <div class="button_container">
          <button on:click={() => (paymentClicked = !paymentClicked)}
            >Proceed to checkout</button
          >
          <div class="frame" />
        </div>
      </BasketBeer>
    </div>

    <div class="payment" class:hidden={!paymentClicked}>
      <Payform>
        <p
          class="nav_tekst_type2"
          on:click={() => (paymentClicked = !paymentClicked)}
        >
          Edit order
        </p>
      </Payform>

      <!-- I think Emly put some code here that brings you back to start when the button is clicked. Now we need it to unhide the thank you div :) -->
    </div>

    <div class="thankYou hidden">
      <!-- I started with the code for the "unhiding", but I have no idea where the code for returning back to start is. -->
      <ThankMessage>
        <p on:click={returnMenu}>Return to Menu</p>
      </ThankMessage>
    </div>
  </section>
</main>

<style>
  /*SANDRA*/

  h1 {
    font-family: "Hello Paris Serif";
    src: url("fonts/HelloParisSerif.woff2") format("woff2"),
      url("fonts/HelloParisSerif.woff") format("woff");
    font-weight: normal;
    font-style: normal;

    font-size: 2rem;
  }

  .hidden {
    display: none;
  }

  .nav_tekst_type2 {
    text-align: center;
    margin-top: 4rem;
    margin-bottom: 1rem;
    color: #801b16;
  }

  .hideLog {
    display: none;
  }

  /* section {
    max-width: 50%;
  } */

  .makeGrid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  /* main {
    padding: 1em;
    margin: 0 auto;
  } */

  .flex_main {
    display: flex;
    flex-direction: row;
  }

  .flex_reverse {
    display: flex;
    flex-direction: row;
  }

  /* form {
    display: flex;
    flex-direction: column;
  } */
  ul {
    list-style: none;
  }

  /* h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  } */

  /* p {
    margin: 1rem auto;
    line-height: 1.35;
  } */

  @media (max-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }

    .flex_main {
      flex-direction: column;
    }

    .flex_reverse {
      flex-direction: column-reverse;
    }

    .hideLog {
      display: unset;
    }

    .hideRis {
      display: none;
    }
  }

  /*SANDRA*/

  /*EMILY*/

  /*LOGIN*/
  .login p {
    text-align: center;
  }

  .guest_button {
    margin-bottom: 15vh;
  }

  /*LOGIN*/

  /*SELECTION*/

  .selection {
    background: radial-gradient(
      circle,
      rgba(158, 30, 30, 1) 0%,
      rgba(41, 20, 0, 1) 85%,
      rgba(0, 0, 0, 1) 100%
    );
    /* min-height: 100%; */
  }

  .selection h1 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    margin-left: auto !important;
    margin-right: auto !important;
  }

  .nav_tekst_type1 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 3rem;
  }

  /*SELECTION*/

  /*BASKET*/

  .basket {
    background: #fef8e9;
    /* display: flex;
    justify-content: center; */
  }

  .basket button {
    margin-left: auto;
    margin-right: auto;
    display: flex;
  }

  .total {
    display: grid;
    justify-content: center;
    margin-top: 3rem;
  }

  .total p {
    margin-bottom: 0;
    text-align: center;
    color: #801b16;
  }

  .total .line {
    margin-top: 0;
    background-image: url("/src/lib/decorations/line2.png");
    height: 0.4rem;
    width: 5rem;
  }

  /*BASKET*/

  /*PAYMENT*/

  /* .payment {
    display: flex;
    justify-content: center;
  } */

  /*PAYMENT*/

  /*ORDER BEERS*/

  .makeGrid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 3rem;
    grid-column-gap: 0;
    padding: 1rem;
  }

  /*ORDER BEERS*/

  /*THANK YOU*/

  .thankYou {
    margin: 1rem;
  }

  .thankYou p {
    color: #801b16;
    text-align: center;
  }

  /*THANK YOU*/

  /*DECORATIONS*/

  .line {
    /* border-bottom: 1px solid #801b16; */
    background-image: url("/src/lib/decorations/line_creem.png");
    background-size: cover;
    height: 1rem;
    width: 11rem;
    margin: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 0;
  }

  /*DECORATIONS*/

  /*RESPONSIVE*/

  @media only screen and (min-width: 600px) {
    .selection {
      width: 72%;
      height: 100vh;
    }

    .selection h1 {
      margin-bottom: 2rem;
    }

    .logo {
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .nav_tekst_type1 {
      display: none;
    }

    .makeGrid {
      grid-template-columns: repeat(4, 1fr);
      /* grid-template-rows: repeat(2, 1fr); */
    }

    .basket {
      width: 28%;
      display: grid;
      align-items: center;
    }

    .theOrder {
      width: 72%;
      height: 100vh;
    }

    .payment {
      height: 100vh;
      background-color: #fef8e9;
    }

    /*ANIMATION END*/

    /* .theOrder {
      width: 55%;
    }

    .theOrder h1 {
      margin-left: 19rem !important;
      margin-right: 19rem !important;
    }

    .theOrder .frame_creem_logo {
      left: 18.7rem;
    }

    .payment {
      width: 60vh;
    } */

    /*ANIMATION END*/
  }

  /*RESPONSIVE*/

  /*EMILY*/
</style>
