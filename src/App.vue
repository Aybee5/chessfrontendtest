<script setup lang="ts">
import { ref } from "vue";
import ChessBoard from "./components/ChessBoard.vue";
const status = ref("Select a cell to start highlighting");

const chessBoard = ref<InstanceType<typeof ChessBoard> | null>(null);

const resetBoard = () => {
  chessBoard.value?.resetBoard();
};
</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main class="main">
    <section class="grid-container">
      <chess-board @updateStatus="status = $event" class="chess-board" ref="chessBoard" />

      <section class="actions-container">
        <div class="w-full">
          <p class="label">Status: {{ status }}</p>
        </div>
        <div class="w-full">
          <ul class="actions-ul">
            <li v-for="(cell, index) in chessBoard?.selectedCells">
              {{ index + 1 }}. {{ cell }}
              <span v-if="index === (chessBoard?.selectedCells?.length ?? 0) - 1">
                <button
                  @click="chessBoard?.removeLastSelected"
                  class="iconoir--cancel"
                ></button>
              </span>
            </li>
          </ul>
        </div>
        <div class="hidden md:block w-full">
          <button
            class="reset-board-button"
            @click="resetBoard"
            :disabled="!chessBoard?.selectedCells.length"
          >
            Reset Board
          </button>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>

<style lang="scss">
.main {
  padding: 1rem;
}

.w-full {
  width: 100%;
}

.block {
  display: block;
}

.grid-container {
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2.5rem;
    grid-auto-rows: min-content;
  }
}

.chess-board {
  height: max-content;
  @media screen and (min-width: 768px) {
    grid-column: 2 / span 6;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 2 / span 6;
  }
}

.actions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #333333;
  padding: 1rem;
  border-radius: 0.5rem;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    grid-column: 8 / 12;
  }
  @media screen and (min-width: 1024px) {
    grid-column: 8 / 12;
  }
}

.label {
  color: #ffffff;
}

.actions-ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  & > li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: #4a5568;
    border-radius: 0.5rem;
    color: #ffffff;
  }
}

.action-item {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  color: #ffffff;
  border-bottom: 2px solid #ffffff;
  transition: background-color 0.3s ease;
}

.action-item:hover {
  background-color: #4a5568;
}

.action-item.active {
  background-color: #1a202c;
}

.piece-color-container {
  width: 100%;
}

.piece-color-ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.piece-color-item {
  display: inline-block;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.piece-color-item:hover {
  border-color: #4a5568;
  border-width: 3px;
  border-style: solid;
}

.piece-color-item.active {
  border-color: #1a202c;
  border-width: 3px;
  border-style: dashed;
}

.text-light-text {
  color: #ffffff;
  margin-top: 0.5rem;
  font-style: italic;
}

.reset-board {
  margin-top: 0.25rem;
  cursor: pointer;
  color: #ff0000;
}

.check-chess-button {
  width: 100%;
  background-color: #4a5568;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.check-chess-button:hover {
  background-color: #2d3748;
}

.iconoir--cancel {
  display: inline-block;
  width: 1em;
  height: 1em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}

.reset-board-button {
  width: 100%;
  background-color: #4a5568;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #ffffff;
  font-weight: bold;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2d3748;
    cursor: pointer;
  }
}
</style>
