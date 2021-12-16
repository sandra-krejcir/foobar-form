<section class="login">
  <!-- <img alt="logo"> -->

  <h1 class="logo">FooBar</h1>

  <div>
    <h2>Log in for easier ordering</h2>
    <form>
      <label for="phoneNumber_login">Phone Number</label>
      <input
        type="tel"
        minlength="8"
        maxlength="15"
        id="phoneNumber_login"
        name="phoneNumber_login"
        pattern="(+)[0-9]{3}-[0-9]{3}-[0-9]{4}"
        title="Must contain at least 8 numberes and bo more than 15 numbers"
        placeholder="+45 XX XX XX XX"
        required
        inputmode="tel"
      />
      <label for="password_login">Password</label>
      <input
        type="password_login"
        minlength="8"
        id="password_login"
        name="password_login"
        title="Must contain at least 8 or more characters"
        placeholder="********"
        required
      />

      <div class="button_container">
        <button type="submit">Log in</button>
        <div class="frame_creem_short" />
      </div>
    </form>
    <slot />
  </div>
</section>

<style>
  .login {
    margin: 0 auto;
    max-width: 71%;
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

  .button_container {
    display: flex;
    justify-content: center;
  }
</style>
