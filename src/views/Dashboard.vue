<template>
  <div id="dashboard" class="container pt-5">
    <div id="netWorth">
      <div id="netWorthTitle">Net Worth</div>
      <div id="netWorthValue">$123,456.78</div>
    </div>

    <div id="accountOverview" class="mt-5">
      <div class="subSectionTitle">Account Overview</div>
      <div class="row ps-1 pe-1">
        <Card
          v-for="(card, index) in accountOverviewCards"
          :key="index"
          :name="card.name"
          :value="getTotalValue(card.rows)"
          :iconType="'svg'"
          :iconData="card.svgPath"
          data-bs-toggle="modal"
          :data-bs-target="'#' + card.id"
        />
      </div>
    </div>

    <div id="platforms" class="mt-4">
      <div class="subSectionTitle">Platforms</div>
      <div class="row ps-1 pe-1">
        <Card
          v-for="(card, index) in platformsCards"
          :key="index"
          :name="card.name"
          :value="card.value"
          :iconType="'png'"
          :iconData="card.pngPath"
          @click="$router.push(card.id)"
        />
      </div>
    </div>

    <Modal
      v-for="(card, index) in accountOverviewCards"
      :key="index"
      :id="card.id"
      :name="card.name"
      :rows="card.rows"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AssetData } from "@/types";
import Card from "@/components/Card.vue";
import Modal from "@/components/Modal.vue";
import { getTotalValue } from "@/utils";

