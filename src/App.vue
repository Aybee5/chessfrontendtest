<script setup lang="ts">
import { ref } from "vue";
import ChessBoard from "./components/ChessBoard.vue";
import Header from "./components/Header.vue";
import ThemeToggle from "@/components/ThemeToggle.vue";

const status = ref("Select a cell to start highlighting");

const chessBoard = ref<InstanceType<typeof ChessBoard> | null>(null);
</script>

<template>
  <Header />
  <main>
    <section class="grid-container">
      <chess-board @updateStatus="status = $event" class="chess-board" ref="chessBoard" />

      <section class="actions-container">
        <div class="scroll-area">
          <div class="status-area">
            <p id="status">Status: {{ status }}</p>
            <ThemeToggle />
          </div>
          <div class="w-full">
            <TransitionGroup name="list" class="actions-ul" tag="ul">
              <li v-for="(cell, index) in chessBoard?.selectedCells" :key="index">
                {{ `0${index + 1}`.slice(-2) }}. {{ cell }}
                <span v-if="index === (chessBoard?.selectedCells?.length ?? 0) - 1">
                  <button
                    @click="chessBoard?.removeLastSelected"
                    class="iconoir--cancel"
                  />
                </span>
              </li>
            </TransitionGroup>
          </div>
          <div class="w-full">
            <button
              class="reset-board-button"
              @click="chessBoard?.resetBoard"
              :disabled="!chessBoard?.selectedCells.length"
            >
              Reset Board
            </button>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>

<style lang="scss">
main {
  padding: 1rem;
}

.w-full {
  width: 100%;
}

.block {
  display: block;
}

.status-area {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
}

.grid-container {
  display: grid;
  gap: 2.5rem;
  margin: 1.5rem;
  @media screen and (min-width: 1024px) {
    // grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
    // height: 100vh;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 2.5rem;
    grid-auto-rows: min-content;
  }
}

.chess-board {
  height: max-content;
  @media screen and (min-width: 1024px) {
    grid-column: 2 / span 6;
  }
}

.actions-container {
  background-color: var(--dark-default);
  padding: 1rem;
  border-radius: 0.5rem;
  // height: auto;
  border: 2px solid var(--dark-chess);
  grid-row:auto;
  @media screen and (min-width: 1024px) {
    grid-column: 8 / 12;
  }
  .scroll-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--light-text) var(--dark-chess);
  }
}

#status {
  color: var(--light-text);
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
    background-color: var(--dark-chess);
    border-radius: 0.5rem;
    color: var(--light-text);
  }
}

.iconoir--cancel {
  display: inline-block;
  width: 1em;
  height: 1em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243'/%3E%3C/svg%3E");
  background-color: var(--light-text);
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  cursor: pointer;
}

.reset-board-button {
  width: 100%;
  background-color: var(--dark-chess);
  padding: 1rem;
  border-radius: 0.5rem;
  color: var(--light-text);
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin-bottom: 2.5rem;
  &:hover:not([disabled]) {
    background-color: var(--dark-hover);
    cursor: pointer;
  }
  &[disabled] {
    opacity: 0.85;
    cursor: not-allowed;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.35s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
