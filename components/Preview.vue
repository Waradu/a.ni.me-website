<template>
  <section class="p-20 overflow-hidden w-full lg:w-max lg:p-10 relative self-start lg:self-auto">
    <div
      class="select-none absolute z-10 font-bold text-[200px] lg:text-[300px] text-border -top-4 left-8 lg:-top-20 lg:-left-1"
    >
      漫
    </div>
    <div
      class="select-none absolute z-10 font-bold text-[200px] lg:text-[300px] text-border -bottom-4 right-8 lg:-bottom-20 lg:-right-0"
    >
      整
    </div>
    <div class="select-none grid">
      <img
        src="/images/app.png"
        alt="app preview"
        width="900"
        height="484"
        class="min-w-[900px] min-h-[484px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl shadow-[0_4px_10px_-1px_rgba(0,0,0,0.125)] block dark:hidden"
        loading="eager"
      />
      <img
        src="/images/app_dark.png"
        alt="app preview dark"
        width="900"
        height="484"
        class="w-[900px] relative z-20 border border-border pointer-events-none backdrop-blur-xs rounded-xl hidden dark:block"
        loading="eager"
      />
    </div>
  </section>
</template>
