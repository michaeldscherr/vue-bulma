import Vue from 'vue';
import Grid from './Grid.vue';
import Column from './Column.vue';

export default function install() {
    Vue.component('bm-grid', Vue.extend(Grid));
    Vue.component('bm-column', Vue.extend(Column));
}
