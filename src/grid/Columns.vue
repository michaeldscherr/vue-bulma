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
import ClassesMixin from 'mixins/classes';

export default {
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
    mixins: [
        ClassesMixin,
    ],
    data() {
        return {
            staticClasses: [
                'columns',
            ],
            prefixes: {
                breakpoint: 'is',
                multiline: 'is',
                gapless: 'is',
            },
        };
    },
};
</script>
