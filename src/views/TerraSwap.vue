<template>
  <div id="mirror" class="container mt-1">
    <BackButton :iconPath="'images/terraswap.png'" :name="'TerreSwap'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackButton from "@/components/BackButton.vue";
import SummaryBox from "@/components/SummaryBox.vue";

export default defineComponent({
  name: "TerraSwap",
  components: { BackButton, SummaryBox },
});
</script>
