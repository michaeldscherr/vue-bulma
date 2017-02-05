import Vue from 'vue';
import Section from './Section.vue';

export default function install() {
    Vue.component('vb-section', Vue.extend(Section));
}
