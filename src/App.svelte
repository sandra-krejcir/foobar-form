<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Payform from './lib/Payform.svelte'
  import ScrollBeer from './lib/ScrollBeer.svelte'
  import BasketBeer from './lib/BasketBeer.svelte'
  import Login from './lib/Loginphone.svelte'
  import CreateAccount from './lib/CreateAccount.svelte'
  let types = ['API', 'GODknows']
  let beers = ['Heiniken', 'Karlovacko', 'Pan']
</script>

<main>
  <section class="login hideLog">
    
    <div class="hideLog">
    <Login />
  </div>

<div class="hidden">
    <CreateAccount />
  </div>
  </section>
<section class="selection">
  <div>
    <span></span>
    <img src="{logo}" alt="The company's logo">
<span></span>
<ul class="firstFilter">
  <li>Full selection</li>
  <li>On today's tap</li>
</ul>
<ul class="secondFilter">
  <li>All</li>
  {#each types as type}
  <li>{type}</li>
  {/each}
</ul>
<h2 class="hidden">Your Order</h2>
  </div>

  <div class="scroll_container">
    <ul>
      <ScrollBeer />
    </ul>
  </div>
</section>

<section class="basket">
  <div class="order">
  <BasketBeer />
</div>

<div class="payment hidden">
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

  .scroll_container {
    max-width: max-content;
    overflow: scroll;
  }

  main {
    display: flex;
    flex-direction: row;
    padding: 1em;
    margin: 0 auto;
  }

  section {
    width: 50%;
  }

  form {
    display: flex;
    flex-direction: column;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
   
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
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
