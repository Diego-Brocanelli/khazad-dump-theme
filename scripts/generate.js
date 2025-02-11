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
    const yamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDump.yml'),
        'utf-8'
    );

    const midnightYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpMidnight.yml'),
        'utf-8'
    );

    const mithrilYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpMithril.yml'),
        'utf-8'
    );

    const softYamlFile = await readFile(
        join(__dirname, '..', 'src', 'khazadDumpSoft.yml'),
        'utf-8'
    );

    /** @type {Theme} */
    const base     = load(yamlFile, { schema });
    const midnight = load(midnightYamlFile, { schema });
    const mithril  = load(mithrilYamlFile, { schema });
    const soft     = load(softYamlFile, { schema });

    // Remove nulls and other falsey values from colors
    for (const key of Object.keys(base.colors)) {
        if (!base.colors[key]) {
            delete base.colors[key];
        }
    }

    for (const key of Object.keys(midnight.colors)) {
        if (!midnight.colors[key]) {
            delete midnight.colors[key];
        }
    }

    for (const key of Object.keys(mithril.colors)) {
        if (!mithril.colors[key]) {
            delete mithril.colors[key];
        }
    }

    for (const key of Object.keys(soft.colors)) {
        if (!soft.colors[key]) {
            delete soft.colors[key];
        }
    }

    return {
        base,
        midnight,
        mithril,
        soft
    };
};