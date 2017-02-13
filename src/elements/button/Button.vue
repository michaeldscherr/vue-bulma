<template>
<button
    :class="classes"
>
    <slot></slot>
</button>
</template>

<script>
import {
    ClassSizeMixin,
} from 'mixins';

export default {
    mixins: [
        ClassSizeMixin,
    ],
    data() {
        return {
            classStatic: [
                'button',
            ],
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classSize,
            ];
        },
    },
};
</script>
