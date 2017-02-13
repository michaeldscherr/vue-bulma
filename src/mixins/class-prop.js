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
            prefixes: {},
        };
    },
    computed: {
        classProp() {
            const classes = [];
            this.$options._propKeys.forEach((prop) => {
                const prefix = this.prefixes[prop];
                if (
                    isUndefined(this[prop]) ||
                    isUndefined(prefix) ||
                    !this[prop]
                ) {
                    return;
                }
                classes.push(
                    ...getPropClassValue.call(this, prop, prefix)
                );
            });
            return classes;
        },
    },
};
