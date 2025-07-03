<template>
  <section class="w-full flex flex-col items-center gap-10">
    <motion.div
      class="pt-1 pb-[5px] px-3 bg-elevated border border-border rounded-full text-sm"
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1 }"
      v-if="version"
    >
      v{{ version != "" ? version : "0.0.0" }} just released 🎉
    </motion.div>
    <div>
      <NuxtImg
        src="/images/hero.png"
        alt="anime japanese"
        style="max-height: 100px"
        width="300"
        height="95"
        sizes="(max-width: 1000px) 200px, 300px"
        class="w-[300px] select-none"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";

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
