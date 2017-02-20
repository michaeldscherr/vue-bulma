<template>
<label
    :class="classes"
>
    <slot></slot>
</label>
</template>

<script>
export default {
    data() {
        return {
            classStatic: [
                'label',
            ],
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
            ];
        },
    },
};
</script>
