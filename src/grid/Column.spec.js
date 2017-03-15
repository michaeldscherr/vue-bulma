import Vue from 'vue';
import Column from './Column.vue';

function getRenderedText (Component, propsData) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm.$el.textContent;
}

function getViewModel (Component, propsData) {
    const Ctor = Vue.extend(Component);
    const vm = new Ctor({ propsData }).$mount();
    return vm;
}

(function ColumnSpec(describe, it, expect) {
    window.beforeEach(() => {
      window.spyOn(console, 'error');
    });
    describe('Column w/ Correct Size', () => {
        it('renders correctly', () => {
            getViewModel(Column, {
                size: 2,
            });
            expect(console.error).not.toHaveBeenCalled();
        });
    });
    describe('Column w/ Incorrect Size', () => {
        it('renders correctly', () => {
            getViewModel(Column, {
                size: 13,
            });
            expect(console.error).toHaveBeenCalled();
        });
    });
}(window.describe, window.it, window.expect));
