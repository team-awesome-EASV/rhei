import { mapGetters } from "vuex";

export const createShadeAccentColor = {

    computed: {
        ...mapGetters(["userColor"]),
        loadColor() {
            return this.userColor;
        },
    },

    methods: {
        createShade(saturation, lightness) {
            return `hsl(${this.loadColor.hsl}, ${saturation}%, ${lightness}%)`;
        }
    }
};
