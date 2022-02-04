import { computed, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";

function darkMode() {
  const store = useStore();

  const isDark = JSON.parse(localStorage.getItem("dark")) || ref(false);
  const theme = computed(() => store.state.theme);

  const toggleDarkMode = () => {
    if (!localStorage.getItem("dark")) {
      isDark.value = !isDark.value;
    } else {
      if (JSON.parse(localStorage.getItem("dark")) == true) {
        localStorage.setItem("dark", false);
      } else {
        if (JSON.parse(localStorage.getItem("dark")) == false) {
          localStorage.setItem("dark", true);
        }
      }
    }
  };

  const isDarkHandler = () => {
    if (!localStorage.getItem("dark")) {
      localStorage.setItem("dark", true);
    } else {
      let dark = JSON.parse(localStorage.getItem("dark"));

      store.commit("SWITCH_THEME", dark == true ? "dark" : "lite");
    }
  };

  watchEffect(() => {
    setInterval(() => isDarkHandler());
  });

  return { theme, isDarkHandler, isDark, toggleDarkMode };
}

export default darkMode;
