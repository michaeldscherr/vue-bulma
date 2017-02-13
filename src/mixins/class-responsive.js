import {
    isString,
} from 'lodash';

export default {
    computed: {
        classResponsive() {
            if (!this.responsive) {
                return [];
            }
            if (isString(this.responsive)) {
                return [`is-${this.responsive}`];
            }
            const responsive = Object.entries(this.responsive);
            return responsive.map(([key, value]) => (
                `is-${value}-${key}`
            ));
        },
    },
};
