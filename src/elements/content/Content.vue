<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
export default {
    data() {
        return {
            classStatic: [
                'content',
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
