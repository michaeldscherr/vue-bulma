import Vue from 'vue';
import Box from './Box.vue';

export default function install() {
    Vue.component('b-box', Vue.extend(Box));
}
