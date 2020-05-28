<template>
  <section class="padding flex-col flex-space-between">
    <div class="flex-start">
      <input
        type="text"
        v-model="feeling"
        class="autocomplete-style inner-shadow"
        autocomplete="off"
        @focus="modal = true"
        @input="filterFeelings"
      />
      <button @click="updateFelings(feeling)" class="rounded-corners-button">Add</button>
    </div>

    <div v-if="filteredFeelings && modal" class="modal">
      <ul class="flex-start padding-sides wrap">
        <li
          class="modal-element"
          :style="{ 'background-color': createShade('50', '60') }"
          v-for="(feel, index) in filteredFeelings"
          :key="index"
          @click="setFeeling(feel)"
        >{{ feel }}</li>
      </ul>
    </div>
    <div v-if="allFeelings">
      <ul class="flex-start padding-sides wrap autocomplete-bottom-el">
        <li
          :style="{ 'background-color': createShade('100', '50') }"
          class="rounded-corners-button flex-space-around align-center"
          v-for="(feeling, index) in allFeelings"
          :key="index"
        >
          {{ feeling }}
          <div v-on:click="deleteElement(index)" class="svg-container">
<<<<<<< HEAD
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="minus-circle"
              class="svg-inline--fa fa-minus-circle fa-w-16"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColorgit "
                d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"
              />
            </svg>
=======
            <i class="fas fa-backspace" fill="#e43f5a"></i>
>>>>>>> d28e20e074ae8fd05718f036d25d51586a3c3cb9
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { createShadeAccentColor } from "./mixins/createShadeAccentColor";
export default {
  mixins: [createShadeAccentColor],
  props: {
    feelingsCheck: Boolean
  },
  data() {
    return {
      modal: false,
      feeling: "",
      filteredFeelings: [],
      allFeelings: [],
      feelings: [],
      feelingsChecked: this.feelingsCheck
    };
  },

  methods: {
    filterFeelings() {
      if (this.feeling) {
        this.filteredFeelings = this.feelings.filter(feeling => {
          return feeling.toLowerCase().startsWith(this.feeling.toLowerCase());
        });
      }
    },
    populateArray() {
      if (this.feelingsChecked) {
        this.feelings = this.$store.state.feelings;
      } else {
        this.feelings = this.$store.state.triggers;
      }
    },
    clearInput() {
      this.feeling = "";
    },
    setFeeling(feel) {
      this.feeling = feel;
      this.modal = false;
      var newFeeling = feel[0].toUpperCase() + feel.slice(1).toLowerCase();
      this.allFeelings.push(newFeeling);
      this.clearInput();
    },
    updateFelings(feel) {
      this.setFeeling(feel);
      // let newFeeling = feel[0].toUpperCase() + feel.slice(1).toLowerCase();
      // this.feelings.push(newFeeling);
      // this.clearInput();
    },
    deleteElement(index) {
      this.allFeelings.splice(index, 1);
    }
  },

  mounted() {
    this.populateArray();
  }
};
</script>

<style lang="scss" scoped>
section {
  flex-grow: 1;
}
.autocomplete-style {
  padding: 1.6rem 1.6rem;
  font-size: 1.6rem;
  margin-top: 5px;
  margin-bottom: 1rem;
  width: 100%;
}
.modal {
  flex-grow: 1;
}
.modal-element {
  margin: 0.5rem;
  font-size: 1.2rem;
  // background-color: var(--background-element-color);
  color: var(--secondary-background-color);
  padding: 0.5rem 1rem;
}

.rounded-corners-button {
  margin: 0.5rem;
  font-size: 1.6rem;
  // background-color: var(--main-accent-color);
  background: var(--main-accent-color);
  color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
.autocomplete-bottom-el {
  margin-top: 2rem;
}
.svg-container {
  height: 2rem;
  width: 2rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    height: 100%;
  }
}
.align-center {
  align-items: center;
}

.fa-backspace{
  color:#ffffff;
}
</style>