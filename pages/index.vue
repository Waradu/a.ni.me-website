<template>
  <main class="index" :class="theme">
    <header class="titlebar">
      <div class="from">by <NuxtLink target="_blank" to="https://waradu.dev">Waradu</NuxtLink>
      </div>
      <div class="theme_toggle">
        <ThemeToggle @click="toggleTheme" />
      </div>
      <div class="github">
        <NuxtLink to="https://github.com/waradu/a.ni.me" aria-label="Github" target="_blank">
          <Github />
        </NuxtLink>
      </div>
    </header>
    <section class="hero">
      <div class="version" :class="version == '' ? 'hidden ' : '' + theme" :title="date != '' ? 'Released ' + date : ''">
        {{ version != '' ? version : '0.0.0' }} just released 🎉
      </div>
      <header class="title">
        <NuxtImg src="/images/hero.png" alt="anime japanese" style="max-height: 100px;" width="300" height="95"
          sizes="(max-width: 1000px) 200px, 300px" :class="theme" />
        <h1>A • NI • ME</h1>
      </header>
      <section class="description">
        Can't keep up with all the anime you've watched? Neither can we! <br>
        Organize your list, hide the <span class="special">for research purpose</span> ones and keep things under
        control. We
        won't tell.
      </section>
      <section class="download">
        <NuxtLink to="https://github.com/Waradu/a.ni.me/releases" target="_blank" class="primary button" :class="theme">
          <Windows /> Download for Windows
        </NuxtLink>
        <div :class="theme" class="button">
          <Apple /> Mac coming soon
        </div>
      </section>
    </section>
    <section class="preview">
      <div class="kanji an" :class="theme">暗</div>
      <div class="kanji mei" :class="theme">明</div>
      <div class="images">
        <NuxtImg src="/images/app.png" alt="app preview" :class="{ current: theme == 'light' }" width="900"
          sizes="900px" height="484" />
        <NuxtImg src="/images/app_dark.png" alt="app preview" class="dark" :class="{ current: theme == 'dark' }"
          width="900" sizes="900px" height="484" />
      </div>
    </section>
    <section class="text">
      All the anime, none of the clutter
    </section>
  </main>
</template>

<script lang="ts" setup>
const Apple = defineAsyncComponent(() => import('~/assets/svg/apple.svg'));
const Windows = defineAsyncComponent(() => import('~/assets/svg/windows.svg'));
const ThemeToggle = defineAsyncComponent(() => import('~/assets/svg/theme_toggle.svg'));
const Github = defineAsyncComponent(() => import('~/assets/svg/github.svg'));

const themeCookie = useCookie('a.ni.me-theme')
themeCookie.value = themeCookie.value == 'light' || themeCookie.value == 'dark' ? themeCookie.value : 'light'

const theme = ref(themeCookie.value);
const color = theme.value == "light" ? "#f5f5f5" : "#0c0c0c"

const version = ref("")
const date = ref("")

useHead({
  meta: [
    { name: 'theme-color', content: color }
  ]
})

const toggleTheme = () => {
  theme.value = theme.value == "light" ? "dark" : "light";
  themeCookie.value = theme.value
  const color = theme.value == "light" ? "#f5f5f5" : "#0c0c0c"

  useHead({
    meta: [
      { name: 'theme-color', content: color }
    ]
  })
}

onMounted(async () => {
  try {
    const data = await fetch("https://a.ni.me-backend.waradu.dev/api/latest");
    const json = await data.json()
    version.value = "v" + json.version;
    date.value = relativeTimeFromNow(json.pub_date);
  } catch {
    console.log("failed to fetch version");
    version.value = "A new version"
  }
})

