const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.assetExts.push('cjs'); // for firebase - add the file extension cjs https://docs.expo.dev/guides/customizing-metro/#adding-more-file-extensions-to--assetexts

module.exports = defaultConfig;
