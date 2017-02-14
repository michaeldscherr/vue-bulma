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
    ClassStyleMixin,
} from 'mixins';

export default {
    mixins: [
        ClassSizeMixin,
        ClassThemeMixin,
        ClassStyleMixin,
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
                ...this.classStyle,
            ];
        },
    },
};
</script>
