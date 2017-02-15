import {
    states,
} from 'core/modifiers';
import {
    normalizeToArray,
} from 'core/utils';

export default {
    props: {
        state: {
            required: false,
            type: [String, Array],
            validator(value) {
                const valueNormalized = normalizeToArray(value);
                return valueNormalized.every((val) => (
                    states.includes(val)
                ));
            },
        },
    },
    computed: {
        classState() {
            if (!this.state) {
                return [];
            }
            const stateNormalized = normalizeToArray(this.state);
            return stateNormalized.map((style) => (
                `is-${style}`
            ));
        },
    },
};
