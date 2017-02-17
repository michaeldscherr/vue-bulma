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
        responsive,
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
            narrow: {
                required: false,
                type: [Boolean, Array],
                default: false,
                validator(value) {
                    if (isBoolean(value)) {
                        return true;
                    }
                    return value.every((val) => (
                        responsive.screens.includes(val)
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
                    ...this.classResponsive,
                    ...this.classProp,
                ];
            },
        },
    };
</script>
