<template>
  <div id="accountSelector">
    <div class="btn-group" role="group">
      <div
        id="selectedAccount"
        class="rounded-start border border-secondary d-flex align-items-center ps-3"
      >
        <div class="image-cropper me-3">
          <img src="images/accountSelectorPlaceholder.png" />
        </div>
        <span class="me-2">terra1234&hellip;abcd</span>
      </div>
      <div class="btn-group">
        <button
          class="btn btn-outline-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
          data-bs-display="static"
        >
          Select
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li class="dropdown-item d-flex align-items-center">
            <div class="image-cropper me-3">
              <img src="images/accountSelectorPlaceholder.png" />
            </div>
            <div class="me-2">
              terra1234&hellip;abcd
            </div>
          </li>
          <li class="dropdown-item d-flex align-items-center">
            <div class="image-cropper me-3">
              <img src="images/accountSelectorPlaceholder.png" />
            </div>
            <div class="me-2">
              terra9999&hellip;ffff
            </div>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <li class="dropdown-item d-flex align-items-center">
            <div>Add / remove addresses</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountSelector",
});
</script>

<style scoped>
#selectedAccount {
  height: 55px;
  width: 215px;
}

.image-cropper {
  width: 36px;
  height: 36px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
}

.image-cropper img {
  width: 36px;
  height: 36px;
}

.dropdown-toggle {
  width: 90px;
}

.dropdown-item {
  transition: all 0.25s;
}

.dropdown-item:hover {
  cursor: pointer;
}
</style>
