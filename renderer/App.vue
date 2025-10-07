<script setup lang="ts">
import { NConfigProvider } from 'naive-ui';
import TitleBar from './components/title-bar.vue';
import DragRegion from './components/drag-region.vue';
import NavBar from './components/nav-bar.vue';

onMounted(async ()=>{
  console.log('App mounted')
  await nextTick()
  throw new Error('Test error')
})
</script>

<template>
  <NConfigProvider class="h-full w-[100vw] flex text-tx-primary">
    <aside class="sidebar h-full flex flex-shrink-0 flex-col w-[200px]">
      <div class="flex-auto flex">
        <NavBar />
        <div class="flex-auto p-2">
          conversation-list
        </div>
      </div>
    </aside>
    <div class="flex-auto">
      <TitleBar>
        <DragRegion class="w-full" />
      </TitleBar>
      Main
    </div>
  </NConfigProvider>
</template>

<style scoped>
.sidebar{
  background-color: var(--bg-color);
  box-shadow: -3px -2px 10px rgba(101,101,101,0.2);
}
</style>