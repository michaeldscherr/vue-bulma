<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
export default {
    props: {
        fluid: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    computed: {
        classes() {
            return {
                container: true,
                'is-fluid': this.fluid,
            };
        },
    },
};
</script>
