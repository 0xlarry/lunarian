<template>
  <div class="d-flex align-items-center">
    <div id="icon1" class="image-cropper">
      <img :src="asset1.icon" />
    </div>
    <div id="icon2" class="image-cropper">
      <img :src="asset2.icon" />
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
});
</script>

<style scoped>
.image-cropper {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

img {
  width: 40px;
  height: 40px;
}

#icon1 {
  z-index: 999;
}

#icon2 {
  z-index: 998;
  transform: translateX(-10px);
}

#pairName {
  transform: translateX(-10px);
}
</style>
