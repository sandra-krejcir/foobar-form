<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Payform from './lib/Payform.svelte'
  let types = ['API', 'GODknows']
  let beers = ['Heiniken', 'Karlovacko', 'Pan']
</script>

<main>
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
<h2>Your Order</h2>
  </div>

  <div class="scroll_container">
    <ul>
      {#each beers as beer}
      <li>
        <img src="{logo}" alt="Thecompany logo instead of beer logo">
        <p>{beer}</p>
        <p>Currently <span></span> on tap</p>
        <button>V More information about {beer} V</button>
        <p>The more information about {beer}</p>
        <p>This beer is a type</p>
        <p>14% <br> alchohol</p>
        <div>
          <span>+</span>
          <span>0</span>
          <span>-</span>
        </div>
        <p>Price: </p>

      </li>
      {/each}
    </ul>
  </div>
</section>

<section class="basket">
  <div class="order">
    <h2>Order</h2>
    <div>
      {#each beers as beer}
      <div>
        <img>
        <div>
          <p>{beer}</p>
          <div>
            <span>+</span>
            <span>0</span>
            <span>-</span>
          </div>
          <p>Price:</p>
        </div>
      </div>
      {/each}
    </div>
    <p>Total..............</p>
    <button>Proceed to checkout</button>
  </div>

  <Payform />
</section>

  <Counter />
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
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
