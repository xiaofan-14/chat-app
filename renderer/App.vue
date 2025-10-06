<script setup lang="ts">
import { NConfigProvider } from "naive-ui";
import TitleBar from "./components/title-bar.vue";
import DragRegion from "./components/drag-region.vue";
</script>

<template>
  <NConfigProvider class="h-[100vh] w-[100vw] flex">
    <aside class="h-full flex flex-shrink-0 flex-col bg-red-300 px-2 w-[200px]">
      Aside
    </aside>
    <div class="flex-auto">
      <TitleBar>
        <DragRegion class="w-full"/>
      </TitleBar>
      Main
    </div>
  </NConfigProvider>
</template>
