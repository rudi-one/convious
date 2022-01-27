module.exports = {
  preset: 'react-native',
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/assetsTransformer.js',
  //   '\\.(css|less)$': '<rootDir>/assetsTransformer.js',
  // },
  setupFilesAfterEnv: [
    './__tests__/setup.js',
    // './node_modules/react-native-gesture-handler/jestSetup.js',
  ],
  testRegex:
    '((/__tests__/.*-test.(ts|tsx))|/src/.*/tests/.+\\.test\\.(ts|tsx))$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community)',
  ],
};
