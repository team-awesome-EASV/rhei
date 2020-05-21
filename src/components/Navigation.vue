<template>
  <div class="nav-container">
    <div class="clipped">
      chuj
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0"
      height="0"
      viewBox="0 0 747.82 180.36"
    >
      <defs>
        <clipPath
          id="clipped"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.00133722018 0.00554446662)"
        >
          <path
            d="M747.8 62.7v91.8a25.9 25.9 0 0 1-25.9 25.9h-696A25.9 25.9 0 0 1 0 154.5V62.7A62.7 62.7 0 0 1 62.7 0H274.2a36.1 36.1 0 0 1 27.5 12.3c17.2 20 43.1 39.4 72.3 39.4S429 32.4 446.2 12.3A36.1 36.1 0 0 1 473.7 0H685.1A62.7 62.7 0 0 1 747.8 62.7Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <!-- <g id="b8ec6711-bca7-48a6-94ad-687dd3b4dc70" data-name="Layer 2">
        <g id="a168547a-6da8-495a-87b3-35e558a4b4f5" data-name="Layer 1">
          <g clip-path="url(#bb3e86a6-e069-48a6-9cf1-6756cd92ebb8)">
            <rect width="750" height="184" fill="blue" />
          </g>
        </g>
      </g> -->
    </svg>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped>
.nav-container {
  width: 100%;
  height: 13vh;
  filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  -webkit-filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  -moz-filter: drop-shadow(5px -4px 32px rgba(0, 0, 0, 0.5));
  position: fixed;
  bottom: 0;
}

.clipped {
  clip-path: url(#clipped);
  background:#fcfbf0;
  height: 13vh;
}
</style>
