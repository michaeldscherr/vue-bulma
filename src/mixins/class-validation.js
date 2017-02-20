import {
    validation,
} from 'core/modifiers';

export default {
    props: {
        validation: {
            required: false,
            type: String,
            validator(value) {
                return validation.includes(value);
            },
        },
    },
    computed: {
        classValidation() {
            return this.validation ? [`is-${this.validation}`] : [];
        },
    },
};
