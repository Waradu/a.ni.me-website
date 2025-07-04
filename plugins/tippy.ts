import VueTippy, { setDefaultProps } from "vue-tippy";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueTippy, {
    component: "Tippy",
  });
  setDefaultProps({
    content: (reference) => reference.getAttribute("title") ?? "",
    interactive: true,
    animation: "shift-away",
    theme: "custom",
    arrow: false,
    hideOnClick: false,
    delay: [200, 0],
  });
});
