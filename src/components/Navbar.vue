<template>
  <nav id="nav" class="navbar">
    <div id="logo" class="me-auto d-flex align-items-center">
      <img id="logoImg" class="me-3" src="images/terra.png" />
      <h2 id="logoText" class="m-0">
        LUNARIAN
      </h2>
    </div>

    <div id="accountSelector" class="ms-2 me-1">
      <div class="btn-group" role="group">
        <div
          id="selectedAccount"
          class="rounded-start border border-secondary d-flex align-items-center ps-3"
        >
          <div class="image-cropper me-3">
            <img src="icons/accountSelectorPlaceholder.png" />
          </div>
          <span class="me-2">terra1234&hellip;abcd</span>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
          >
            Select
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li class="dropdown-item d-flex align-items-center">
              <div class="image-cropper me-3">
                <img src="icons/accountSelectorPlaceholder.png" />
              </div>
              <div class="me-2">
                terra1234&hellip;abcd
              </div>
            </li>
            <li class="dropdown-item d-flex align-items-center">
              <div class="image-cropper me-3">
                <img src="icons/accountSelectorPlaceholder.png" />
              </div>
              <div class="me-2">
                terra9999&hellip;ffff
              </div>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li class="dropdown-item d-flex align-items-center">
              <div>Add / remove addresses</div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="currencySelector" class="ms-2 me-1">
      <div class="btn-group" role="group">
        <div
          id="selectedCurrency"
          class="rounded-start border border-secondary d-flex align-items-center ps-3"
        >
          <img class="flag me-3" src="icons/us.png" />
          <span class="me-2">USD</span>
        </div>
        <div class="btn-group">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
          >
            Select
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li
              v-for="(currency, index) in currencies"
              :key="index"
              class="dropdown-item d-flex align-items-center"
              onclick=""
            >
              <img class="flag me-3" :src="currency.icon" />
              <div>{{ currency.name }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
  data() {
    return {
      currencies: [
        {
          id: "usd",
          icon: "icons/us.png",
          name: "USD",
        },
        {
          id: "eur",
          icon: "icons/eu.png",
          name: "EUR",
        },
        {
          id: "gbp",
          icon: "icons/uk.png",
          name: "GBP",
        },
        {
          id: "cny",
          icon: "icons/cn.png",
          name: "CNY",
        },
        {
          id: "jpy",
          icon: "icons/jp.png",
          name: "JPY",
        },
        {
          id: "krw",
          icon: "icons/kr.png",
          name: "KRW",
        },
      ],
    };
  },
});
</script>

<style scoped>
#nav {
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
}

#logoImg {
  height: 50px;
  width: 50px;
}

#logoText {
  display: block;
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  background-image: -webkit-linear-gradient(45deg, #3047a8, #6593e9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

.image-cropper {
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.image-cropper img {
  width: 36px;
  height: 36px;
}

.flag {
  width: 36px;
  height: 36px;
}

#selectedAccount {
  height: 55px;
  width: 250px;
}

#selectedCurrency {
  height: 55px;
  width: 125px;
}

.dropdown-toggle {
  width: 100px;
}

.dropdown-menu {
  font-size: 1.15rem;
}

.dropdown-item {
  transition: all 0.25s;
}

.dropdown-item:hover {
  cursor: pointer;
}

#accountSelector .dropdown-menu {
  width: 349px;
}

#currencySelector .dropdown-menu {
  width: 224px;
}
</style>
