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
    ClassThemeMixin,
    ClassStateMixin,
} from 'mixins';

export default {
    mixins: [
        ClassSizeMixin,
        ClassThemeMixin,
        ClassStateMixin,
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
                ...this.classTheme,
                ...this.classState,
            ];
        },
    },
};
</script>
