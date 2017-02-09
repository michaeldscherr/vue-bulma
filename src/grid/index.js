import Vue from 'vue';
import Columns from './Columns.vue';
import Column from './Column.vue';

export default function install() {
    Vue.component('bm-columns', Vue.extend(Columns));
    Vue.component('bm-column', Vue.extend(Column));
}
