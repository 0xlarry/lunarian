<template>
  <div id="mirror" class="container mt-5">
    <div class="row ps-1 pe-2">
      <div class="col-6 ps-2 pe-2">
        <SummaryBox :title="'Total Collateral'" :content="'$12,345.67'" />
      </div>
      <div class="col-6 ps-2 pe-2">
        <SummaryBox :title="'Total Synth Debt'" :content="'$2,345.67'" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SummaryBox from "@/components/SummaryBox.vue";

export default defineComponent({
  name: "Mirror",
  components: { SummaryBox },
});
</script>
