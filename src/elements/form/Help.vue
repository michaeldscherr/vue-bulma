<template>
<span
    :class="classes"
>
    <slot></slot>
</span>
</template>

<script>
import {
    ClassValidationMixin,
} from 'mixins';

export default {
    mixins: [
        ClassValidationMixin,
    ],
    data() {
        return {
            classStatic: [
                'help',
            ],
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classValidation,
            ];
        },
    },
};
</script>
