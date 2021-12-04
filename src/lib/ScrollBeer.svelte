<script>
    import logo from './beerImg/svelte.png'
    import { onMount } from 'svelte';

export let beers = []
export let readMore = false

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



onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
});

let targetChild
function moreInfo(event) {
  readMore = !readMore
  targetChild.classList.toggle("hidden")
}

</script>

{#each beers as beer (beer.name)}
      <li>
        <img src="{logo}" alt="beer logo">
        <p>{beer.name}</p>
        <p>Currently <span></span> on tap</p>
        <button
	on:click={moreInfo}>V More information about {beer.name} V</button>
        <div class="hidden" bind:this={targetChild}>
            <h4>AROMA</h4>
            <p>{beer.description.aroma}</p>
            <h4>FLAVOR</h4>
            <p>{beer.description.flavor}</p>
            <h4>IMPRESSION</h4>
            <p>{beer.description.overallImpression}</p> 
        </div>
        <p>This beer is a {beer.category}</p>
        <p>{beer.alc}%<br> alchohol</p>
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
        <p>Price: </p>

      </li>
      {/each}

      <style>
          .hidden {
              display:none
          }

      li {
         text-align: center;
          margin-left: 5vw;
      }

      p {
          max-width: 120rem ;
      }
      </style>