function relativeTimeFromNow(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - inputDate.getTime()) / 1000);

  if (diffInSeconds < 60) return '1 minute ago';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2419200) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2419200)} months ago`;

  return "";
}
</script>

<style lang="scss">
.index {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
  gap: 60px;
  overflow: hidden;

  .titlebar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;

    .from {
      font-size: 14px;
      opacity: .7;
      width: 200px;

      a {
        color: currentColor;
      }
    }

    .theme_toggle {
      color: currentColor;
      text-decoration: underline;

      svg {
        width: 20px;
        height: 20px;
        opacity: .7;
        transition: .2s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }

    .github {
      width: 200px;
      display: flex;
      justify-content: end;

      a {
        color: currentColor;
        text-decoration: underline;
      }

      svg {
        width: 20px;
        height: 20px;
        opacity: .7;
        transition: .2s;
        cursor: pointer;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    .version {
      padding: 4px;
      padding-bottom: 5px;
      padding-inline: 12px;
      background-color: #00000010;
      border: 1px solid #00000020;
      border-radius: 100px;
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      font-size: 14px;
      transition: opacity .2s ease-in-out;
      cursor: default;

      &.dark {
        background-color: #ffffff10;
        border: 1px solid #ffffff20;
      }

      &.hidden {
        opacity: 0;
      }
    }

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      img {
        width: 300px;
        user-select: none;

        &.dark {
          filter: invert(1);
        }
      }

      h1 {
        font-size: 56px;
        font-weight: 900;
      }
    }

    .description {
      font-size: 16px;
      width: 540px;
      text-align: center;

      .special {
        font-style: italic;
      }
    }

    .download {
      display: flex;
      gap: 20px;

      .button {
        display: flex;
        gap: 10px;
        align-items: center;
        line-height: 1;
        outline: none;
        border: none;
        background-color: transparent;
        border-radius: 8px;
        color: #444444;
        user-select: none;
        font-size: 16px;
        text-decoration: none;
        padding: 12px 20px 10px 20px;

        svg {
          margin-top: 1px;
        }

        &.primary {
          color: white;
          background-color: black;
          cursor: pointer;
        }

        &.dark {
          color: #aaaaaa;

          &.primary {
            color: black;
            background-color: white;
          }
        }
      }
    }
  }

  .preview {
    position: relative;
    padding: 40px;

    .images {
      display: grid;
      user-select: none;

      img {
        width: 900px;
        border: 2px solid #00000020;
        border-radius: 12px;

        box-shadow: 0 4px 10px -1px #00000020;
        z-index: 2;
        backdrop-filter: blur(3px);
        position: relative;
        grid-column: 1 / 1;
        grid-row: 1 / 1;
        opacity: 0;
        pointer-events: none;

        &.dark {
          border: 2px solid #ffffff20;
        }

        &.current {
          opacity: 1;
          pointer-events: all;
        }
      }
    }

    .kanji {
      color: rgba(0, 0, 0, 0.15);
      font-family: Inter;
      font-size: 300px;
      font-weight: 700;
      position: absolute;
      z-index: 1;
      user-select: none;

      &.an {
        top: -70px;
        left: -50px;
      }

      &.mei {
        bottom: -55px;
        right: -30px;
      }

      &.dark {
        color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}

@media (max-width: 1000px) {
  .index {
    padding-top: 100px;
    padding-bottom: 80px;
    gap: 40px;

    .titlebar {
      padding: 15px;

      svg {
        width: 24px !important;
        height: 24px !important;
      }
    }

    .hero {
      gap: 40px;
      width: 100%;

      .title {
        gap: 0px;

        img {
          width: 200px;
          height: 63px;
        }

        h1 {
          font-size: 42px;
        }
      }

      .description {
        max-width: calc(100% - 40px);
      }

      .download {
        flex-direction: column;
        gap: 0;

        .button {
          justify-content: center;
        }
      }
    }

    .preview {
      align-self: flex-start;
      padding: 80px;
      padding-left: 80px;
      width: 100%;
      overflow: hidden;

      .kanji {
        font-size: 200px;

        &.an {
          top: -20px;
          left: 30px;
        }

        &.mei {
          bottom: -20px;
          right: 20px;
        }
      }
    }
  }
}
</style>
