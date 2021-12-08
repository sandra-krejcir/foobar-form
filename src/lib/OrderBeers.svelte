<script>
  const CART = {
    KEY: "beerbasket",
    contents: [],
    init() {
      let _contents = localStorage.getItem(CART.KEY);
      if (_contents) {
        CART.contents = JSON.parse(_contents);
      }
      CART.sync();
    },

    sync() {
      let _cart = JSON.stringify(CART.contents);
      localStorage.setItem(CART.KEY, _cart);
    },
  };

  CART.init();

  let content = CART.contents;
  $: beers = content;
</script>

{#each beers as beer}
  <li>
    <img src="/src/lib/beerImg/elhefe.png" alt="beer logo" />
    <p>{beer.name}</p>
    <div>
      <span>{beer.amount}</span>
    </div>
  </li>
{/each}

<style>
  li {
    display: grid;
    justify-content: center;
  }
  img {
    width: 8rem;
  }

  /* h4 {
    margin: 0.5rem;
    margin-top: 0;
    text-align: center;
  } */

  span {
    display: flex;
    justify-content: center;
    border: 1px solid #f0e5c6;
    margin-left: 2.8rem;
    margin-right: 2.8rem;
  }
  p {
    text-align: center;
    margin-top: 0;
  }

  @media only screen and (min-width: 600px) {
    img {
      width: 10rem;
    }

    p {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
</style>
