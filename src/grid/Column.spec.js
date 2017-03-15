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

(function ColumnSpec(beforeEach, spyOn, describe, it, expect) {
    beforeEach(() => {
      spyOn(console, 'error');
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
}(window.beforeEach, window.spyOn, window.describe, window.it, window.expect));
