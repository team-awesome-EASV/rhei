


<script>
export default {
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    }
  },
  render(createElement, { props }) {
    let svgHTML = "";
    try {
      svgHTML = require(`!html-loader!@/icons/icon-${props.icon}.svg`);
    } catch (e) {
      console.warn(
        `Unable to load "icon-${props.icon}.svg" icon. Verify it exists in the icons directory.`,
        e
      );
    }
    return createElement("span", {
      class: `app-icon app-icon-${props.icon}`,
      domProps: {
        innerHTML: svgHTML
      }
    });
  }
};
</script>

<style>
.app-icon {
  display: inline-block;
  width: 3rem;
}
</style>
