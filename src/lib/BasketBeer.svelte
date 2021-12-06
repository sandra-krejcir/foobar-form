<script>

  const CART = {
  KEY: "beerbasket",
  contents: [],
  completeOrder: [],
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
      obj.amount = 1;
      console.log(CART.contents);
      CART.contents.push(obj);
      const order = {
      "name": "",
      "amount": "",
  }
      order.name = obj.name;
      order.amount = obj.amount;
     CART.completeOrder.push(order);
      console.log(CART.completeOrder)
    } else {
      CART.contents[index].amount += 1;
      CART.completeOrder[index].amount += 1;
    }

    console.log(CART.contents);
    this.sync();
    this.init();
  },

  minusOne(obj) {
    const productQty = CART.contents.find((element) => element.name == obj.name).amount;

    if (productQty > 1) {
      const indexObj = CART.contents.find((element) => element.name == obj.name);
      indexObj.amount--;
      console.log(indexObj);
      CART.update(indexObj);
    }
  },

  update(obj) {
    const index = CART.contents.findIndex((element) => element.name == obj.name);
    if (obj.amount === 0) {
      CART.contents.splice(index, 1);
    } else {
      CART.contents[index].amount = obj.amount;
    }
    CART.sync();
  },
};

CART.init();

let content = CART.contents
$: beers = content


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
                  logo: beer.label,
                });
                CART.init();
              }}>+</span>
              <span>{beer.amount}</span>
              <span on:click= {() =>{CART.minusOne(beer)}}>-</span>
            </div>
            <p>Price:</p>
          </div>
        </div>
        {/each}
    </div>
    <p>Total..............</p>
    <slot></slot>

