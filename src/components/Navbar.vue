<template>
  <nav id="nav" class="navbar">
    <div id="header" class="container max-width-1200px">
      <div id="logo" class="d-flex align-items-center me-auto">
        <img id="logoImg" src="images/terra.png" />
        <h5 id="logoText">Lunarian</h5>
      </div>

      <div id="accountSelector" class="dropdown m-auto me-2">
        <button
          class="btn dropdown-toggle d-flex align-items-center"
          id="accountSelectorButton"
          data-bs-toggle="dropdown"
        >
          <div class="image-cropper">
            <img class="icon" src="icons/accountSelectorPlaceholder.png" />
          </div>
          <span class="ms-2 me-1">terra1234...abcd</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="accountSelectorButton"></ul>
      </div>

      <div id="currencySelector" class="dropdown ms-2">
        <button
          class="btn dropdown-toggle d-flex align-items-center"
          id="currencySelectorButton"
          data-bs-toggle="dropdown"
        >
          <img class="icon" src="icons/usd.png" />
          <span class="me-1">USD</span>
        </button>
        <ul class="dropdown-menu" aria-labelledby="currencySelectorButton"></ul>
      </div>
    </div>

    <div
      id="subheader"
      class="container d-flex justify-content-start max-width-1200px"
    >
      <router-link to="/" class="me-3 active">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-house-door-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"
          />
        </svg>
        <span>Dashboard</span>
      </router-link>
      <router-link to="/history" class="ms-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-clock-history"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
          />
          <path
            d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
          />
          <path
            d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
          />
        </svg>
        <span>History</span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
a {
  font-weight: 700;
  color: black;
  text-decoration: none;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 0.65rem;
  padding-right: 0.65rem;
}

a svg {
  height: 1.25rem;
  width: 1.25rem;
  margin-right: 0.5rem;
  transform: translateY(-0.1rem);
}

a.active {
  color: #2845aa;
  border-bottom: 2px solid #2845aa;
}

.max-width-1200px {
  max-width: 1200px;
}

.image-cropper {
  width: 2rem;
  height: 2rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 0.3rem;
}

.image-cropper img {
  width: 2rem;
  height: 2rem;
}

#nav {
  margin-top: 0.3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0;
  border-bottom: 1px solid #dfe8f9;
}

#subheader {
  margin-top: 0.65rem;
  transform: translateX(-0.25rem);
}

#logoImg {
  width: 2rem;
  height: 2rem;
}

#logoText {
  font-weight: 900;
  margin-left: 0.8rem;
  transform: translateY(0.275rem);
}

#accountSelectorButton,
#currencySelectorButton {
  height: 3rem;
}

#accountSelectorButton:hover,
#currencySelectorButton:hover {
  background-color: #dfe8f9;
}

#accountSelector button,
#currencySelector button {
  font-weight: 700;
}

#currencySelector img {
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
}
</style>
