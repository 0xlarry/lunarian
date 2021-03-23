<template>
  <div id="back-button" class="d-flex align-items-center">
    <div id="back-arrow" class="me-2" @click="$router.push('/')">
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        class="icon undefined"
        height="1.5em"
        width="1.5em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"
        ></path>
      </svg>
    </div>
    <div class="image-cropper">
      <img :src="iconPath" />
    </div>
    <b id="name" class="me-auto fs-5">{{ name }}</b>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackButton",
  props: {
    iconPath: String,
    name: String,
  },
});
</script>

<style scoped>
#back-arrow {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  /* border: 1px solid #657795; */
  transition: all 0.25s;
}

#back-arrow:hover {
  background-color: #f0f5f9;
  cursor: pointer;
}

#back-arrow svg {
  position: relative;
  left: 7px;
  top: 6px;
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
