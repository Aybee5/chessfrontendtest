<template>
  <div class="chess-board-container">
    <div v-for="column in columns" :key="column" class="board-column">
      <button
        v-for="j in 8"
        :key="j"
        :class="[
          columns.indexOf(column) % 2 === j % 2 ? 'bg-light' : 'bg-primary',
          { 'edge-rows': column === 'a', 'edge-columns': j === 1 },
          'chess-cell',
        ]"
        :data-column="column"
        :data-row="j"
        @click="setSelectedCell(`${column}${j}`)"
        :ref="(el: HTMLButtonElement) =>  cellsRef![`${column}${j}`] = el"
      >
        <span class="placeholder"> {{ column }}{{ j }} </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const emit = defineEmits<{
  updateStatus: [status: string];
  // updateBoard: [board: Array<string>];
}>();

const columns = "abcdefgh";

const cellsRef = ref<Record<string, HTMLButtonElement>>({});

const selectedCells = ref<Array<string>>([]);
const activeCell = ref("");

const setSelectedCell = (cell: string) => {
  const oldCell = activeCell.value;
  activeCell.value = cell;

  cellsRef.value[oldCell]?.classList.remove("selected-already");
  if (!selectedCells.value.includes(activeCell.value)) {
    selectedCells.value.push(activeCell.value);
    cellsRef.value[activeCell.value].classList.add("selected-cell");
    emit("updateStatus", `Cell ${activeCell.value.toUpperCase()} selected`);
  } else {
    cellsRef.value[activeCell.value].classList.add("selected-already");
    emit("updateStatus", `Cell ${activeCell.value.toUpperCase()} already selected`);
  }
};

const resetBoard = () => {
  activeCell.value = "";
  for (const cell of selectedCells.value) {
    cellsRef.value[cell].classList.remove("selected-cell");
    cellsRef.value[cell].classList.remove("selected-already");
  }
  selectedCells.value = [];
  emit("updateStatus", "Board reset");
};

const removeLastSelected = () => {
  const lastSelected = selectedCells.value.pop();
  cellsRef.value[lastSelected!]?.classList.remove("selected-cell");
  emit("updateStatus", `Removed last selected cell: ${lastSelected?.toUpperCase()}`);
};

defineExpose({
  selectedCells,
  resetBoard,
  removeLastSelected,
});
</script>

<style lang="scss" scoped>
.chess-board-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
}

.board-column {
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  .bg-light {
    background-color: var(--primary-active);
  }
  .bg-primary {
    background-color: #b58863;
  }
}

.chess-cell {
  aspect-ratio: 1 / 1;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  cursor: pointer;
  transition: background-color 0.3s ease-out;
  .placeholder {
    visibility: hidden;
  }

  &:hover {
    .placeholder {
      visibility: visible;
      transition: visibility 0.3s ease;
    }
  }

  &.edge-rows {
    &::before {
      content: attr(data-row);
      position: absolute;
      left: -1.5rem;
    }
  }
  &.edge-columns {
    &::after {
      content: attr(data-column);
      position: absolute;
      bottom: -1.5rem;
    }
  }
}

.selected-cell {
  background-color: red !important;
}

.selected-already {
  background-color: #1a020b !important;
}
</style>
