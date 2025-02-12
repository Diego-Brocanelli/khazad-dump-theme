const { readFile } = require('fs').promises;
const { join } = require('path');
const { Type, DEFAULT_SCHEMA, load } = require('js-yaml');
const tinycolor = require('tinycolor2');

/**
 * @typedef {Object} TokenColor - Textmate token color.
 * @prop {string} [name] - Optional name.
 * @prop {string[]} scope - Array of scopes.
 * @prop {Record<'foreground'|'background'|'fontStyle',string|undefined>} settings - Textmate token settings.
 *       Note: fontStyle is a space-separated list of any of `italic`, `bold`, `underline`.
 */

/**
 * @typedef {Object} Theme - Parsed theme object.
 * @prop {Record<'base'|'ansi'|'brightOther'|'other', string[]>} khazadDump - Dracula color variables.
 * @prop {Record<string, string|null|undefined>} colors - VSCode color mapping.
 * @prop {TokenColor[]} tokenColors - Textmate token colors.
 */

/**
 * @typedef {(yamlObj: Theme) => Theme} ThemeTransform
 */

const withAlphaType = new Type('!alpha', {
    kind: 'sequence',
    construct: ([hexRGB, alpha]) => hexRGB + alpha,
    represent: ([hexRGB, alpha]) => hexRGB + alpha,
});

const schema = DEFAULT_SCHEMA.extend([withAlphaType]);

module.exports = async () => {
    const arkenstoneYamlFile = await readFile(
        join(__dirname, '..', 'src', 'KhazadDumpArkenstone.yml'),
        'utf-8'
    );

    const dumurYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpDumur.yml'),
        'utf-8'
    );

    const ithildinYamlFile = await readFile(
        join(__dirname, '..', 'src', 'KhazadDumpIthildin.yml'),
        'utf-8'
    );

    const khuzdYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpKhuzd.yml'),
        'utf-8'
    );

    const mithrilYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpMithril.yml'),
        'utf-8'
    );

    const naragYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpNarag.yml'),
        'utf-8'
    );

    /** @type {Theme} */
    const arkenstone = load(arkenstoneYamlFile, { schema });
    const dumur      = load(dumurYamlFile, { schema });
    const ithildin   = load(ithildinYamlFile, { schema });
    const Khuzd      = load(khuzdYamlFile, { schema });
    const mithril    = load(mithrilYamlFile, { schema });
    const narag      = load(naragYamlFile, { schema });

    // Remove nulls and other falsey values from colors

    for (const key of Object.keys(arkenstone.colors)) {
        if (!arkenstone.colors[key]) {
            delete arkenstone.colors[key];
        }
    }

    for (const key of Object.keys(dumur.colors)) {
        if (!dumur.colors[key]) {
            delete dumur.colors[key];
        }
    }

    for (const key of Object.keys(ithildin.colors)) {
        if (!ithildin.colors[key]) {
            delete ithildin.colors[key];
        }
    }

    for (const key of Object.keys(Khuzd.colors)) {
        if (!Khuzd.colors[key]) {
            delete Khuzd.colors[key];
        }
    }

    for (const key of Object.keys(mithril.colors)) {
        if (!mithril.colors[key]) {
            delete mithril.colors[key];
        }
    }

    for (const key of Object.keys(narag.colors)) {
        if (!narag.colors[key]) {
            delete narag.colors[key];
        }
    }

    return {
        arkenstone,
        dumur,
        ithildin,
        Khuzd,
        mithril,
        narag
    };
};