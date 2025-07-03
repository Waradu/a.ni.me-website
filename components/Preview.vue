<template>
  <section class="p-10 relative">
    <div
      class="select-none absolute z-10 font-bold text-[300px] text-border -top-20 -left-12"
    >
      漫
    </div>
    <div
      class="select-none absolute z-10 font-bold text-[300px] text-border -bottom-20 -right-4"
    >
      整
    </div>
    <div class="select-none">
      <img
        src="/images/app.png"
        alt="app preview"
        width="900"
        sizes="900px"
        height="484"
        class="w-[900px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl shadow-[0_4px_10px_-1px_rgba(0,0,0,0.125)] block dark:hidden"
        loading="eager"
      />
      <img
        src="/images/app_dark.png"
        alt="app preview dark"
        width="900"
        sizes="900px"
        height="484"
        class="w-[900px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl hidden dark:block"
        loading="eager"
      />
    </div>
  </section>
</template>
