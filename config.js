const distFolder = 'dist',
    srcFolder = 'src';

const path = {
    build: {
        html: `${distFolder}/`,
        css: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        assets: `${distFolder}/assets/`
    },
    src: {
        pug: [`${srcFolder}/**/*.pug`, `!${srcFolder}/parts/**/*.pug`],
        scss: `${srcFolder}/scss/index.scss`,
        js: `${srcFolder}/js/index.js`,
        assets: `${srcFolder}/assets/`,
    },
    watch: {
        pug: `${srcFolder}/**/*.pug`,
        styles: `${srcFolder}/scss/**/*.{scss, css}`,
        js: `${srcFolder}/js/**/*.js`,
        assets: `${srcFolder}/assets/`,
    },
    clear: `./${distFolder}/`,
    srcFolder: `./${srcFolder}/`,
    distFolder: `./${distFolder}/`,
}

const configs = {
    postcss: './postcss.config.js',
}

exports.path = path;
exports.configs = configs;