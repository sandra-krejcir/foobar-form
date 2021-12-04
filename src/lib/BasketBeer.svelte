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

  add(obj) {
    const index = CART.contents.findIndex((element) => element.name == obj.name);
    if (index == -1) {
      console.log(obj);
      obj.qty = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
    } else {
      CART.contents[index].qty += 1;
    }

    console.log(CART.contents);
    this.sync();
  },

  minusOne(obj) {
    const productQty = CART.contents.find((element) => element.name == obj.name).qty;

    if (productQty > 1) {
      const indexObj = CART.contents.find((element) => element.name == obj.name);
      indexObj.qty--;
      console.log(indexObj);
      CART.update(indexObj);
    }
  },

  update(obj) {
    const index = CART.contents.findIndex((element) => element.name == obj.name);
    if (obj.qty === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].qty = obj.qty;
    }
    CART.sync();
  },
};

CART.init();

let beers = CART.contents
</script>

<style>

</style>

    <h2>Order</h2>
    <div>
        {#each beers as beer}
        <div>
          <img alt="Beer pic">
          <div>
            <p>{beer.name}</p>
            <div>
              <span on:click= {() => {
                CART.add({
                  name: beer.name,
                  category: beer.category,
                  price: beer.price,
                  logo: beer.logo,
                });
              }}>+</span>
              <span>0</span>
              <span on:click= {() =>{CART.minusOne(beer)}}>-</span>
            </div>
            <p>Price:</p>
          </div>
        </div>
        {/each}
    </div>
    <p>Total..............</p>
    <slot></slot>

