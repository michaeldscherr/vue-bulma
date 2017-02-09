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
    import ClassesMixin from 'mixins/classes';

    export default {
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
            breakpoints: {
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
                    return value.every((val) => {
                        return screens.includes(val);
                    });
                }
            },
        },
        mixins: [
            ClassesMixin,
        ],
        data() {
            return {
                staticClasses: [
                    'column',
                ],
                prefixes: {
                    size: 'is',
                    offset: 'is-offset',
                    narrow: 'is',
                },
            };
        },
    };
</script>
