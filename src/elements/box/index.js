import Vue from 'vue';
import Box from './Box.vue';

export default function install() {
    Vue.component('vb-box', Vue.extend(Box));
}
