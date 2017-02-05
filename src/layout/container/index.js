import Vue from 'vue';
import Container from './Container.vue';

export default function install() {
    Vue.component('vb-container', Vue.extend(Container));
}
