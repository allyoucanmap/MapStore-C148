const path = require("path");

const themeEntries = require('./MapStore2/themes.js').themeEntries;
const extractThemesPlugin = require('./MapStore2/themes.js').extractThemesPlugin;

module.exports = require('./MapStore2/buildConfig')(
    {
        'MapStore-C148': path.join(__dirname, "js", "app"),
        'MapStore-C148-embedded': path.join(__dirname, "MapStore2", "web", "client", "product", "embedded"),
        'MapStore-C148-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api")
    },
    themeEntries,
    {
        base: __dirname,
        dist: path.join(__dirname, "dist"),
        framework: path.join(__dirname, "MapStore2", "web", "client"),
        code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
    },
    extractThemesPlugin,
    false,
    "/dist/",
    '.MapStore-C148'
);
