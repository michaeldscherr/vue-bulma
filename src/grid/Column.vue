<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
    import sizes from 'core/modifiers/sizes';

    export default {
        props: {
            size: {
                required: false,
                type: Number,
                validator(value) {
                    return Object.keys(sizes).includes(value.toString());
                },
            },
        },
        computed: {
            classes() {
                const classes = { column: true };
                if (this.size) {
                    classes[sizes[this.size]] = true;
                }
                return classes;
            },
        },
    };
</script>
