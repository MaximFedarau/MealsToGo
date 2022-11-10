module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            screens: './src/screens',
            utils: './src/utils',
            types: './src/types',
            constants: './src/constants',
            api: './src/api',
            assets: './assets',
          },
        },
      ],
      [
        'module:react-native-dotenv',
        {
          moduleName: 'env',
          path: '.env',
        },
      ],
    ],
  };
};
