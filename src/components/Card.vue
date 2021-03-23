<template>
  <div class="col-4 ps-2 pe-2 mb-3">
    <div class="card d-flex flex-row align-items-center">
      <div v-if="iconType == 'svg'" class="card-icon">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          class="icon undefined"
          height="1.05em"
          width="1.05em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path :d="iconData"></path>
        </svg>
      </div>
      <div v-if="iconType == 'png'" class="image-cropper">
        <img :src="iconData" />
      </div>
      <span class="me-auto">{{ name }}</span>
      <span class="fs-5 ms-auto">{{ formatMoney(value) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { formatMoney } from "@/utils";

export default defineComponent({
  name: "Card",
  props: {
    name: String,
    value: Number,
    iconType: String as PropType<"svg" | "png">,
    iconData: String,
  },
  methods: { formatMoney },
});
</script>

<style scoped>
.card {
  padding: 1rem;
  font-weight: 700;
  transition: all 0.25s;
}

.card:hover {
  cursor: pointer;
  box-shadow: #dfe8f9 0px 0px 0px 3px;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  margin-right: 16px;
  background: rgba(0, 216, 151, 0.15);
  border-radius: 50%;
}

.card-icon svg {
  fill: #00d897;
}

.image-cropper {
  width: 40px;
  height: 40px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 16px;
}

.image-cropper img {
  width: 40px;
  height: 40px;
}
</style>
