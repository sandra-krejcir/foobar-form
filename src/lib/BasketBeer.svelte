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
      const index = CART.contents.findIndex(
        (element) => element.name == obj.name
      );
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
      const productQty = CART.contents.find(
        (element) => element.name == obj.name
      ).qty;

      if (productQty > 1) {
        const indexObj = CART.contents.find(
          (element) => element.name == obj.name
        );
        indexObj.qty--;
        console.log(indexObj);
        CART.update(indexObj);
      }
    },

    update(obj) {
      const index = CART.contents.findIndex(
        (element) => element.name == obj.name
      );
      if (obj.qty === 0) {
        CART.contents.splice(index, 1);
      } else {
        CART.contents[index].qty = obj.qty;
      }
      CART.sync();
    },
  };

  CART.init();

  let beers = CART.contents;
</script>

<h2>Order</h2>
<div>
  {#each beers as beer}
    <div class="item_container">
      <img src="/src/lib/beerImg/elhefe.png" alt="Beer pic" />
      <div>
        <p class="beer_name">{beer.name}</p>
        <div>
          <div class="add_remove_container">
            <span
              class="box"
              on:click={() => {
                CART.add({
                  name: beer.name,
                  category: beer.category,
                  price: beer.price,
                  logo: beer.logo,
                });
              }}>+</span
            >
            <span class="amount">0</span>
            <span
              class="box"
              on:click={() => {
                CART.minusOne(beer);
              }}>-</span
            >
          </div>
        </div>
        <div class="line_it_up">
          <p>Price:</p>
          <div class="line" />
          <p>$</p>
        </div>
      </div>
    </div>
  {/each}
</div>
<p>Total..............</p>
<slot />

<style>
  h2,
  p,
  span {
    color: #801b16;
  }

  .item_container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
  }

  img {
    width: 5rem;
    margin-right: 0.5rem;
  }

  .beer_name {
    text-align: center;
  }

  .add_remove_container {
    display: flex;
    justify-content: center;
  }

  .add_remove_container span {
    font-size: 1.5rem;
  }

  .amount {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .box {
    border: 1px solid #801b16;
    padding: 0.5rem;
    padding-top: 0;
    padding-bottom: 0.3rem;
  }

  .line_it_up {
    display: flex;
  }

  .line_it_up > * {
    margin-bottom: 0;
  }

  .line {
    border-bottom: 1px solid #801b16;
    width: 5rem;
  }
</style>
