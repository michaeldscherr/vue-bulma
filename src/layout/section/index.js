import Vue from 'vue';
import Section from './Section.vue';

export default function install() {
    Vue.component('bm-section', Vue.extend(Section));
}
