<script>
    export let beers = ['Heiniken', 'Karlovacko', 'Pan']
</script>

{#each beers as beer}
      <li>
        <img src="" alt="beer logo">
        <p>{beer}</p>
        <p>Currently <span></span> on tap</p>
        <p>This beer is a type</p>
        <div>
          <span>0</span>
        </div>

      </li>
      {/each}

      <style>
         
      </style>