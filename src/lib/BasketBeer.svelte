<script>
  const CART = {
    KEYONE: "beerbasket",
    KEYTWO: "orderbasket",
    contents: [],
    completeOrder: [],
    init() {
      let _contents = localStorage.getItem(CART.KEYONE);
      let _orderContents = localStorage.getItem(CART.KEYTWO);
      if (_contents) {
        CART.contents = JSON.parse(_contents);
      }

      if (_orderContents) {
        CART.completeOrder = JSON.parse(_orderContents);
      }
      CART.sync();
    },

    sync() {
      let _cart = JSON.stringify(CART.contents);
      let _order = JSON.stringify(CART.completeOrder);
      localStorage.setItem(CART.KEYONE, _cart);
      localStorage.setItem(CART.KEYTWO, _order);
    },

    add(obj) {
      const index = CART.contents.findIndex(
        (element) => element.name == obj.name
      );
      const orderIndex = CART.completeOrder.findIndex(
        (element) => element.name == obj.name
      );
      if (index == -1) {
        console.log(obj);
        obj.amount = 1;
        console.log(CART.contents);
        CART.contents.push(obj);
        const order = {
          name: "",
          amount: "",
        };
        order.name = obj.name;
        order.amount = obj.amount;
        CART.completeOrder.push(order);
        console.log(CART.completeOrder);
      } else {
        CART.contents[index].amount += 1;
        CART.completeOrder[orderIndex].amount += 1;
      }

      console.log(CART.contents);
      this.sync();
      this.init();
    },

    minusOne(obj) {
      const productQty = CART.contents.find(
        (element) => element.name == obj.name
      ).amount;

      if (productQty > 1) {
        const indexObj = CART.contents.find(
          (element) => element.name == obj.name
        );
        const indexOrd = CART.completeOrder.find(
          (element) => element.name == obj.name
        );

        indexObj.amount--;
        indexOrd.amount--;
        console.log(indexObj);
        CART.update(indexObj);
      }
    },

    update(obj) {
      const index = CART.contents.findIndex(
        (element) => element.name == obj.name
      );
      const indexOrd = CART.completeOrder.find(
        (element) => element.name == obj.name
      );
      if (obj.amount === 0) {
        CART.contents.splice(index, 1);
        CART.completeOrder.splice(indexOrd, 1);
      } else {
        CART.contents[index].amount = obj.amount;
      }
      CART.sync();
    },
  };

  CART.init();

  let content = CART.contents;
  $: beers = content;
</script>

<!-- minusOne(obj) {
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

  let beers = CART.contents; -->
<!-- </script> -->

<p class="nav_tekst_type2">Add more Beer</p>
<h2>Order</h2>
<div class="scroll">
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
                  logo: beer.label,
                });
                CART.init();
              }}>+</span
            >
            <span class="amount">{beer.amount}</span>
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
<div class="total">
  <p>Total</p>
  <div class="line" />
  <p>$</p>
</div>

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

  .total {
    display: flex;
    justify-content: center;
    margin-top: 5rem;
  }

  .total > * {
    margin-bottom: 0;
  }

  .nav_tekst_type2 {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  @media only screen and (min-width: 600px) {
    .scroll {
      height: 40rem;
      overflow: scroll;
    }

    .nav_tekst_type2 {
      display: none;
    }
  }
</style>
