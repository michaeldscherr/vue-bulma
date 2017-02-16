import Vue from 'vue';
import Input from './Input.vue';

export default function install() {
    Vue.component('bm-input-text', Vue.extend(Input));
}
