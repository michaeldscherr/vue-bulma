import {
    isUndefined,
    isBoolean,
    isArray,
} from 'lodash';

function getPropClassValue(prop, prefix) {
    if (isBoolean(this[prop])) {
        return [`${prefix}-${prop}`];
    }
    if (isArray(this[prop])) {
        return this[prop].map((p) => (
            `${prefix}-${prop}-${p}`
        ));
    }
    return [`${prefix}-${this[prop]}`];
}

export default {
    data() {
        return {
            staticClasses: [],
            prefixes: {},
        };
    },
    computed: {
        propClasses() {
            const classes = [];
            this.$options._propKeys.forEach((prop) => {
                const prefix = this.prefixes[prop];
                if (isUndefined(this[prop]) || isUndefined(prefix)) {
                    return;
                }
                const propValue = getPropClassValue.call(this, prop, prefix);
                classes.push(...propValue);
            });
            return classes;
        },
        responsiveClasses() {
            if (!this.breakpoints) {
                return [];
            }
            const breakpoints = Object.entries(this.breakpoints);
            return breakpoints.map(([key, value]) => (
                `is-${value}-${key}`
            ));
        },
        classes() {
            return [
                ...this.staticClasses,
                ...this.propClasses,
                ...this.responsiveClasses,
            ];
        },
    },
};