export default defineComponent({
  name: "Dashboard",
  components: { Card, Modal },
  data() {
    return {
      accountOverviewCards: [
        {
          id: "wallet",
          name: "Wallet",
          value: 12345.6,
          svgPath:
            "M404 160H108c-33.1 0-60 26.9-60 60v168c0 33.1 26.9 60 60 60h296c33.1 0 60-26.9 60-60V220c0-33.1-26.9-60-60-60zM342.9 65L108 110.9c-18 4-44 22.1-44 44.1 0 0 15-19 49-19h287v-20.5c0-12.6-5-28.7-13.9-37.6-11.3-11.3-27.5-16.2-43.2-12.9z",
          rows: [
            {
              icon: "coins/luna.png",
              symbol: "LUNA",
              amount: 100,
              price: 20,
            },
            {
              icon: "coins/ust.png",
              symbol: "UST",
              amount: 1234.56,
              price: 1,
            },
            {
              icon: "coins/krt.png",
              symbol: "KRT",
              amount: 88888,
              price: 0.00089,
            },
            {
              icon: "coins/unknown.png",
              symbol: "mBTC",
              amount: 0.1234,
              price: 54395.64,
            },
          ],
        },
        {
          id: "liquidityPools",
          name: "Liquidity Pools",
          value: 0,
          svgPath:
            "M380.5 163.3L256 32 131.5 163.3c-68.6 72.4-68.6 190 0 262.4C165.8 461.9 210.9 480 256 480s90.2-18.1 124.5-54.3c68.7-72.4 68.7-190 0-262.4z",
          rows: [
            {
              pairName: "ANC-UST",
              asset1: {
                icon: "coins/anchor.png",
                symbol: "ANC",
                amount: 100,
                price: 5,
              },
              asset2: {
                icon: "coins/ust.png",
                symbol: "UST",
                amount: 500,
                price: 1,
              },
            },
          ],
        },
        {
          id: "staked",
          name: "Staked",
          value: 0,
          svgPath:
            "M376 186h-20v-40c0-55-45-100-100-100S156 91 156 146v40h-20c-22.002 0-40 17.998-40 40v200c0 22.002 17.998 40 40 40h240c22.002 0 40-17.998 40-40V226c0-22.002-17.998-40-40-40zM256 368c-22.002 0-40-17.998-40-40s17.998-40 40-40 40 17.998 40 40-17.998 40-40 40zm62.002-182H193.998v-40c0-34.004 28.003-62.002 62.002-62.002 34.004 0 62.002 27.998 62.002 62.002v40z",
          rows: [] as AssetData[],
        },
        {
          id: "yieldFarming",
          name: "Yield Farming",
          value: 0,
          svgPath:
            "M528 336c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 112c-13.23 0-24-10.77-24-24s10.77-24 24-24 24 10.77 24 24-10.77 24-24 24zm80-288h-64v-40.2c0-14.12 4.7-27.76 13.15-38.84 4.42-5.8 3.55-14.06-1.32-19.49L534.2 37.3c-6.66-7.45-18.32-6.92-24.7.78C490.58 60.9 480 89.81 480 119.8V160H377.67L321.58 29.14A47.914 47.914 0 0 0 277.45 0H144c-26.47 0-48 21.53-48 48v146.52c-8.63-6.73-20.96-6.46-28.89 1.47L36 227.1c-8.59 8.59-8.59 22.52 0 31.11l5.06 5.06c-4.99 9.26-8.96 18.82-11.91 28.72H22c-12.15 0-22 9.85-22 22v44c0 12.15 9.85 22 22 22h7.14c2.96 9.91 6.92 19.46 11.91 28.73l-5.06 5.06c-8.59 8.59-8.59 22.52 0 31.11L67.1 476c8.59 8.59 22.52 8.59 31.11 0l5.06-5.06c9.26 4.99 18.82 8.96 28.72 11.91V490c0 12.15 9.85 22 22 22h44c12.15 0 22-9.85 22-22v-7.14c9.9-2.95 19.46-6.92 28.72-11.91l5.06 5.06c8.59 8.59 22.52 8.59 31.11 0l31.11-31.11c8.59-8.59 8.59-22.52 0-31.11l-5.06-5.06c4.99-9.26 8.96-18.82 11.91-28.72H330c12.15 0 22-9.85 22-22v-6h80.54c21.91-28.99 56.32-48 95.46-48 18.64 0 36.07 4.61 51.8 12.2l50.82-50.82c6-6 9.37-14.14 9.37-22.63V192c.01-17.67-14.32-32-31.99-32zM176 416c-44.18 0-80-35.82-80-80s35.82-80 80-80 80 35.82 80 80-35.82 80-80 80zm22-256h-38V64h106.89l41.15 96H198z",
          rows: [] as AssetData[],
        },
        {
          id: "debt",
          name: "Debt",
          value: 0,
          svgPath:
            "M309.8 304.6c-4.3-3-6.9-7.9-6.9-13.1v-213c0-25.7-21-46.5-47-46.5s-47 20.8-47 46.5v213c0 5.2-2.6 10.2-6.9 13.1-25.2 17.3-42 46.4-42 79.3 0 53 43 96 96 96s96-43 96-96c0-32.9-17-62.1-42.2-79.3zM256.1 445c-32 0-58.1-26.3-58.1-58.8 0-25.4 15.4-47.1 37.9-55.3 3.2-1.2 5.4-4.1 5.4-7.5V180.2c0-8 6.5-14.5 14.5-14.5s14.5 6.5 14.5 14.5v143.2c0 3.4 2.1 6.3 5.3 7.5 21.9 8.2 38.4 29.9 38.4 55.2 0 32.5-25.8 58.9-57.9 58.9z",
          rows: [] as AssetData[],
        },
      ],
      platformsCards: [
        {
          id: "terraswap",
          name: "TerraSwap",
          value: 0,
          pngPath: "coins/terraswap.png",
        },
        {
          id: "mirror",
          name: "Mirror Protocol",
          value: 0,
          pngPath: "coins/mirror.png",
        },
        {
          id: "anchor",
          name: "Anchor Protocol",
          value: 0,
          pngPath: "coins/anchor.png",
        },
      ],
    };
  },
  methods: { getTotalValue },
});
</script>

<style scoped>
#netWorthTitle {
  color: #657795;
}

#netWorthValue {
  font-size: 1.875rem;
  font-weight: 600;
}

.subSectionTitle {
  font-size: 1.3rem;
  margin-bottom: 0.85rem;
}
</style>
