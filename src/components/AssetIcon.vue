<template>
  <div class="d-flex align-items-center">
    <div
      :class="'icon-container' + (isStableCoin(symbol) ? '-stablecoin' : '')"
    >
      <img :src="icon" />
    </div>
    <span class="ms-3">{{ symbol }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AssetIcon",
  props: {
    icon: String,
    symbol: String,
  },
  methods: {
    isStableCoin(symbol: string): boolean {
      // prettier-ignore
      return [
        "AUT", "CAT", "CHT", "CNT", "EUT",
        "GBT", "HKT", "IDT", "INT", "JPT",
        "KRT", "MNT", "PHT", "SDT", "SGT",
        "THT", "UST",
      ].includes(symbol);
    },
  },
});
</script>

<style scoped>
.icon-container {
  height: 36px;
  width: 36px;
}

.icon-container img {
  height: 100%;
  width: 100%;
}

.icon-container-stablecoin {
  height: 36px;
  width: 36px;
  border-radius: 50%;
  border: 1px solid #ced4da;
}

.icon-container-stablecoin img {
  position: relative;
  left: 6.5px;
  top: 4.5px;
  height: 20px;
  width: 20px;
}
</style>
