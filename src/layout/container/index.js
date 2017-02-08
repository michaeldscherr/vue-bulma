import Vue from 'vue';
import Container from './Container.vue';

export default function install() {
    Vue.component('bm-container', Vue.extend(Container));
}
