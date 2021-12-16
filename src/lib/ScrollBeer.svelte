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
  let allSelected = false;
  let tapSelected = true;

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

  function changeSelection() {
    fullSelection = !fullSelection;
    allSelected = !allSelected;
    tapSelected = !tapSelected;

    if (allSelected) {
      document.querySelector("#firstSelect").classList.add("line");
      document.querySelector("#secondSelect").classList.remove("line");
    } else if (tapSelected) {
      document.querySelector("#firstSelect").classList.remove("line");
      document.querySelector("#secondSelect").classList.add("line");
    }
  }
</script>

<div>
  <span />
  <ul class="firstFilter">
    <li class="click_me" id="firstSelect" on:click={changeSelection}>
      Full selection
    </li>
    <li class="click_me line" id="secondSelect" on:click={changeSelection}>
      On today's tap
    </li>
  </ul>
  <ul class="secondFilter">
    <li>All</li>
    {#each types as type}
      <li class="type">{type}</li>
    {/each}
  </ul>
</div>

<div class="scroll_container">
  <ul class="doFlex">
    {#if fullSelection}
      {#each beersOnTapArray as beer}
        <Beer {beer} onTap={true}/>
      {/each}
      {#each beersNotOnTapArray as beer}
        <div class="gray">
          <Beer {beer} onTap={false} />
        </div>
      {/each}
    {/if}

    {#if !fullSelection}
      {#each beersOnTapArray as beer}
        <Beer {beer} onTap={true}/>
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

  .line {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    .type {
      text-align: center;
    }
  }

  @media only screen and (min-width: 600px) {
    .scroll_container {
      padding-left: 14rem;
    }
  }
</style>
