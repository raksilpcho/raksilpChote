module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-env',
    ['@babel/preset-react', {runtime: 'automatic'}],
  ]
};
