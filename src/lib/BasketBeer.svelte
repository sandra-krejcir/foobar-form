<script>
    export let beers = ['Heiniken', 'Karlovacko', 'Pan']
</script>

<style>

</style>

    <h2>Order</h2>
    <div>
        {#each beers as beer}
        <div>
          <img alt="Beer pic">
          <div>
            <p>{beer}</p>
            <div>
              <span>+</span>
              <span>0</span>
              <span>-</span>
            </div>
            <p>Price:</p>
          </div>
        </div>
        {/each}
    </div>
    <p>Total..............</p>
    <slot></slot>

