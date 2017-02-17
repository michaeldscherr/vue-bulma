<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
import {
} from 'core/modifiers';
import {
    ClassPropMixin,
    ClassResponsiveMixin,
} from 'mixins';

export default {
    mixins: [
        ClassPropMixin,
        ClassResponsiveMixin,
    ],
    props: {
        multiline: {
            required: false,
            type: Boolean,
            default: false,
        },
        gapless: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            classStatic: [
                'columns',
            ],
            prefixes: {
                breakpoint: 'is',
                multiline: 'is',
                gapless: 'is',
            },
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classProp,
                ...this.classResponsive,
            ];
        },
    },
};
</script>
