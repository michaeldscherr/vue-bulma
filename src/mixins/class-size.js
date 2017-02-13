import {
    sizes,
} from 'core/modifiers';

export default {
    props: {
        size: {
            required: false,
            type: String,
            validator(value) {
                return sizes.some((mod) => (
                    mod === value
                ));
            },
        },
    },
    computed: {
        classSize() {
            return this.size ? [`is-${this.size}`] : [];
        },
    },
};
