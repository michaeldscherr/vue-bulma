import {
    themes,
} from 'core/modifiers';

export default {
    props: {
        theme: {
            required: false,
            type: String,
            validator(value) {
                return themes.includes(value);
            },
        },
    },
    computed: {
        classTheme() {
            return this.theme ? [`is-${this.theme}`] : [];
        },
    },
};
