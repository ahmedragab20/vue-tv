import { reactive } from "@vue/runtime-core";

function carouselOptions(type) {
  if (type === "details") {
    const sliderSettings = reactive({
      itemsToShow: 1.5,
      transition: 500,
      autoplay: 3000,
      mouseDrag: true,
      touchDrag: true,
      pauseAutoplayOnHover: false,
      wrapAround: true,
      snapAlign: "center",
    });
    const breakpoints = reactive({
      321: {
        itemsToShow: 2.5,
      },
      480: {
        itemsToShow: 3.5,
      },
      1024: {
        itemsToShow: 1.5,
      },
      1420: {
        itemsToShow: 2.5,
      },
    });

    return {
      sliderSettings,
      breakpoints,
    };
  }
  if (type === "home") {
    const sliderSettings = reactive({
      itemsToShow: 1.5,
      transition: 500,
      autoplay: 3000,
      mouseDrag: true,
      touchDrag: true,
      pauseAutoplayOnHover: false,
      wrapAround: true,
      snapAlign: "center",
    });
    const breakpoints = reactive({
      321: {
        itemsToShow: 2,
      },
      480: {
        itemsToShow: 3.5,
      },
      769: {
        itemsToShow: 5.5,
      },
      1025: {
        itemsToShow: 6.5,
      },
      1920: {
        itemsToShow: 8.5,
      },
    });
    const mainSliderSettings = reactive({
      transition: 500,
      autoplay: 3000,
      mouseDrag: true,
      touchDrag: true,
      pauseAutoplayOnHover: false,
      wrapAround: true,
      snapAlign: "center",
    });
    const mainSliderBreakpoints = reactive({});

    return {
      sliderSettings,
      breakpoints,
      mainSliderSettings,
      mainSliderBreakpoints,
    };
  }
}

export default carouselOptions;
