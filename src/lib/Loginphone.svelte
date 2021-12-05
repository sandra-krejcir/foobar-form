<section class="login">
  <!-- <img alt="logo"> -->
  <h1 class="logo">FooBar</h1>
  <div>
    <h2>Log in for easier ordering</h2>
    <form>
      <input
        type="text"
        minlength="15"
        maxlength="15"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="+45 XX XX XX XX"
      />
      <label for="phoneNumber">Phone Number</label>
      <input
        type="password"
        minlength="8"
        id="password"
        name="password"
        placeholder="******"
      />
      <label for="password">Password</label>
      <button type="submit">Log in</button>
    </form>
    <slot />
  </div>
</section>

<style>
  .login {
    margin: 0 auto;
    max-width: 65%;
    display: grid;
    justify-items: center;
  }

  h2 {
    margin-bottom: 3rem;
    margin-top: 3rem;
    font-size: 1.9rem;
  }

  form {
    display: grid;
  }
</style>
