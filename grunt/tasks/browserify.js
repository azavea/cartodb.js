// Using proposed solution for alias mappings from official docs, see https://github.com/jmreidy/grunt-browserify#alias
var remapify = require('remapify');

module.exports = {
  task: function(grunt, config) {
    return {
      options: {
        preBundleCB: function (b) {
          b.plugin(remapify, [
            {
              cwd: './vendor',
              src: './**/*.js',
              expose: 'vendor'
            },
            {
              cwd: './src',
              src: './**/*.js',
              expose: ''
            }
          ]);
        }
      },
      core: {
        src: 'src/cartodb.core.js',
        dest: '<%= config.dist %>/cartodb.core.uncompressed.js'
      }
    };
  }
};