<script>
  import logo from "./beerImg/svelte.png";
  import { onMount } from "svelte";
  import { cart } from "./theCart";

  export let beers = [];
  export let readMore = false;

  onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
  });

  let targetChild;
  function moreInfo(event) {
    readMore = !readMore;
    targetChild.classList.toggle("hidden");
  }
</script>

{#each beers as beer (beer.name)}
  <div class="beer">
    <li>
      <img src="/src/lib/beerImg/elhefe.png" alt="beer logo" />
      <h2>{beer.name}</h2>
      <div class="tap_container">
        <div>
          <p>Currently</p>
          <img
            class="line flip"
            src="/src/lib/decorations/line.png"
            alt="line"
          />
        </div>
        <img class="tap_icon" src="/src/lib/icons/tap.png" alt="tap icon" />
        <div>
          <p>On the Tap</p>
          <img class="line" src="/src/lib/decorations/line.png" alt="line" />
        </div>
      </div>
      <button on:click={moreInfo}>More information about {beer.name}</button>
      <div class="hidden" bind:this={targetChild}>
        <h4>AROMA</h4>
        <p>{beer.description.aroma}</p>
        <h4>FLAVOR</h4>
        <p>{beer.description.flavor}</p>
        <h4>IMPRESSION</h4>
        <p>{beer.description.overallImpression}</p>
      </div>
      <div class="curls">
        <img
          class="curl1 flip"
          src="/src/lib/decorations/curl2.png"
          alt="curl"
        />
        <p>This beer is a {beer.category}</p>
        <img class="curl1" src="/src/lib/decorations/curl2.png" alt="curl" />
      </div>
      <div class="curls">
        <img class="curl2" src="/src/lib/decorations/curl1.png" alt="curl" />
        <div class="procent_container">
          <p class="procent">{beer.alc}%</p>
          <p>Alchohol</p>
        </div>
        <img
          class="curl2 flip"
          src="/src/lib/decorations/curl1.png"
          alt="curl"
        />
      </div>
      <div>
        <span
          on:click={() => {
            cart.add({
              name: beer.name,
              category: beer.category,
              price: beer.price,
              logo: beer.label,
            });
          }}>+</span
        >
        <span class="amount">0</span>
        <span
          on:click={() => {
            cart.minusOne(beer);
          }}>-</span
        >
      </div>
      <p>$</p>
    </li>
  </div>
{/each}

<style>
  /*SANDRA*/
  .hidden {
    display: none;
  }

  li {
    text-align: center;
    margin-left: 5vw;
  }

  p {
    max-width: 120rem;
  }
  /*SANDRA*/

  /*EMILY*/
  .beer {
    /* scroll-snap-align: start; */
    margin-top: 2rem;
    padding-left: 0;
    padding-right: 0;
  }
  img {
    width: 10rem;
  }

  h2 {
    margin: 0;
    margin-top: 0.5rem;
  }

  .tap_container {
    display: flex;
    justify-content: center;
  }

  .tap_icon {
    width: 3rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  button {
    background: rgba(255, 0, 0, 0);
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-bottom: 0;
    text-transform: capitalize;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 0.5rem;
  }

  .procent {
    font-size: 3rem;
    font-family: "Playfair Display", serif;
  }

  .amount {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .flip {
    transform: scaleX(-1);
  }

  .line {
    width: 5rem;
  }

  .curls {
    display: flex;
    justify-content: center;
  }

  .curl1 {
    width: 4rem;
    margin: 0.5rem;
  }

  .curl2 {
    height: 3rem;
    width: 5rem;
  }

  .procent_container {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: -2rem;
  }

  @media only screen and (min-width: 600px) {
    .beer {
      margin-left: 3rem;
      margin-right: 3rem;
    }

    img {
      width: 20rem;
    }

    h2 {
      margin-bottom: 2rem;
    }

    .beer {
      padding-bottom: 1.45rem;
    }
  }

  /*EMILY*/
</style>
