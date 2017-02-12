import modifiers from 'core/modifiers/modifiers';
import {
    getModClass,
} from 'core/utils';

export default {
    props: {
        size: {
            required: false,
            type: String,
            validator(value) {
                return modifiers.sizes.some((mod) => (
                    mod.split('-')[1] === value
                ));
            },
        },
    },
    computed: {
        classSize() {
            return this.size ? [getModClass(this.size)] : [];
        },
    },
};
