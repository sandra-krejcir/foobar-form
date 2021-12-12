<script>
  import { cart } from "./theCart";

  // const beerNameWithoutSpaces = beer.name.replaceAll(" ", "").toLowerCase();
  // const imageSource = `/src/lib/beerImg/${beerNameWithoutSpaces}.png`;
</script>

<p class="nav_tekst_type2">Add more Beer</p>
<h2>Order</h2>
<div class="scroll">
  {#each $cart as beer}
    <div class="item_container">
      <div class="img_container">
        <img src="/src/lib/beerImg/elhefe.png" alt="beer logo" />
        <!-- <img src={imageSource} alt="beer logo" /> -->
        <div class="frame_green" />
      </div>
      <div>
        <p class="beer_name">{beer.name}</p>
        <div>
          <div class="add_remove_container">
            <span
              class="box"
              on:click={() => {
                cart.add({
                  name: beer.name,
                  category: beer.category,
                  price: beer.price,
                  logo: beer.label,
                });
              }}>+</span
            >
            <span class="amount">{beer.amount}</span>
            <span
              class="box"
              on:click={() => {
                cart.minusOne(beer);
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

  .img_container {
    position: relative;
  }

  img {
    width: 5rem;
    margin-right: 0.5rem;
  }

  .frame_green {
    position: absolute;
    background-image: url("/src/lib/decorations/frame_green.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 5.4rem;
    height: 6.2rem;
    top: -0.2rem;
    left: -0.2rem;
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
    /* border-bottom: 1px solid #801b16; */
    background-image: url("/src/lib/decorations/line2.png");
    background-size: cover;
    height: 0.4rem;
    width: 5rem;
    margin-top: 2rem;
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

    .line {
      margin-top: 2.5rem;
    }
  }
</style>
