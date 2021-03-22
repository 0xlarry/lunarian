<template>
  <div>
    <Navbar></Navbar>
    <router-view />
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
  font-family: "Lato", sans-serif;
}

.max-width-1200px {
  max-width: 1200px;
}
</style>
