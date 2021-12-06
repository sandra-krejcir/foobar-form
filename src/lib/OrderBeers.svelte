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
  }
}

  CART.init();

let content = CART.contents
$: beers = content

    
</script>

{#each beers as beer}
      <li>
        <img src="" alt="beer logo">
        <p>{beer.name}</p>
        <p>Currently <span></span> on tap</p>
        <p>This beer is a type</p>
        <div>
          <span>{beer.amount}</span>
        </div>

      </li>
      {/each}

      <style>
         
      </style>