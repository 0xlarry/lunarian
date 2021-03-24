<template>
  <nav id="nav" class="navbar">
    <div
      v-if="$route.name == 'Dashboard'"
      id="logo"
      class="me-auto d-flex align-items-center"
    >
      <img id="logoImg" class="me-3" src="images/terra.png" />
      <h2 id="logoText" class="m-0">
        LUNARIAN
      </h2>
    </div>
    <BackButton
      v-if="$route.name != 'Dashboard'"
      :iconPath="`coins${$route.path}.png`"
      :name="$route.name"
      class="me-auto"
    />
    <AccountSelector class="ms-auto me-1" />
    <CurrencySelector class="ms-2 me-1" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AccountSelector from "@/components/AccountSelector.vue";
import BackButton from "@/components/BackButton.vue";
import CurrencySelector from "@/components/CurrencySelector.vue";

export default defineComponent({
  name: "Navbar",
  components: { AccountSelector, BackButton, CurrencySelector },
});
</script>

<style scoped>
#nav {
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
}

#logoImg {
  height: 50px;
  width: 50px;
}

#logoText {
  display: block;
  font-family: "Kanit", sans-serif;
  font-weight: 600;
  letter-spacing: 2px;
  background-image: -webkit-linear-gradient(45deg, #3047a8, #6593e9);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>
