import { createApp } from "vue";
import DummyView from "../components/DummyView.vue";
import "../assets/tailwind.css";

const ROOT_ELEMENT_ID = "crx-root";

// insert #crx-root
const root = document.createElement("div");
root.id = ROOT_ELEMENT_ID;
root.className = "twcrx-fixed twcrx-top-0 twcrx-left-0 twcrx-z-10";
document.body.append(root);

// mount App.vue
const app = createApp(DummyView).mount(root);
