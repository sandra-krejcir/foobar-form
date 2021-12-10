<script>
  import { onMount } from "svelte";
  import Beer from "./Beer.svelte";

  export let beers = [];

  onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
  });

  
</script>

{#each beers as beer (beer.name)}
<Beer beer={beer}></Beer>
  
{/each}

<style>
  /*SANDRA*/
  
  /*EMILY*/
</style>
