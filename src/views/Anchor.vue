<template>
  <div id="anchor" class="container mt-1">
    <BackButton :iconPath="'images/anchor.png'" :name="'Anchor Protocol'" />

    <div class="row mt-3 ps-1 pe-2">
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
    <div class="table-container">
      <table id="deposited" class="table">
        <thead>
          <tr>
            <th scope="col">Asset</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img class="icon me-3" src="images/ust.png" />
                <span>UST</span>
              </div>
            </td>
            <td>1,000</td>
            <td>$1.00</td>
            <td>$1,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="subtitle">Borrowed</div>
    <div class="table-container">
      <table id="borrowed" class="table">
        <thead>
          <tr>
            <th scope="col">Asset</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img class="icon me-3" src="images/ust.png" />
                <span>UST</span>
              </div>
            </td>
            <td>1,000</td>
            <td>$1.00</td>
            <td>$1,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="subtitle">Collateral</div>
    <div class="table-container">
      <table id="collateral" class="table">
        <thead>
          <tr>
            <th scope="col">Asset</th>
            <th scope="col">Amount</th>
            <th scope="col">Price</th>
            <th scope="col">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img class="icon me-3" src="images/luna.png" />
                <span>bLUNA</span>
              </div>
            </td>
            <td>1,000</td>
            <td>$20.00</td>
            <td>$20,000.00</td>
          </tr>
          <tr>
            <td>
              <div class="d-flex align-items-center">
                <img class="icon me-3" src="images/atom.png" />
                <span>bATOM</span>
              </div>
            </td>
            <td>1,000</td>
            <td>$20.00</td>
            <td>$20,000.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackButton from "@/components/BackButton.vue";
import SummaryBox from "@/components/SummaryBox.vue";

export default defineComponent({
  name: "Anchor",
  components: { BackButton, SummaryBox },
});
</script>

<style scoped>
.subtitle {
  margin-top: 2.25rem;
  margin-bottom: 1rem;
  font-size: 1.25rem;
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

.table-container {
  border: 1px solid #dfe8f9;
  border-radius: 4px;
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

.icon {
  width: 32px;
  height: 32px;
}
</style>
