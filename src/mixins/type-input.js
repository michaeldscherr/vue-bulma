export default {
    props: {
        value: {
            required: false,
            default: '',
        },
        bmPlaceholder: {
            required: false,
            type: [String, Number],
        },
    },
    methods: {
        onInput(event) {
            this.$emit('input-value-update', event.target.value);
        },
    },
};
