module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@actions': './src/actions',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@libraries': './src/libraries',
          '@pages': './src/pages',
          '@queries': './src/queries',
          '@reducers': './src/reducers',
          '@routes': './src/routes',
          '@services': './src/services',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
