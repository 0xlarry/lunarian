<template>
  <div class="d-flex align-items-center">
    <div class="image-cropper">
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

.image-cropper img {
  width: 40px;
  height: 40px;
}
</style>
