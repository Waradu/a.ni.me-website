<template>
  <div class="size-full flex flex-col gap-8 justify-center items-center">
    <div class="flex flex-col gap-4 items-center" v-if="!pending && user">
      <span class="text-muted text-sm">Logged in as:</span>
      <div class="flex gap-2 items-center">
        <NuxtImg
          :src="user.avatar.large"
          alt="pb"
          class="size-10 rounded-full"
        />
        <div class="flex flex-col">
          <div class="text-xl">{{ user.name }}</div>
          <NuxtLink to="/api/auth" class="text-xs text-muted underline -mt-1">
            use another account?
          </NuxtLink>
        </div>
      </div>
      <div class="w-64 h-[1px] bg-border rounded-full my-2"></div>
      <NuxtLink
        :to="`a.ni.me://callback#${token}`"
        target="_blank"
        class="flex gap-2 items-center rounded-full text-theme-inverset bg-theme select-none p-2 pr-4 whitespace-nowrap"
      >
        <img src="/icon.png" class="size-7 rounded-full" />
        <span class="pb-[2px]">Open in desktop app</span>
      </NuxtLink>
      <span class="text-muted text-sm">or copy the token:</span>
      <div
        class="flex gap-2 items-center rounded-full text-alt border border-border select-none p-2 pl-4 whitespace-nowrap"
      >
        <input
          class="pb-[2px] max-w-48 overflow-hidden overflow-x-auto outline-none border-none"
          :value="token"
          readonly
        />
        <div
          class="size-7 flex items-center justify-center transition hover:bg-neutral-200 rounded-full"
          @click="copy"
        >
          <LucideCheck class="size-3.5" v-if="copied" />
          <LucideCopy class="size-3.5" v-else />
        </div>
      </div>
    </div>
    <span v-else-if="error">
      An error occurred while logging in.
      <NuxtLink to="/api/auth" class="text-muted underline">
        Try again?
      </NuxtLink>
    </span>
    <span class="flex gap-2 items-center text-muted" v-else>
      <LucideLoader class="size-4 animate-spin" />
      <span>Loading</span>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { LucideCheck, LucideCopy, LucideLoader, LucideLoader2 } from "lucide-vue-next";

const route = useRoute();

const token = route.hash.slice(1);

const copied = ref(false);
let timeout: NodeJS.Timeout | null = null;

const { data: user, pending, error } = useUser(token);

watch(error, (err) => {
  if (err) {
    console.error("Login error:", err);
  }
});

const copy = () => {
  useClipboard().copy(token);
  copied.value = true;
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  setTimeout(() => {
    copied.value = false;
    timeout = null;
  }, 500);
};
</script>
