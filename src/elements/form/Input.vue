<template>
<bm-control
    elem="p"
>
    <slot name="label"></slot>
    <input
        :class="classes"
        :type="bmType"
    />
    <slot name="help"></slot>
</div>
</template>

<script>
import {
    ClassSizeMixin,
    ClassThemeMixin,
} from 'mixins';

export default {
    mixins: [
        ClassSizeMixin,
        ClassThemeMixin,
    ],
    props: {
        bmType: {
            required: false,
            type: String,
        },
    },
    data() {
        return {
            classStatic: [
                'input',
            ],
        };
    },
    computed: {
        classes() {
            return [
                ...this.classStatic,
                ...this.classSize,
                ...this.classTheme,
            ];
        },
    },
};
</script>
