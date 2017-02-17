import {
    isString,
} from 'lodash';
import {
    responsive,
} from 'core/modifiers';

export default {
    props: {
        responsive: {
            required: false,
            type: [String, Object],
            validator(value) {
                if (isString(value)) {
                    return responsive.screens.includes(value);
                }
                return Object.entries(value).every(([key, val]) => (
                    responsive.screens.includes(key) &&
                    responsive.sizes.includes(val)
                ));
            },
        },
    },
    computed: {
        classResponsive() {
            if (!this.responsive) {
                return [];
            }
            if (isString(this.responsive)) {
                return [`is-${this.responsive}`];
            }
            const entries = Object.entries(this.responsive);
            return entries.map(([key, value]) => (
                `is-${value}-${key}`
            ));
        },
    },
};
