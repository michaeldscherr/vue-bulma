import Vue from 'vue';
import Core from './core';
import LayoutContainer from './layout/container';
import LayoutSection from './layout/section';
import LayoutHero from './layout/hero';
import LayoutFooter from './layout/footer';
import Box from './elements/box';

const components = {
    Core,
    Box,
    LayoutSection,
    LayoutContainer,
    LayoutHero,
    LayoutFooter,
};

components.install = () => {
    Object.keys(components).forEach((component) => {
        const installer = components[component];
        if (installer && component !== 'install') {
            Vue.use(installer);
        }
    });
};

export default components;
