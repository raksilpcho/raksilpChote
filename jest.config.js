    /** @type {import('jest').Config} */
module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
  //   'node_modules/@react-native/polyfills/error-guard.js',
  //  "<rootDir>/node_modules/@react-native",
  //   "/node_modules/(?!(@react-native|react-native)/).*/",
  //   "node_modules/(?!(@react-native|react-native/jest))/",
  //   '/node_modules/(?!(jest-|react-native|@react-navigation/.*))',
  //   '@react-navigation/bottom-tabs',
  //   'node_modules/(?!(react-native' +
  //     '|@react-native' +
  //     '|@react-native-community' +
  //     '|@react-navigation' +
  //     '|react-navigation-tabs' +
  //     '|react-native-splash-screen' +
  //     '|react-native-screens' +
  //     '|react-native-reanimated' +
  //     ')/)'
  ],
 verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],


};
