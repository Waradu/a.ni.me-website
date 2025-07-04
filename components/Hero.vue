<template>
  <section class="flex flex-col gap-8 lg:gap-12 items-center">
    <Version />
    <div class="flex flex-col items-center gap-3">
      <img
        src="/images/hero.png"
        alt="anime japanese"
        style="max-height: 100px"
        sizes="(max-width: 1000px) 200px, 300px"
        class="w-56 lg:w-72 select-none dark:invert"
        loading="eager"
      />
      <h1 class="text-5xl lg:text-6xl font-black">A • NI • ME</h1>
    </div>
    <div class="text-center w-[calc(100%-40px)] lg:w-[540px]">
      Can't keep up with all the anime you've watched? Neither can we!
      <br class="hidden lg:inline" />
      Organize your list, hide the
      <span class="italic">for research purpose</span>
      ones and keep things under control. We won't tell.
    </div>
    <div class="flex flex-col items-center gap-2 lg:gap-4" v-if="status == 'success' || status == 'error'">
      <div class="flex gap-2 lg:gap-4 flex-col lg:flex-row items-center">
        <NuxtLink
          :to="windowsDownloadUrl"
          target="_blank"
          class="flex gap-2 items-center rounded-lg text-theme-inverset bg-theme select-none px-4 py-3 whitespace-nowrap"
        >
          <Windows class="size-4" /> Download for Windows
        </NuxtLink>
        <div
          class="flex gap-2 items-center rounded-lg text-alt select-none px-4 py-3 whitespace-nowrap"
        >
          <Apple class="size-4" /> Mac coming soon
        </div>
      </div>
      <NuxtLink
        to="https://github.com/Waradu/a.ni.me/releases"
        class="text-muted/50 underline text-xs"
        target="_blank"
      >
        All downloads here
      </NuxtLink>
    </div>
    <span class="flex gap-2 items-center text-muted" v-else>
      <LucideLoader class="size-4 animate-spin" />
      <span>Loading downloads</span>
    </span>
  </section>
</template>

<script lang="ts" setup>
import { LucideLoader } from "lucide-vue-next";

const Apple = defineAsyncComponent(() => import("~/assets/svg/apple.svg"));
const Linux = defineAsyncComponent(() => import("~/assets/svg/linux.svg"));
const Windows = defineAsyncComponent(() => import("~/assets/svg/windows.svg"));

const { data, status } = useLatest();

const windowsDownloadUrl = computed(() => {
  return data.value && "windows-x86_64" in data.value.platforms
    ? data.value.platforms["windows-x86_64"].url
    : "https://github.com/Waradu/a.ni.me/releases";
});
</script>
