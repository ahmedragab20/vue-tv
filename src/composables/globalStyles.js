import { watchEffect } from "vue";
import { useStore } from "vuex";

function globalStyles() {
  const store = useStore();
  const theme = store.state.theme;

  const bodyStyle = () => {
    document.body.style.background = theme.background;
    document.body.style.color = theme.color;

    setInterval(() => elementsStyle());
  };

  const elementsStyle = () => {
    const link = document.querySelectorAll("a");

    link.forEach((el) => (el.style.color = theme.color));

    const color = document.querySelectorAll(".color");
    color.forEach((el) => (el.style.color = theme.color));

    const reverseColor = document.querySelectorAll(".reverseColor");
    reverseColor.forEach((el) => (el.style.color = theme.background));

    const radius = document.querySelectorAll(".radius");
    radius.forEach((el) => (el.style.borderRadius = "8px"));
  };

  watchEffect(() => {
    bodyStyle();
    elementsStyle();
  });

  return { bodyStyle, elementsStyle };
}

export default globalStyles;
