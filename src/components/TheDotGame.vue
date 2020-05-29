<template>
  <div class=".dots-canvas-container">
    <canvas
      id="canvas_dots"
      @mousedown="checkForDot"
      key="username-input"
    ></canvas>
    <div style="display:none">
      <img id="image" :src="src" alt="" ref="obrazek" />
    </div>
  </div>
</template>

<script>
import { createShadeAccentColor } from "./mixins/createShadeAccentColor";

export default {
  name: "the-dot-game",
  mixins: [createShadeAccentColor],
  data() {
    return {
      canvas: null,
      ctx: null,
      dots: [
        { x: 0.04, y: 0.99 }, //1
        { x: 0.11, y: 0.85 }, //2
        { x: 0.185, y: 0.75 }, // 3
        { x: 0.37, y: 0.54 }, //4
        { x: 0.485, y: 0.43 }, //5
        { x: 0.8, y: 0.25 }, //6
        { x: 0.999, y: 0.15 }, //7
        { x: 0.9, y: 0.02 }, //8
        { x: 0.8, y: 0.01 }, //9
        { x: 0.6, y: 0.08 }, //10
        { x: 0.35, y: 0.31 }, //11
        { x: 0.2, y: 0.41 }, //12
        { x: 0.05, y: 0.555 }, //13
        { x: 0.02, y: 0.72 }, //14
        { x: 0.3, y: 0.72 }, //15
        { x: 0.5, y: 0.69 }, //16
        { x: 0.8, y: 0.62 }, //17
        { x: 0.99, y: 0.47 }, //18
        { x: 0.97, y: 0.3 }, //19
        { x: 0.999, y: 0.15 } //20
      ],

      dotsRelative: [],
      //   col: null,
      clickedDot: null,
      listner: null,
      imageHeight: null,
      imageWidht: null,
      imageXcoord: null,
      src: require("@/assets/plant-2.svg")
    };
  },
  methods: {
    prepCanvas() {
      var res = window.devicePixelRatio || 1;

      let imgH = 0.165 * window.innerWidth * 4.5;
      let imgW = 0.12 * window.innerWidth * 4.5;
      let imgCornerTL = window.innerWidth / 2 - imgW / 2; // img x

      this.imageHeight = Math.round(imgH);
      this.imageWidht = Math.round(imgW);
      this.imageXcoord = Math.round(imgCornerTL);
      this.dotsRelative.splice(0, this.dotsRelative.length);

      this.canvas = document.getElementById("canvas_dots");
      this.ctx = this.canvas.getContext("2d");
      this.myWidth = window.innerWidth * res;
      this.myHeight = window.innerHeight * res;

      this.canvas.height = this.myHeight;
      this.canvas.width = this.myWidth;

      this.canvas.style.width = window.innerWidth + "px";
      this.canvas.style.height = window.innerHeight + "px";
      this.ctx.scale(res, res);

      this.drawDots();
    },

    drawDots() {
      for (let i = 0; i < this.dots.length; i++) {
        this.timeDots(i);
      }
    },

    timeDots(i) {
      let self = this;
      setTimeout(function() {
        let d = self.dots[i];
        let dotX = self.imageXcoord + d.x * self.imageWidht;
        let dotY = 50 + d.y * self.imageHeight;

        let updatedDot = { x: Math.round(dotX), y: Math.round(dotY) };

        function populateUpdated() {
          self.dotsRelative.push(updatedDot);
        }
        populateUpdated();

        self.ctx.beginPath();
        self.ctx.arc(dotX, dotY, 5, 0, 2 * Math.PI);
        //change dot color
        self.ctx.fillStyle = self.createShade("80", "70");
        self.ctx.fill();
        self.ctx.closePath();
        //change numbers color
        self.ctx.fillStyle = self.createShade("80", "80");
        self.ctx.font = "20px Poppins";
        self.ctx.fillText(`${i + 1}`, dotX, dotY + 30);
      }, 2000 * i);
    },

    circleCollision: function(c1, c2) {
      var a = c1.r + c2.r,
        x = c1.x - c2.x,
        y = c1.y - c2.y;

      if (a > Math.sqrt(x * x + y * y)) return true;
      else return false;
    },

    checkForDot: function(e) {
      var i = 0;
      var col = null;
      for (i; i < this.dotsRelative.length; i++) {
        var d = this.dotsRelative[i];
        let c1 = { x: d.x, y: d.y, r: 10 };
        let c2 = { x: e.pageX, y: e.pageY, r: 5 };

        if (this.circleCollision(c1, c2)) {
          col = d;
        }
      }

      if (col !== null) {
        if (this.clickedDot !== null) this.drawLine(col);
        this.clickedDot = col;
        this.checkforlast();
      } else this.clickedDot = null;
    },

    checkforlast() {
      let image = this.$refs.obrazek;
      let imgH = 0.165 * window.innerWidth * 5;
      let imgW = 0.12 * window.innerWidth * 5;
      let imgCornerTL = window.innerWidth / 2 - imgW / 2;

      let lastDot = this.dotsRelative[this.dotsRelative.length - 1];
      if (this.clickedDot === lastDot && this.dotsRelative.length > 19) {
        this.ctx.globalCompositeOperation = "destination-over";
        this.ctx.drawImage(image, imgCornerTL, 50, imgW, imgH);
        this.$emit("showPicture");
      }
    },

    drawLine: function(toDot) {
      this.ctx.beginPath();
      this.ctx.moveTo(this.clickedDot.x, this.clickedDot.y);
      this.ctx.lineTo(toDot.x, toDot.y);
      this.ctx.lineWidth = 5;
      this.ctx.lineCap = "round";
      this.ctx.strokeStyle = this.createShade("80", "80");
      this.ctx.stroke();
      this.ctx.closePath();
    }
  },
  mounted() {
    this.prepCanvas();

    window.addEventListener("resize", this.prepCanvas);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.prepCanvas);
  }
};
</script>

<style lang="scss" scoped>
</style>