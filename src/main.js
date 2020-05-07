import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { FormPlugin } from "bootstrap-vue";
import { vsSlider } from "vuesax";
import "vuesax/dist/vuesax.css";
import ColorPicker from "@radial-color-picker/vue-color-picker";
import VSwatches from "vue-swatches";
import { saveAsPng, saveAsJpeg } from "save-html-as-image";
import VueDraggableResizable from "vue-draggable-resizable";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "vue-swatches/dist/vue-swatches.css";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(FormPlugin);

Vue.use(vsSlider);

Vue.use(ColorPicker);

Vue.use(VSwatches);

Vue.use(saveAsPng,saveAsJpeg);

Vue.component("vue-draggable-resizable", VueDraggableResizable);

const node = document.getElementById("elementId");
saveAsPng(node, {  filename: "Report", printDate: true });
saveAsJpeg(node, {  filename: "Album", printDate: false });

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
