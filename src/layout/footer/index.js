import Vue from 'vue';
import Footer from './Footer.vue';

export default function install() {
    Vue.component('vb-layout-footer', Vue.extend(Footer));
}
