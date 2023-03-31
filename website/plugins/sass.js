module.exports = function (_, opt = {}) {
  delete opt.id;

  const options = {
    ...opt,
    sassOptions: {
      javascriptEnabled: true,
      ...opt.sassOptions,
    },
  };

  return {
    name: 'docusaurus-plugin-sass',
    configureWebpack(_, isServer, utils) {
      const { getStyleLoaders } = utils;
      const isProd = process.env.NODE_ENV === 'production';
      return {
        module: {
          rules: [
            {
              test: /\.scss$/,
              oneOf: [
                {
                  test: /\.module\.scss$/,
                  use: [
                    ...getStyleLoaders(isServer, {
                      modules: {
                        mode: 'local',
                        getLocalIdent: (context, _, localName) => {
                          const match = context.resourcePath.replace(/\\/, '/').match(/.*\/src\/(.*)\/.*\.module\..*/);

                          if (match) {
                            return `positive-${match[1]}__${localName}`;
                          }

                          return `positive-${localName}`;
                        },
                        exportLocalsConvention: 'camelCase',
                      },
                      importLoaders: 1,
                      sourceMap: !isProd,
                    }),
                    {
                      loader: 'sass-loader',
                      options,
                    },
                  ],
                },
                {
                  use: [
                    ...getStyleLoaders(isServer),
                    {
                      loader: 'sass-loader',
                      options,
                    },
                  ],
                },
              ],
            },
          ],
        },
      };
    },
  };
};
