<template>
  <div class="h-8">
    <motion.div
      class="flex items-center h-full px-3 bg-elevated border border-border rounded-full text-sm select-none"
      :initial="{ opacity: 0, scale: 0 }"
      :animate="{ opacity: 1, scale: 1 }"
      v-if="!pending && data"
      :key="data.pub_date"
      :title="`Released ${relativeTimeFromNow(data.pub_date)}`"
      v-tippy
    >
      v{{ data.version != "" ? data.version : "0.0.0" }} just released 🎉
    </motion.div>
  </div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";

const { data, pending } = useLatest();

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
