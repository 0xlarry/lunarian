<template>
  <div id="currencySelector">
    <div class="btn-group" role="group">
      <div
        id="selectedCurrency"
        class="rounded-start border border-secondary d-flex align-items-center ps-3"
      >
        <img class="flag me-3" src="flags/us.png" />
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Currency",
  data() {
    return {
      currencies: [
        {
          id: "usd",
          icon: "flags/us.png",
          name: "USD",
        },
        {
          id: "eur",
          icon: "flags/eu.png",
          name: "EUR",
        },
        {
          id: "gbp",
          icon: "flags/uk.png",
          name: "GBP",
        },
        {
          id: "cny",
          icon: "flags/cn.png",
          name: "CNY",
        },
        {
          id: "jpy",
          icon: "flags/jp.png",
          name: "JPY",
        },
        {
          id: "krw",
          icon: "flags/kr.png",
          name: "KRW",
        },
      ],
    };
  },
});
</script>

<style scoped>
#selectedCurrency {
  height: 55px;
  width: 125px;
}

.flag {
  width: 36px;
  height: 36px;
}

.dropdown-toggle {
  width: 90px;
}

.dropdown-item {
  transition: all 0.25s;
}

.dropdown-item:hover {
  cursor: pointer;
}
</style>
