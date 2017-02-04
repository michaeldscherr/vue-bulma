import Vue from 'vue';
import Footer from './Footer.vue';

export default function install() {
    Vue.component('b-layout-footer', Vue.extend(Footer));
}
