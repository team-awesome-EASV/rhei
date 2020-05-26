.<template>
  <section class="color-picker-container padding-all outer-shadow">
    <div
      v-for="(color, index) in allColors"
      :key="index"
      :style="{ background: color.hex }"
      :title="color.hsl"
      class="color-element outer-shadow"
      @click="setAccentColor(color)"
    ></div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: false
    };
  },
  components: {
    logo: logo
  },
  computed: {
    ...mapGetters(["allColors", "accentColor"])
  },
  methods: {
    ...mapActions(["setAccentColor"])
  }
};
</script>

<style lang="scss" scoped>
.top-nav {
  align-items: center;
}
.border-bottom {
  height: 4px;
  background-color: #444444;
  width: 80%;
  border-radius: 2px;
}
.top-login-section {
  height: 25vh;
  background: url("../assets/welcome illustration.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right;
  display: flex;
}
.color-picker-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 2rem;
  margin-top: 1rem;
}
.color-element {
  height: 70px;
  width: 70px;
}
.no-shadow {
  box-shadow: 1px 1px 2px #d3d4db, -1px -1px 2px #ffffff;
}
.color-button {
  font-size: 1.4rem;
  font-weight: bold;
  border-radius: 10px;
  margin: 2rem 0;
  background-color: var(--main-accent-color);
  color: #ffffff;
  width: 100%;
}
</style>