<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
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
        fluid: {
            required: false,
            type: Boolean,
        },
    },
    data() {
        return {
            classStatic: [
                'container',
            ],
            prefixes: {
                fluid: 'is',
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
