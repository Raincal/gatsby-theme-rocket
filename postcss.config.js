const postcssPresetEnv = require('postcss-preset-env')
const atImport = require('postcss-import')

module.exports = () => ({
  plugins: [
    atImport(),
    postcssPresetEnv({
      stage: 1,
      features: {
        'nesting-rules': true,
      },
    }),
  ],
})
