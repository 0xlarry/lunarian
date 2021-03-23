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
          <thead class="mb-3">
            <tr>
              <th scope="col" style="width: 40%">Asset</th>
              <th scope="col" style="width: 24%">Amount</th>
              <th scope="col" style="width: 18%">Price</th>
              <th scope="col" class="text-end" style="width: 18%">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asset, index) in assetsSorted" :key="index">
              <td class="d-flex align-items-center" style="width: 40%">
                <img class="icon me-3" :src="asset.icon" />
                <span>{{ asset.symbol }}</span>
              </td>
              <td style="width: 24%">
                {{
                  formatNumber(
                    asset.amount,
                    Number.isInteger(asset.amount)
                      ? 0
                      : asset.amount >= 1
                      ? 2
                      : 4
                  )
                }}
              </td>
              <td style="width: 18%">
                {{ formatMoney(asset.price) }}
              </td>
              <td class="text-end" style="width: 18%">
                {{ formatMoney(asset.amount * asset.price) }}
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
import { formatNumber, formatMoney } from "@/utils";
import { AssetData } from "@/types";

export default defineComponent({
  name: "Modal",
  props: {
    id: String,
    name: String,
    assets: Array as PropType<AssetData[]>,
  },
  computed: {
    assetsSorted(): AssetData[] {
      if (!this.assets) {
        return [] as AssetData[];
      }

      return this.assets.sort((a: AssetData, b: AssetData) => {
        if (a.amount * a.price < b.amount * b.price) return 1;
        else return -1;
      });
    },
  },
  methods: { formatNumber, formatMoney },
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
