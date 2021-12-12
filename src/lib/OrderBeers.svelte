<script>
  import { cart } from "./theCart";
</script>

{#each $cart as beer}
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

  /* @media only screen and (min-width: 600px) {
    h1 {
      marrgin
    }
  } */
</style>
