const path = require('path');

module.exports = function () {
  return {
    name: 'alias-docusaurus-plugin',
    configureWebpack() {
      return {
        resolve: {
          alias: {
            '@positive-map/rc-components/lib': path.resolve(__dirname, '../../packages/components/src'),
            '@positive-map/rc-components': path.resolve(__dirname, '../../packages/components/src'),
            '@positive-map/rc-utils/lib': path.resolve(__dirname, '../../packages/utils/src'),
            '@positive-map/rc-utils': path.resolve(__dirname, '../../packages/utils/src'),
            $components: path.resolve(__dirname, '../../packages/components/src'), // 用于缩短文档路径
            $demo: path.resolve(__dirname, '../demo'), // 用于缩短文档路径
          },
        },
      };
    },
  };
};
