<template>
  <nav class="header">
    <div class="container">
      <div>
        <span class="title">Chess Board Highlighter</span>
      </div>
      <div class="made-by">
        <a
          href="https://github.com/Aybee5/chessfrontendtest"
          target="_blank"
          class="link"
        >
          View Source C<span class="material-symbols--code"></span>de
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.header {
  background-color: var(--dark-default);
  border-color: #e5e7eb;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-bottom: 1rem;
  /* border-radius: 0.25rem; */
  color: #f3f4f6;
}

.container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
}

.title {
  align-self: center;
  font-size: 1.5rem;
  font-weight: 600;
  white-space: nowrap;
  color: #f3f4f6;
}

.made-by {
  color: #f3f4f6;
  font-size: 0.875rem;
}

.heart-icon {
  align-self: center;
  color: red;
}

.link {
  display: flex;
  align-items: center;
  color: #3b82f6;
}

.link:hover {
  color: #2563eb;
}

.material-symbols--code {
  display: inline-block;
  width: 1em;
  height: 1em;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8 18l-6-6l6-6l1.425 1.425l-4.6 4.6L9.4 16.6zm8 0l-1.425-1.425l4.6-4.6L14.6 7.4L16 6l6 6z'/%3E%3C/svg%3E");
  background-color: currentColor;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
}
</style>
