<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  attribute: "data-theme",
});
const toggleDark = useToggle(isDark);
</script>

<template>
  <div class="theme-toggle">
    <button @click="toggleDark()" aria-label="Toggle dark mode">
      <span :class="isDark ? 'material-symbols--light-mode' : 'circum--dark'"></span>
    </button>
  </div>
</template>

<style scoped>
.circum--dark {
  display: inline-block;
  width: 1em;
  height: 1em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.741 20.917a9.389 9.389 0 0 1-1.395-.105a9.141 9.141 0 0 1-1.465-17.7a1.177 1.177 0 0 1 1.21.281a1.273 1.273 0 0 1 .325 1.293a8.112 8.112 0 0 0-.353 2.68a8.266 8.266 0 0 0 4.366 6.857a7.628 7.628 0 0 0 3.711.993a1.242 1.242 0 0 1 .994 1.963a9.148 9.148 0 0 1-7.393 3.738M10.261 4.05a.211.211 0 0 0-.065.011a8.137 8.137 0 1 0 9.131 12.526a.224.224 0 0 0 .013-.235a.232.232 0 0 0-.206-.136a8.619 8.619 0 0 1-4.188-1.116a9.274 9.274 0 0 1-4.883-7.7a9.123 9.123 0 0 1 .4-3.008a.286.286 0 0 0-.069-.285a.184.184 0 0 0-.133-.057'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.fluent-emoji-flat--sun {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cg fill='none'%3E%3Cpath fill='%23ff822d' d='M13.638 3.202a2.936 2.936 0 0 1 4.724 0a2.936 2.936 0 0 0 3.25 1.055a2.936 2.936 0 0 1 3.822 2.778a2.936 2.936 0 0 0 2.008 2.763a2.936 2.936 0 0 1 1.46 4.494a2.936 2.936 0 0 0 0 3.416a2.936 2.936 0 0 1-1.46 4.494a2.936 2.936 0 0 0-2.008 2.763a2.936 2.936 0 0 1-3.823 2.778a2.936 2.936 0 0 0-3.249 1.055a2.936 2.936 0 0 1-4.724 0a2.936 2.936 0 0 0-3.25-1.055a2.936 2.936 0 0 1-3.822-2.778a2.936 2.936 0 0 0-2.008-2.763a2.936 2.936 0 0 1-1.46-4.494a2.936 2.936 0 0 0 0-3.416a2.936 2.936 0 0 1 1.46-4.494a2.936 2.936 0 0 0 2.008-2.763a2.936 2.936 0 0 1 3.823-2.778a2.936 2.936 0 0 0 3.249-1.055'/%3E%3Cpath fill='%23fcd53f' d='M25.062 21.232c-2.89 5.005-9.29 6.72-14.294 3.83c-5.005-2.89-6.72-9.29-3.83-14.294c2.89-5.005 9.29-6.72 14.294-3.83c5.005 2.89 6.72 9.29 3.83 14.294'/%3E%3C/g%3E%3C/svg%3E");
}

.material-symbols--light-mode {
  display: inline-block;
  width: 1em;
  height: 1em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 17q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.538 1.463T17 12q0 2.075-1.463 3.538T12 17m-7-4H1v-2h4zm18 0h-4v-2h4zM11 5V1h2v4zm0 18v-4h2v4zM6.4 7.75L3.875 5.325L5.3 3.85l2.4 2.5zm12.3 12.4l-2.425-2.525L17.6 16.25l2.525 2.425zM16.25 6.4l2.425-2.525L20.15 5.3l-2.5 2.4zM3.85 18.7l2.525-2.425L7.75 17.6l-2.425 2.525z'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
