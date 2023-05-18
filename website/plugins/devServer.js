const serverAddress = 'http://10.224.32.144:8080/';

module.exports = function (context, opt = {}) {
  return {
    name: 'docusaurus-plugin-dev-server',
    configureWebpack() {
      return {
        devServer: {
          port: 3000,
          proxy: {
            '/api': {
              target: serverAddress,
              changeOrigin: true,
              secure: false,
            },
            '/server': {
              target: serverAddress,
              changeOrigin: true,
              secure: false,
            },
          },
        },
      };
    },
  };
};
