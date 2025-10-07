<script setup lang="ts">
import DragRegion from './drag-region.vue';
import { Icon as IconifyIcon } from '@iconify/vue';

defineOptions({ name: 'NavBar' });
</script>

<template>
  <DragRegion>
    <nav
      class="h-[calc(100%-1.4rem)] flex flex-col px-4 py-2 mt-[.7rem] mb-[7rem] border-r border-r-input text-tx-secondary"
    >
      <ul class="flex-auto">
        <li class="sidebar-item no-drag cursor-pointer text-tx-primary hover:text-tx-primary-hover">
          <iconify-icon icon="material-symbols:dark-mode" width="24" height="24" />
        </li>
      </ul>
      <ul class="flex flex-col gap-2">
        <li class="sidebar-item no-drag cursor-pointer hover:text-primary-subtle">
          <iconify-icon icon="material-symbols:dark-mode" width="24" height="24" />
        </li>
        <li class="sidebar-item no-drag cursor-pointer hover:text-primary-subtle">
          <iconify-icon icon="material-symbols:settings-outline" width="24" height="24" />
        </li>
      </ul>
    </nav>
  </DragRegion>
</template>
