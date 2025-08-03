// Export plugin for global use (in main.ts)
// Ex. createApp(App).use(VueLibPlugin).mount('#app')
export { default as VueLibPlugin } from "./plugin";

// Named exports for selective use (in other vue, ts file)
// Ex. import { ChocoButton, addPrefix } from 'vue-lib'
export * from "./components";
export * from "./utils";
