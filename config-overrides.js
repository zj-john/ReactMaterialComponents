const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');

module.exports = {
    webpack: function (config, env) {
    //   config = injectBabelPlugin(['import', {
    //       libraryName: '@material-ui/core',
    //       libraryDirectory: 'es',
    //       camel2DashComponentName: false
    //   }], config);

      const alias = {
          '@pages': path.resolve(__dirname, 'src/pages'),
          '@components': path.resolve(__dirname, 'src/components'),
          '@services': path.resolve(__dirname, 'src/services'),
          '@assets': path.resolve(__dirname, 'src/assets'),
          // 'plugins': path.resolve(__dirname, 'src/plugins'),
      };
      for(const k in alias){
          config.resolve.alias[k] = alias[k];
      }
      return config;
    }

};
