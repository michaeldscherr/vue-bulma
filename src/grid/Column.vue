<template>
<div
    :class="classes"
>
    <slot></slot>
</div>
</template>

<script>
    import {
        inRange,
        isBoolean,
    } from 'lodash';
    import {
        screens,
        sizes,
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
            size: {
                required: false,
                type: Number,
                validator(value) {
                    return inRange(value, 1, 12);
                },
            },
            offset: {
                required: false,
                type: Number,
                validator(value) {
                    return inRange(value, 1, 12);
                },
            },
            responsive: {
                required: false,
                type: Object,
                validator(value) {
                    return Object.entries(value).every(([key, val]) => (
                        screens.includes(key) &&
                        sizes.includes(val)
                    ));
                },
            },
            narrow: {
                required: false,
                type: [Boolean, Array],
                default: false,
                validator(value) {
                    if (isBoolean(value)) {
                        return true;
                    }
                    return value.every((val) => (
                        screens.includes(val)
                    ));
                },
            },
        },
        data() {
            return {
                classStatic: [
                    'column',
                ],
                prefixes: {
                    size: 'is',
                    offset: 'is-offset',
                    narrow: 'is',
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
