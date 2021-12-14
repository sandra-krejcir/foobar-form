<script>
  import Beer from "./Beer.svelte";
import { cart } from "./theCart";
</script>

{#each $cart as beer}
  <li>
    <div class="img_container">
      <img src="./src/lib/beerImg/{beer.logo}" alt="beer logo" />
      <div class="frame_creem" />
      <p>{beer.name}</p>
      <div>
        <span>{beer.amount}</span>
      </div>
    </div>
  </li>
{/each}

<style>
  li {
    display: grid;
    justify-content: center;
  }

  .img_container {
    position: relative;
  }

  .frame_creem {
    position: absolute;
    background-image: url("/src/lib/decorations/big_frame_cream.png");
    background-size: 100%;
    background-repeat: no-repeat;
    width: 8.5rem;
    height: 10rem;
    top: -0.3rem;
    left: -0.3rem;
  }

  img {
    width: 8rem;
    height: 9rem;
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
    li {
      padding-top: 3rem;
    }
    img {
      width: 10rem;
      height: 11rem;
    }

    p {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    .frame_creem {
      width: 10.5rem;
      height: 12rem;
      top: -0.3rem;
      left: -0.3rem;
    }
  }
</style>
