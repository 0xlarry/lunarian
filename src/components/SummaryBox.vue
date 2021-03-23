<template>
  <div class="summary-box round text-center">
    <div id="title">{{ title }}</div>
    <div id="content">{{ content }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryBox",
  props: {
    title: String,
    content: String,
  },
});
</script>

<style scoped>
.summary-box {
  background-color: #f0f5f9;
  height: 123px;
  padding: 32px;
  padding-top: 28px;
  border-radius: 4px;
}

#title {
  font-size: 1.15rem;
  color: #657795;
  margin-bottom: 0.15rem;
}

#content {
  font-size: 1.5rem;
  font-weight: 600;
}
</style>
