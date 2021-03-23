<template>
  <div id="mirror" class="container mt-1">
    <BackButton :iconPath="'images/mirror.png'" :name="'Mirror Protocol'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackButton from "@/components/BackButton.vue";
import SummaryBox from "@/components/SummaryBox.vue";

export default defineComponent({
  name: "Mirror",
  components: { BackButton, SummaryBox },
});
</script>
