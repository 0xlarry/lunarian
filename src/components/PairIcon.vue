<template>
  <div class="d-flex align-items-center">
    <div id="iconContainer1" class="icon-container">
      <img
        :src="asset1.icon"
        :class="'icon' + (isStableCoin(asset1.symbol) ? '-stablecoin' : '')"
      />
    </div>
    <div id="iconContainer2" class="icon-container">
      <img
        :src="asset2.icon"
        :class="'icon' + (isStableCoin(asset2.symbol) ? '-stablecoin' : '')"
      />
    </div>
    <span id="pairName" class="ms-3">{{ pairName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AssetData } from "@/types";

export default defineComponent({
  name: "PairIcon",
  props: {
    pairName: String,
    asset1: Object as PropType<AssetData>,
    asset2: Object as PropType<AssetData>,
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

#iconContainer1 {
  z-index: 999;
}

#iconContainer2 {
  z-index: 998;
  transform: translateX(-12px);
}

#pairName {
  transform: translateX(-12px);
}
</style>
