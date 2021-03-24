<template>
  <div class="d-flex align-items-center">
    <div
      id="iconContainer1"
      :class="
        'icon-container' + (isStableCoin(asset1.symbol) ? '-stablecoin' : '')
      "
    >
      <img :src="asset1.icon" />
    </div>
    <div
      id="iconContainer2"
      :class="
        'icon-container' + (isStableCoin(asset2.symbol) ? '-stablecoin' : '')
      "
    >
      <img :src="asset2.icon" />
    </div>
    <span id="pairName" class="ms-3">{{ pairName }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AssetData } from "@/types";
import AssetIcon from "@/components/AssetIcon.vue";

export default defineComponent({
  name: "PairIcon",
  components: { AssetIcon },
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

#iconContainer1 {
  z-index: 999;
}

#iconContainer2 {
  z-index: 998;
  transform: translateX(-6px);
}

#pairName {
  transform: translateX(-6px);
}
</style>
