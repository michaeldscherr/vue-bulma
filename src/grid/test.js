import Vue from 'vue';
import Column from './Column.vue';
import Columns from './Columns.vue';

function getRenderedText (Component, propsData) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm.$el.textContent;
}

(function GridTest(describe, it, expect) {
    describe('Column', () => {
        it('renders correctly', () => {
            expect(getRenderedText(Column, {
                size: 2,
            }));
        });
    });
}(window.describe, window.it, window.expect));
