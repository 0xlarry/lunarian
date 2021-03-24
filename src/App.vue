<template>
  <div id="main">
    <Navbar />
    <router-view id="routerView" class="max-width-1200px" />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "@/components/Footer.vue";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  name: "App",
  components: { Footer, Navbar },
});
</script>

<style>
/* https://stackoverflow.com/questions/1417934/ */
html {
  overflow-y: scroll;
}

/* https://stackoverflow.com/questions/32862394/ */
body {
  padding-right: 0 !important;
}

#app {
  font-family: "Roboto", sans-serif;
  /* font-size: 1.15rem; */
  font-weight: 400;
}

#main {
  min-height: 100vh;
  background: rgb(236, 236, 236);
  background: linear-gradient(
    180deg,
    rgba(236, 236, 236, 1) 0%,
    rgba(250, 250, 250, 1) 100px,
    rgba(255, 255, 255, 1) 150px
  );
}

#routerView {
  overflow: auto;
  min-height: calc(100vh - 80px);
  padding-bottom: 150px;
}

.max-width-1200px {
  max-width: 1200px !important;
}
</style>
