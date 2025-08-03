import type { App } from "vue";
import ChocoButton from "./components/ChocoButton.vue";

export default {
  install(app: App) {
    app.component("ChocoButton", ChocoButton);
  },
};
