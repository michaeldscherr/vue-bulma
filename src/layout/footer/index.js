import Vue from 'vue';
import Footer from './Footer.vue';

export default function install() {
    Vue.component('bm-layout-footer', Vue.extend(Footer));
}
