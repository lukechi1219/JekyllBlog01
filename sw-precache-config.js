/**
 * Created by Luke.Chi on 2017/5/20.
 */

module.exports = {
  staticFileGlobs: [
    '_site/index.html',
//    '_site/**.js',
    '_site/**.css',
    '_site/assets/*.css',
    '_site/assets/images/*',
    '_site/assets/icons/*'
  ],
  root: '_site',
  stripPrefix: '_site/',
//  navigateFallback: '/index.html',
  runtimeCaching: [{
    urlPattern: /node-hnapi\.herokuapp\.com/,
    handler: 'networkFirst'
  }]
};
