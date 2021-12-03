<script>
    import logo from './beerImg/svelte.png'
    import { onMount } from 'svelte';

export let beers = []
export const readMore = {
    "0" : false,
    "1" : false,
    "2" : false,
    "3" : false,
    "4" : false,
    "5" : false,
    "6" : false,
    "7" : false,
    "8" : false,
    "9" : false,
    
}


onMount(async () => {
    const res = await fetch(`https://foobar-databar.herokuapp.com/beertypes`);
    beers = await res.json();
});

</script>

{#each beers as beer (beer.name)}
      <li>
        <img src="{logo}" alt="beer logo">
        <p>{beer.name}</p>
        <p>Currently <span></span> on tap</p>
        <button
	on:click="{() => readMore[`${beers.indexOf(beer.name)}`] = !readMore[`${beers.indexOf(beer.name)}`]}">V More information about {beer.name} V</button>
        <div class:hidden0 = "{!readMore[`${beers.indexOf(beer.name)}`]}">
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

          .hidden0 {
              display:none
          }
          .hidden1 {
              display:none
          }

          .hidden2 {
              display:none
          }

          .hidden3 {
              display:none
          }

          .hidden4 {
              display:none
          }

          .hidden5 {
              display:none
          }

          .hidden6 {
              display:none
          }

          .hidden7 {
              display:none
          }

          .hidden8 {
              display:none
          }

          .hidden9 {
              display:none
          }

      li {
         text-align: center;
          margin-left: 5vw;
      }

      p {
          max-width: 120rem ;
      }
      </style>