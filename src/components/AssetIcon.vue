<template>
  <div class="d-flex align-items-center">
    <div class="icon-container">
      <img
        :src="icon"
        :class="'icon' + (isStableCoin(symbol) ? '-stablecoin' : '')"
      />
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

.icon {
  height: 100%;
  width: 100%;
}

.icon-stablecoin {
  position: relative;
  left: 0;
  top: 0;
  height: 38.5px;
  width: 38.5px;
}
</style>
