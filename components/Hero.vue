<template>
  <div class="w-full flex flex-col items-center gap-16 pt-14">
    <div class="h-8">
      <motion.div
        class="flex items-center h-full px-3 bg-elevated border border-border rounded-full text-sm"
        :initial="{ opacity: 0, scale: 0 }"
        :animate="{ opacity: 1, scale: 1 }"
        v-if="version"
      >
        v{{ version != "" ? version : "0.0.0" }} just released 🎉
      </motion.div>
    </div>
    <section class="flex flex-col gap-12">
      <div class="flex flex-col items-center gap-3">
        <img
          src="/images/hero.png"
          alt="anime japanese"
          style="max-height: 100px"
          width="300"
          height="95"
          sizes="(max-width: 1000px) 200px, 300px"
          class="w-[300px] select-none"
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
    </section>
    <section class="flex gap-4">
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
    </section>
    <section class="p-10 relative">
      <div class="select-none absolute z-10 font-bold text-[300px] text-border -top-20 -left-12">漫</div>
      <div class="select-none absolute z-10 font-bold text-[300px] text-border -bottom-20 -right-4">整</div>
      <div class="select-none">
        <img
          src="/images/app.png"
          alt="app preview"
          width="900"
          sizes="900px"
          height="484"
          class="w-[900px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl shadow-[0_4px_10px_-1px_rgba(0,0,0,0.125)]"
          v-if="mode.value == 'light'"
        />
        <img
          src="/images/app_dark.png"
          alt="app preview"
          width="900"
          sizes="900px"
          height="484"
          class="w-[900px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl"
          v-if="mode.value == 'dark'"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";

const Apple = defineAsyncComponent(() => import("~/assets/svg/apple.svg"));
const Linux = defineAsyncComponent(() => import("~/assets/svg/linux.svg"));
const Windows = defineAsyncComponent(() => import("~/assets/svg/windows.svg"));

const mode = useColorMode();

const version = ref("");
const date = ref("");

onMounted(async () => {
  try {
    const data = await fetch("https://a.ni.me-backend.waradu.dev/api/latest");
    const json = await data.json();
    version.value = json.version;
    date.value = relativeTimeFromNow(json.pub_date);
  } catch {
    console.log("failed to fetch version");
    version.value = "A new version";
  }
});

function relativeTimeFromNow(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - inputDate.getTime()) / 1000
  );

  if (diffInSeconds < 60) return "1 minute ago";
  if (diffInSeconds < 3600)
    return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400)
    return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800)
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2419200)
    return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000)
    return `${Math.floor(diffInSeconds / 2419200)} months ago`;

  return "";
}
</script>
