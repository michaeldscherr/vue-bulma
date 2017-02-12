<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
import {
    screens,
} from 'core/modifiers/responsive-helpers';
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
        breakpoint: {
            required: false,
            type: String,
            validator(value) {
                return screens.includes(value);
            },
        },
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
    methods: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classResponsive,
                ...this.classResponsive,
            ];
        },
    },
};
</script>
