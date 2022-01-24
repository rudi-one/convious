module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
        alias: {
          src: './src',
        },
      },
    ],
    ['react-native-paper/babel'],
  ],
};
