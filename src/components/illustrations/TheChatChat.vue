
<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 478.28 263.34">
    <g id="chat">
      <rect
        id="chat-background"
        width="286"
        height="208"
        rx="22.19"
        :fill="createShade('20', '80')"
        opacity="0.7"
      />
      <g id="speech-modal-right">
        <g id="speech-modal-right-background" :fill="createShade('70', '90')">
          <g id="bubble">
            <rect x="180.14" y="62" width="298.14" height="162.42" rx="15.31" />
            <polygon points="206 220 206 248.9 247.54 220 206 220" />
          </g>
          <path
            id="lines-bcg"
            d="M305.79,224.42H463a15.35,15.35,0,0,0,15.32-15.32V77.32A15.36,15.36,0,0,0,463,62H305.79Z"
            :fill="createShade('50', '80')"
          />
          <path
            id="top"
            d="M478.15,75.35A15.37,15.37,0,0,0,463,62H195.46a15.36,15.36,0,0,0-15.19,13.35Z"
            :fill="createShade('80', '40')"
          />
        </g>
        <g id="lines-circle">
          <g id="lc-lines">
            <line
              x1="332.71"
              y1="130.08"
              x2="451.36"
              y2="130.08"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="12"
            />
            <line
              x1="332.71"
              y1="149.78"
              x2="451.36"
              y2="149.78"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="12"
            />
            <line
              x1="332.71"
              y1="169.48"
              x2="451.36"
              y2="169.48"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="12"
            />
            <line
              x1="332.71"
              y1="189.18"
              x2="451.36"
              y2="189.18"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-miterlimit="10"
              stroke-width="12"
            />
          </g>
          <circle
            id="lc-circle"
            cx="341.69"
            cy="102.72"
            r="12.04"
            fill="#fff"
          />
        </g>
      </g>
      <g id="speech-modal-left" :stroke="createShade('100', '50')">
        <path
          id="circle"
          d="M36.42,61.73A14.17,14.17,0,1,1,50.58,75.9h0A14.16,14.16,0,0,1,36.42,61.73Z"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
        <path
          id="line2"
          d="M78.4,61.73H178"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
        <path
          id="line1"
          d="M49.58,97.25H197.06"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
        <path
          id="bubble-2"
          data-name="bubble"
          d="M40.92,27A18.39,18.39,0,0,0,22.53,45.39v93a18.39,18.39,0,0,0,18.39,18.39H169.67l34.16,43.14-.21-43.22h8a18.38,18.38,0,0,0,18.39-18.38v-93A18.39,18.39,0,0,0,211.66,27Z"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="5"
        />
      </g>
      <text
        transform="translate(7.33 226.72) scale(0.99 1)"
        font-size="61.76"
        fill="#3d3d3d"
        font-family="Poppins, sans-serif"
        font-weight="400"
      >
        Chat
      </text>
    </g>
  </svg>
</template>

<script>
import { createShadeAccentColor } from "../mixins/createShadeAccentColor";

export default {
  name: "TheChatChat",
  mixins: [createShadeAccentColor],
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
</style>