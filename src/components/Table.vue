<template>
  <div class="table-container">
    <table id="deposited" class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 31%">Asset</th>
          <th scope="col" style="width: 23%">Amount</th>
          <th scope="col" style="width: 23%">Price</th>
          <th scope="col" style="width: 23%">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in sortByValue(rows)" :key="index">
          <td style="width: 31%">
            <AssetIcon
              v-if="!isPair(row)"
              :icon="row.icon"
              :symbol="row.symbol"
            />
            <PairIcon
              v-if="isPair(row)"
              :pairName="row.pairName"
              :asset1="row.asset1"
              :asset2="row.asset2"
            />
          </td>
          <td style="width: 23%">
            {{
              isPair(row) ? getPairAmountString(row) : formatAmount(row.amount)
            }}
          </td>
          <td style="width: 23%">
            {{ isPair(row) ? "-" : formatMoney(row.price) }}
          </td>
          <td style="width: 23%">
            {{ formatMoney(getValue(row)) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AssetData, PairData } from "@/types";
import AssetIcon from "@/components/AssetIcon.vue";
import PairIcon from "@/components/PairIcon.vue";
import * as utils from "@/utils";

export default defineComponent({
  name: "Table",
  components: { AssetIcon, PairIcon },
  props: {
    rows: Array as PropType<Array<AssetData | PairData>>,
  },
  methods: { ...utils },
});
</script>

<style scoped>
.table-container {
  border: 1px solid #dfe8f9;
  border-radius: 4px;
}

.table {
  table-layout: fixed;
  word-wrap: break-word;
  vertical-align: middle;
  margin: 0;
}

.table th {
  border-top: 1px solid #dfe8f9;
}

.table th,
.table td {
  padding-top: 16px;
  padding-bottom: 16px;
}

.table th {
  border: none;
}

.table td {
  border-top: 1px solid #dfe8f9 !important;
  border-bottom: none;
}

.table tr th:first-child,
.table tr td:first-child {
  padding-left: 16px;
}

.table tr th:last-child,
.table tr td:last-child {
  padding-right: 16px;
}
</style>
