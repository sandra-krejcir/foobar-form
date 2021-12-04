
    <img alt="logo">
    <div>
      <p>Log in for easier ordering</p>
      <form>
        <input type="text" minlength="15" maxlength="15" id="phoneNumber" name="phoneNumber" placeholder="+45 XX XX XX XX">
        <label for="phoneNumber">Phone Number</label>
        <input type="password" minlength="8" id="password" name="password">
        <label for="password">Password</label>
        <button type="submit">Log in</button>
      </form>
      <slot></slot>
    </div>
  