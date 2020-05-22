import { mapGetters } from "vuex";

export const createShadeAccentColor = {


    // data() {
    //     return {};
    // },
    computed: {
        ...mapGetters(["accentColor"]),
        loadColor() {
            return this.accentColor;
        },

        // color1() {
        //     return `hsl(${this.loadColor.hsl}, 100%, 50%)`;
        // }
    },

    methods: {
        createShade(saturation, lightness) {
            return `hsl(${this.loadColor.hsl}, ${saturation}%, ${lightness}%)`;
        }
    }
};
