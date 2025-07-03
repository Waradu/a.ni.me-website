<template>
  <header
    class="w-full select-none h-14 flex p-5 items-center justify-between text-muted"
  >
    <div class="text-sm w-48">
      by
      <NuxtLink
        class="transition hover:text-theme underline"
        target="_blank"
        to="https://waradu.dev"
      >
        Waradu
      </NuxtLink>
    </div>
    <div
      class="flex p-2 transition hover:text-theme"
      @click="toggle"
      :key="mode.value"
      title="Toggle darkmode"
      v-tippy="{ offset: [0, -2] }"
    >
      <component
        :is="mode.value == 'dark' ? LucideSun : LucideMoon"
        class="size-5"
      />
    </div>
    <div class="w-48 flex justify-end">
      <NuxtLink to="https://github.com/waradu/a.ni.me" target="_blank">
        <SvglGitHubLogo
          class="!size-5 dark:invert transition hover:text-theme"
        />
      </NuxtLink>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { LucideMoon, LucideSun } from "lucide-vue-next";
import { SvglGitHubLogo } from "@selemondev/svgl-vue";

const mode = useColorMode();

const toggle = () =>
  (mode.preference = mode.value == "dark" ? "light" : "dark");
</script>
