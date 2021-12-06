<script>
  export let beers = ["Heiniken", "Karlovacko", "Pan"];
</script>

{#each beers as beer}
  <li>
    <img src="/src/lib/beerImg/elhefe.png" alt="beer logo" />
    <h4>{beer}</h4>
    <!-- <p>Currently <span /> on tap</p>
    <p>This beer is a type</p> -->
    <div>
      <span>0</span>
    </div>
  </li>
{/each}

<style>
  img {
    width: 8rem;
  }

  h4 {
    margin: 0.5rem;
    margin-top: 0;
    text-align: center;
  }

  span {
    display: flex;
    justify-content: center;
    border: 1px solid #f0e5c6;
    margin-left: 2.8rem;
    margin-right: 2.8rem;
  }
</style>
