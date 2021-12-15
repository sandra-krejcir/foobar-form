<script>
  import { onMount } from "svelte";
  import Beer from "./Beer.svelte";

  let beers = [];
  let types = [
    "IPA",
    "Hefeweizen",
    "Oktoberfest",
    "European Lager",
    "Stout",
    "Belgian Specialty Ale",
    "California Common",
  ];

  let bar;
  let fullSelection = false;

  onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/`);
    bar = await res.json();
  });
  console.log(bar);

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
    console.log(beersOnTapArray);
  }
</script>

<div>
  <span />
  <ul class="firstFilter">
    <li class="click_me" on:click={() => (fullSelection = !fullSelection)}>
      Full selection
    </li>
    <li class="click_me" on:click={() => (fullSelection = !fullSelection)}>
      On today's tap
    </li>
  </ul>
  <ul class="secondFilter">
    <li>All</li>
    <div class="type_container">
      {#each types as type}
        <li class="type">{type}</li>
      {/each}
    </div>
  </ul>
</div>

<div class="scroll_container">
  <ul class="doFlex">
    {#if fullSelection}
      {#each beersOnTapArray as beer}
        <Beer {beer} />
      {/each}
      {#each beersNotOnTapArray as beer}
        <div class="gray">
          <Beer {beer} />
        </div>
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

  .type_container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .type {
    text-align: center;
  }
</style>
