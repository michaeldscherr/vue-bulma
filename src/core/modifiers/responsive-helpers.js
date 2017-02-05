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

function getClassMap(className, modifiers) {
    const modifiersFresh = [...modifiers];

    if (!modifiersFresh.length) {
        return true;
    }

    modifiersFresh[0].map((mod) => {
        let newClassName = `${className}-${mod}`;
        modifiersFresh.shift();
        return [
            newClassName,
            getClassMap(newClassName, modifiersFresh),
        ];
    });
}

export default flattenDeep([
    [...show, ...hide].map(baseClass => {
        return [
            baseClass,
            getClassMap(baseClass, [screens, mods]),
        ];
    })
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
