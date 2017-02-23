<template>
<bm-control
    elem="p"
>
    <slot name="label"></slot>
    <textarea
        :class="classes"
        :placeholder="bmPlaceholder"
        :value="value"
        @input="onInput"
    ></textarea>
    <slot name="help"></slot>
</bm-control>
</template>

<script>
import {
    ClassSizeMixin,
    ClassThemeMixin,
    TypeInputMixin,
} from 'mixins';

export default {
    mixins: [
        ClassSizeMixin,
        ClassThemeMixin,
        TypeInputMixin,
    ],
    data() {
        return {
            classStatic: [
                'textarea',
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
