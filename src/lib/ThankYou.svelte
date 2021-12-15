<h2>
  Thank you Table 1!
  <br />
  Order Complete
</h2>
<div class="theTimer">
  <p>1:00</p>
</div>
<h3>Your beer will be served cold shortly</h3>
<p>Payed <span>V</span></p>
<h3>Cheers!</h3>
<slot />

<style>
  h2,
  h3,
  p {
    color: #801b16;
    text-align: center;
  }

  h2 {
    margin-top: 5rem;
  }

  h3 {
    margin-bottom: 5rem;
  }

  span {
    color: rgb(30, 255, 0);
  }

  .theTimer {
    background-image: url("./src/lib/decorations/cirkle.png");
    background-size: cover;
    width: 20rem;
    height: 7.5rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    margin-bottom: 6rem;
  }

  .theTimer p {
    padding-top: 3rem;
    font-size: 2rem;
  }
</style>
