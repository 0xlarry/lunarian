<template>
  <div id="anchor" class="container mt-1">
    <BackButton
      :iconPath="'images/anchor.png'"
      :name="'Anchor Protocol'"
      class="mb-4"
    />

    <div class="row ps-1 pe-2">
      <div class="col-4 ps-2 pe-2">
        <SummaryBox :title="'Total Supplied'" :content="'$12,345.67'" />
      </div>
      <div class="col-4 ps-2 pe-2">
        <SummaryBox :title="'Total Borrowed'" :content="'$2,345.67'" />
      </div>
      <div class="col-4 ps-2 pe-2">
        <SummaryBox :title="'Loan-To-Value Ratio (LTV)'" :content="'19.0%'" />
      </div>
    </div>

    <div class="subtitle">Deposited</div>
    <Table :rows="deposited" />

    <div class="subtitle">Borrowed</div>
    <Table :rows="borrowed" />

    <div class="subtitle">Collateral</div>
    <Table :rows="collateral" />

    <div class="subtitle">Staking</div>
    <Table :rows="staking" />

    <div class="subtitle">Yield Farming</div>
    <Table :rows="yieldFarming" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Table from "@/components/Table.vue";
import BackButton from "@/components/BackButton.vue";
import SummaryBox from "@/components/SummaryBox.vue";

export default defineComponent({
  name: "Anchor",
  components: { Table, BackButton, SummaryBox },
  data() {
    return {
      deposited: [
        {
          icon: "images/ust.png",
          symbol: "UST",
          amount: 1000,
          price: 1,
        },
      ],
      borrowed: [
        {
          icon: "images/ust.png",
          symbol: "UST",
          amount: 1000,
          price: 1,
        },
      ],
      collateral: [
        {
          icon: "images/luna.png",
          symbol: "bLUNA",
          amount: 1000,
          price: 20,
        },
        {
          icon: "images/atom.png",
          symbol: "bATOM",
          amount: 500,
          price: 2,
        },
        {
          icon: "images/solana.png",
          symbol: "bSOL",
          amount: 12345,
          price: 0.5,
        },
        {
          icon: "images/polkadot.png",
          symbol: "bDOT",
          amount: 88888,
          price: 0.1234,
        },
      ],
      staking: [
        {
          icon: "images/anchor.png",
          symbol: "Staked ANC",
          amount: 1000,
          price: 5,
        },
        {
          pairName: "Staked ANC-UST LP",
          asset1: {
            icon: "images/anchor.png",
            symbol: "ANC",
            amount: 100,
            price: 5,
          },
          asset2: {
            icon: "images/ust.png",
            symbol: "UST",
            amount: 500,
            price: 1,
          },
        },
      ],
      yieldFarming: [
        {
          icon: "images/anchor.png",
          symbol: "Claimable ANC",
          amount: 123,
          price: 5,
        },
      ],
    };
  },
});
</script>

<style scoped>
.subtitle {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 2.25rem;
  margin-bottom: 1rem;
}
</style>
