import Vue from 'vue';
import Button from './Button.vue';

export default function install() {
    Vue.component('bm-button', Vue.extend(Button));
}
