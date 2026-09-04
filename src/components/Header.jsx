import React from "react";

const Header = () => {
  return (
    <div>
      <div class="container flex mt-3">
        <img src="/img/logo.png" alt="logo" />
        <h1>Департамент по работе с персоналом</h1>
        <p class="today">{new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
