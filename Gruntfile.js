const loadGruntTasks = require('load-grunt-tasks');

function gruntfile(grunt) {
  loadGruntTasks(grunt, {
    pattern: 'grunt-*',
    config: 'package.json',
    scope: 'devDependencies',
  });

  grunt.initConfig({
    eslint: {
      serverRoutes: ['src/server/routes/*.js'],
      serverControllers: ['src/server/controllers/*.js'],
      gruntfile: ['Gruntfile.js'],
    },
    mochaTest: {
      server: {
        src: ['src/server/spec/*.js'],
      },
    },
    watch: {
      server: {
        files: ['src/server/**/*.js', 'Gruntfile.js', 'index.js'],
        tasks: ['eslint:gruntfile', 'eslint:serverRoutes', 'eslint:serverControllers', 'mochaTest:server'],
      },
    },
  });

  grunt.registerTask('default', ['watch:server']);
}

module.exports = gruntfile;
