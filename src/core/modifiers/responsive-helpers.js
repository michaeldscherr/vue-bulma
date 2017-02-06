import {
    flattenDeep,
} from 'lodash';

export const screens = [
    'touch',
    'mobile',
    'tablet',
    'desktop',
    'widescreen',
];

export const mods = [
    'only',
];

export const show = [
    'block',
    'flex',
    'inline',
    'inline-block',
    'inline-flex',
];

export const hide = [
    'hidden',
];

function getClassMap(baseClass, modifiers = [screens, mods]) {
    //
}

export default flattenDeep([
    [...show, ...hide].map(baseClass => {
        baseClass = `is-${baseClass}`;
        return getClassMap(baseClass);
    }),
    /*
    getClassMap(show),
    getClassMap(hide),
    [...show, ...hide].map(baseClass => {
        const className = `is-${baseClass}`;
        return [
            className,
            screens.map((screen) => {
                const screenName = `${className}-${screen}`;
                return [
                    screenName,
                    mods.map((mod) => {
                        const modName = `${screenName}-${mod}`;
                        return [
                            modName,
                        ];
                    }),
                ];
            }),
        ];
    }),
    */
]);
