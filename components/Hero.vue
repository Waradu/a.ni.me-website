<template>
  <section class="flex flex-col gap-12">
    <div class="flex flex-col items-center gap-3">
      <img
        src="/images/hero.png"
        alt="anime japanese"
        style="max-height: 100px"
        width="300"
        height="95"
        sizes="(max-width: 1000px) 200px, 300px"
        class="w-[300px] select-none dark:invert"
        loading="eager"
      />
      <h1 class="text-6xl font-black">A • NI • ME</h1>
    </div>
    <div class="text-center w-[540px]">
      Can't keep up with all the anime you've watched? Neither can we!
      <br />
      Organize your list, hide the
      <span class="italic">for research purpose</span>
      ones and keep things under control. We won't tell.
    </div>
    <div class="flex gap-4">
      <NuxtLink
        to="https://github.com/Waradu/a.ni.me/releases"
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
  </section>
</template>

<script lang="ts" setup>
const Apple = defineAsyncComponent(() => import("~/assets/svg/apple.svg"));
const Linux = defineAsyncComponent(() => import("~/assets/svg/linux.svg"));
const Windows = defineAsyncComponent(() => import("~/assets/svg/windows.svg"));
</script>
