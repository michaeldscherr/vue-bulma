<template>
<section
    :class="classes"
>
    <slot></slot>
</section>
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
                'section',
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
