<template>
  <div class="modal" :id="id">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="d-flex align-items-center mb-4">
          <h5 class="modal-title me-auto">
            <b>{{ name }}</b>
          </h5>
          <button
            type="button"
            class="btn-close ms-auto"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <table class="table table-borderless mb-0">
          <thead>
            <tr>
              <th scope="col" style="width: 30%">Asset</th>
              <th scope="col" style="width: 30%">Amount</th>
              <th scope="col" style="width: 20%">Price</th>
              <th scope="col" style="width: 20%">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, index) in sortByValue(rows)" :key="index">
              <td style="width: 30%">
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
              <td style="width: 30%">
                {{
                  isPair(row)
                    ? getPairAmountString(row)
                    : formatAmount(row.amount)
                }}
              </td>
              <td style="width: 20%">
                {{ isPair(row) ? "-" : formatMoney(row.price) }}
              </td>
              <td style="width: 20%">
                {{ formatMoney(getValue(row)) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { AssetData, PairData } from "@/types";
import AssetIcon from "@/components/AssetIcon.vue";
import PairIcon from "@/components/PairIcon.vue";
import * as utils from "@/utils";

export default defineComponent({
  name: "Modal",
  components: { AssetIcon, PairIcon },
  props: {
    id: String,
    name: String,
    rows: Array as PropType<Array<AssetData | PairData>>,
  },
  methods: { ...utils },
});
</script>

<style scoped>
.modal-content {
  padding: 32px;
  padding-bottom: 24px;
}

.modal-lg {
  max-width: 750px;
}

table {
  vertical-align: middle;
}

thead th {
  padding-top: 12px !important;
  padding-bottom: 18px !important;
}

tbody td {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}

th,
td {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

.icon {
  width: 40px;
  height: 40px;
}
</style>
