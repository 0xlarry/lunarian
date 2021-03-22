<template>
  <div>
    <Navbar></Navbar>
    <router-view class="mt-5 max-width-1200px" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { Navbar },
});
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  min-height: 100vh;
  background: rgb(236, 236, 236);
  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 1) 0%,
    rgba(250, 250, 250, 1) 100px,
    rgba(255, 255, 255, 1) 150px
  );
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Exo 2", sans-serif;
}

.max-width-1200px {
  max-width: 1200px;
}
</style>
