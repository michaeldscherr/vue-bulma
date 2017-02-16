import Vue from 'vue';
import Control from './Control.vue';

export default function install() {
    Vue.component('bm-control', Vue.extend(Control));
}
