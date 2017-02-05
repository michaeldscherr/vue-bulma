<template>
<section
    :class="classes"
>
    <slot></slot>
</section>
</template>

<script>
import modifiers from 'core/modifiers/modifiers';
import responsiveHelpers from 'core/modifiers/responsive-helpers';
import {
    getModClass,
} from 'core/utils';

export default {
    props: {
        modifier: {
            required: false,
            type: String,
            validator(value) {
                return modifiers.sizes.some((mod) => (
                    mod.split('-')[1] === value
                ));
            },
        },
    },
    created() {
        console.log(responsiveHelpers);
    },
    computed: {
        classes() {
            return {
                section: true,
                [getModClass(this.modifier)]: this.modifier,
            };
        },
    },
};
</script>
