<template>
<component
    :is="elem"
    :class="classes"
>
    <slot></slot>
</component>
</template>

<script>
import {
    ClassPropMixin,
} from 'mixins';

export default {
    mixins: [
        ClassPropMixin,
    ],
    props: {
        elem: {
            required: false,
            type: String,
            default: 'div',
            validator(value) {
                return value.length > 0;
            },
        },
        grouped: {
            required: false,
            type: Boolean,
            default: false,
        },
        addons: {
            required: false,
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            classStatic: [
                'control',
            ],
            prefixes: {
                grouped: 'is',
                addons: 'has',
            },
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classProp,
            ];
        },
    },
};
</script>
