import {
    styles,
} from 'core/modifiers';
import {
    normalizeToArray,
} from 'core/utils';

export default {
    props: {
        styles: {
            required: false,
            type: [String, Array],
            validator(value) {
                const valueNormalized = normalizeToArray(value);
                return valueNormalized.every((val) => (
                    styles.includes(val)
                ));
            },
        },
    },
    computed: {
        classStyle() {
            if (!this.styles) {
                return [];
            }
            const stylesNormalized = normalizeToArray(this.styles);
            return stylesNormalized.map((style) => (
                `is-${style}`
            ));
        },
    },
};
