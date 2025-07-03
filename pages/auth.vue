<template>
  <div class="size-full flex flex-col gap-8 justify-center items-center">
    <h1 class="text-2xl font-medium">Successfully logged in</h1>
    <div class="flex flex-col gap-2 items-center">
      <NuxtLink
        to="https://github.com/Waradu/a.ni.me/releases"
        target="_blank"
        class="flex gap-2 items-center rounded-full text-theme-inverset bg-theme select-none p-2 pr-4 whitespace-nowrap"
      >
        <img src="/icon.png" class="size-7 rounded-full" />
        <span class="pb-[2px]">Open in desktop app</span>
      </NuxtLink>
      <span>or</span>
      <NuxtLink
        to="https://github.com/Waradu/a.ni.me/releases"
        target="_blank"
        class="flex gap-2 items-center rounded-full text-alt border border-border select-none p-2 pl-4 whitespace-nowrap"
      >
        <span class="pb-[2px]">Copy token</span>
        <div class="size-7 flex items-center justify-center">
          <LucideCopy class="size-4" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LucideCopy } from "lucide-vue-next";

const route = useRoute();

const token = route.hash.slice(1);
</script>
