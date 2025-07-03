export default defineNuxtPlugin(() => {
  window.addEventListener("storage", (event) => {
    if (event.key === "a.ni.me-theme") {
      const newMode = event.newValue;
      if (newMode) {
        const colorMode = useColorMode();
        if (colorMode.value !== newMode) {
          colorMode.preference = newMode;
        }
      }
    }
  });
});
