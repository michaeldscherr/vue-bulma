import Vue from 'vue';
import bBox from './Box.vue';

export default function install() {
    Vue.component('b-box', Vue.extend(bBox));
}
