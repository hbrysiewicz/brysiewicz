/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'brysiewicz',
    environment: environment,
    contentSecurityPolicy: { 'connect-src': "'self' wss://*.firebaseio.com" },
    firebase: 'https://brysiewicz.firebaseIO.com',
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.contentSecurityPolicy = {
      'default-src': "'self' http://*.firebaseio.com https://*.firebaseio.com",
      'script-src': "'self' http://*.firebaseio.com https://*.firebaseio.com",
      'connect-src': "'self' wss://*.firebaseio.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com", // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': "'self'"
      }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
