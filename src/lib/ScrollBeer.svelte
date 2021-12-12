<script>
  import { onMount } from "svelte";
  import Beer from "./Beer.svelte";

  let beers = [];

  let bar;
  let fullSelection = false;
  let types = ["API", "GODknows"];

  onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/`);
    bar = await res.json();
    
  });
  console.log(bar)

  onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
    
  });
$: gotData = beers.length > 0 && bar && beers.map(addToArray);
  
  
  

  let beersOnTapArray = [];
  let beersNotOnTapArray = [];

 

  function addToArray(beer) {

    if (bar.taps.find((element) => element.beer === beer.name)) {

      beersOnTapArray = beersOnTapArray.concat({ ...beer });

    } else if (bar.taps.find((element) => element.beer !== beer.name)) {

      beersNotOnTapArray = beersNotOnTapArray.concat({ ...beer });

    }
console.log(beersOnTapArray)
  }

</script>

<div>
  <span />
  <ul class="firstFilter">
    <li on:click={() => (fullSelection = !fullSelection)}>Full selection</li>
    <li on:click={() => (fullSelection = !fullSelection)}>On today's tap</li>
  </ul>
  <ul class="secondFilter">
    <li>All</li>
    {#each types as type}
      <li>{type}</li>
    {/each}
  </ul>
</div>

<div class="scroll_container">
  <ul class="doFlex">
    {#if fullSelection}
{#each beersOnTapArray as beer}
  <Beer {beer} />
{/each}
{#each beersNotOnTapArray as beer}
  <Beer {beer} />
{/each}
{/if}

{#if !fullSelection} 
{#each beersOnTapArray as beer}
  <Beer {beer} />
{/each}
{/if}
  </ul>
</div>

<style>
  .scroll_container {
    /* max-width: max-content; */
    overflow: scroll;
    /* scroll-snap-type: y mandatory; */
  }

  .doFlex {
    display: flex;
    flex-direction: row;
    float: left;
  }

  .firstFilter,
  .secondFilter {
    display: flex;
    justify-content: center;
  }

  ul {
    list-style: none;
  }

  @media (max-width: 480px) {

  

}
</style>
