<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Payform from './lib/Payform.svelte'
  import ScrollBeer from './lib/ScrollBeer.svelte'
  import OrderBeers from './lib/OrderBeers.svelte'
  import BasketBeer from './lib/BasketBeer.svelte'
  import Login from './lib/Loginphone.svelte'
  import CreateAccount from './lib/CreateAccount.svelte'
  let types = ['API', 'GODknows']
  let beers = ['Heiniken', 'Karlovacko', 'Pan']
  let paymentClicked = false
  let creatingOn = false
  let asGuest = false
</script>

<main class:flex_main = "{!paymentClicked}" class:flex_reverse = "{paymentClicked}">
  <section class="login hideLog" class:hideRis = "{asGuest}" >
    
    <div class="hideLog" class:hideRis = "{creatingOn}">
    <Login>
      <p on:click="{() => creatingOn = !creatingOn}">Create account</p>
      <button type="button" on:click="{() => asGuest = !asGuest}">Order as Guest</button>
    </Login>
  </div>

<div class:hidden = "{!creatingOn}">
    <CreateAccount />
  </div>
  </section>

<section class="selection" class:hideRis = "{!asGuest}">
  <div>
    <span></span>
    <img src="{logo}" alt="The company's logo">
<span></span>
<ul class="firstFilter" class:hidden = "{paymentClicked}">
  <li>Full selection</li>
  <li>On today's tap</li>
</ul>
<ul class="secondFilter" class:hidden = "{paymentClicked}">
  <li>All</li>
  {#each types as type}
  <li>{type}</li>
  {/each}
</ul>
<h2 class:hidden = "{!paymentClicked}">Your Order</h2>
  </div>

  <div class:scroll_container = "{!paymentClicked}">
    <ul class:doFlex = "{!paymentClicked}" class:hidden = "{paymentClicked}" >
      <ScrollBeer />
    </ul>

    <ul class:makeGrid = "{paymentClicked}" class:hidden = "{!paymentClicked}">
      <OrderBeers />
    </ul>
  </div>
</section>

<section class="basket" class:hideRis = "{!asGuest}">
  <div class="order" class:hidden = "{paymentClicked}">
  <BasketBeer>
    <button on:click="{() => paymentClicked = !paymentClicked}">Proceed to checkout</button>
  </BasketBeer>
</div>

<div class="payment" class:hidden = "{!paymentClicked}">
  <Payform />
</div>
  
</section>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .hidden {
    display: none;
  }

  .hideLog {
    display: none;
  }

  section {
    max-width: 50%;
  }
  .scroll_container {
    max-width: max-content;
    overflow: scroll;
  }

  .doFlex {
    display: flex;
    flex-direction: row;
  }

.makeGrid {
display: grid;
grid-template-columns: repeat(7, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

  main {
    padding: 1em;
    margin: 0 auto;
  }

  .flex_main {
    display: flex;
    flex-direction: row;
  }

  .flex_reverse {
    display: flex;
    flex-direction: row;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  ul {
    list-style: none;
   
  }


  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    margin: 1rem auto;
    line-height: 1.35;
  }

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
      flex-direction: column-reverse
    }

    .hideLog {
    display: unset;
  }

  .hideRis {
    display: none;
  }

  }
</style>
