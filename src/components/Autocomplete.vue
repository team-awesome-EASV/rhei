<template>
  <section class="flex-space-around padding flex-col flex-space-between">
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
      <ul class="flex-space-around padding-sides wrap">
        <li
          class="modal-element"
          v-for="feel in filteredFeelings"
          :key="feel"
          @click="setFeeling(feel)"
        >{{feel}}</li>
      </ul>
    </div>
    <div v-if="allFeelings">
      <ul class="flex-start padding-sides wrap">
        <li class="rounded-corners-button" v-for="feeling in allFeelings" :key="feeling">{{feeling}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modal: false,
      feeling: "",
      filteredFeelings: [],
      allFeelings: [],
      feelings: ["Sad", "Happy", "Joyfull", "Desperate", "Lonely"]
    };
  },
  computes: {},
  methods: {
    filterFeelings() {
      this.filteredFeelings = this.feelings.filter(feeling => {
        return feeling.toLowerCase().startsWith(this.feeling.toLowerCase());
      });
    },
    setFeeling(feel) {
      this.feeling = feel;
      this.modal = false;
      let newFeeling = feel[0].toUpperCase() + feel.slice(1).toLowerCase();
      this.allFeelings.push(newFeeling);
    },
    updateFelings(feel) {
      this.setFeeling(feel);
      let newFeeling = feel[0].toUpperCase() + feel.slice(1).toLowerCase();
      this.feelings.push(newFeeling);
    }
  },

  mounted() {
    this.filterFeelings();
  }
};
</script>

<style lang="scss" scoped>
section {
  flex-grow: 1;
  min-height: 50vh;
}
.autocomplete-style {
  padding: 1.6rem 1.6rem;
  font-size: 1.6rem;
  margin-top: 5px;
  background: inherit;
  width: 100%;
}
.modal {
  flex-grow: 1;
}
.modal-element {
  margin: 0.5rem;
  font-size: 1.2rem;
  background-color: var(--background-element-color);
  color: var(--secondary-background-color);
  padding: 0.5rem 1rem;
}

.rounded-corners-button {
  margin: 0.5rem;
  font-size: 1.2rem;
  background-color: var(--main-accent-color);
  color: var(--secondary-background-color);
  padding: 0.5rem 2rem;
  border-radius: 1rem;
}
.flex-col {
  display: flex;
  flex-direction: column;
}
</style>