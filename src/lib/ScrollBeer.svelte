<script>
    import { onMount } from 'svelte';

export let beers = []


onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
});
</script>

{#each beers as beer}
      <li>
        <img src="{beer.logo}" alt="beer logo">
        <p>{beer.name}</p>
        <p>Currently <span></span> on tap</p>
        <button>V More information about {beer.name} V</button>
        <div>
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
          <span>+</span>
          <span>0</span>
          <span>-</span>
        </div>
        <p>Price: </p>

      </li>
      {/each}

      <style>
      li {
         
          margin-left: 5vw;
      }

      p {
          max-width: 120rem ;
      }
      </style>