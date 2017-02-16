import Vue from 'vue';
import Core from 'core';
import LayoutContainer from 'layout/container';
import LayoutSection from 'layout/section';
import LayoutHero from 'layout/hero';
import LayoutFooter from 'layout/footer';
import Box from 'elements/box';
import Button from 'elements/button';
import Content from 'elements/content';
import Control from 'elements/control';
import Grid from 'grid';

const components = {
    Core,
    LayoutContainer,
    LayoutSection,
    LayoutHero,
    LayoutFooter,
    Box,
    Button,
    Content,
    Control,
    Grid,
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
