


module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({
    watch: {
      // If any .less file changes in directory "build/less/" run the "less"-task.
      files: ["build/less/*.less", "build/less/skins/*.less", "dist/js/app.js"],
      tasks: ["less", "uglify"]
    },
    
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "dist/css/AdminLTE.css": "build/less/AdminLTE.less",

          "dist/css/skins/skin-blue.css": "build/less/skins/skin-blue.less",
          "dist/css/skins/skin-black.css": "build/less/skins/skin-black.less",
          "dist/css/skins/skin-yellow.css": "build/less/skins/skin-yellow.less",
          "dist/css/skins/skin-green.css": "build/less/skins/skin-green.less",
          "dist/css/skins/skin-red.css": "build/less/skins/skin-red.less",
          "dist/css/skins/skin-purple.css": "build/less/skins/skin-purple.less",
          "dist/css/skins/skin-blue-light.css": "build/less/skins/skin-blue-light.less",
          "dist/css/skins/skin-black-light.css": "build/less/skins/skin-black-light.less",
          "dist/css/skins/skin-yellow-light.css": "build/less/skins/skin-yellow-light.less",
          "dist/css/skins/skin-green-light.css": "build/less/skins/skin-green-light.less",
          "dist/css/skins/skin-red-light.css": "build/less/skins/skin-red-light.less",
          "dist/css/skins/skin-purple-light.css": "build/less/skins/skin-purple-light.less",
          "dist/css/skins/_all-skins.css": "build/less/skins/_all-skins.less"
        }
      },

      production: {
        options: {

          compress: true
        },
        files: {
          // compilation.css  :  source.less
          "dist/css/AdminLTE.min.css": "build/less/AdminLTE.less",
          // Skins minified
          "dist/css/skins/skin-blue.min.css": "build/less/skins/skin-blue.less",
          "dist/css/skins/skin-black.min.css": "build/less/skins/skin-black.less",
          "dist/css/skins/skin-yellow.min.css": "build/less/skins/skin-yellow.less",
          "dist/css/skins/skin-green.min.css": "build/less/skins/skin-green.less",
          "dist/css/skins/skin-red.min.css": "build/less/skins/skin-red.less",
          "dist/css/skins/skin-purple.min.css": "build/less/skins/skin-purple.less",
          "dist/css/skins/skin-blue-light.min.css": "build/less/skins/skin-blue-light.less",
          "dist/css/skins/skin-black-light.min.css": "build/less/skins/skin-black-light.less",
          "dist/css/skins/skin-yellow-light.min.css": "build/less/skins/skin-yellow-light.less",
          "dist/css/skins/skin-green-light.min.css": "build/less/skins/skin-green-light.less",
          "dist/css/skins/skin-red-light.min.css": "build/less/skins/skin-red-light.less",
          "dist/css/skins/skin-purple-light.min.css": "build/less/skins/skin-purple-light.less",
          "dist/css/skins/_all-skins.min.css": "build/less/skins/_all-skins.less"
        }
      }
    },

    uglify: {
      options: {
        mangle: true,
        preserveComments: 'some'
      },
      my_target: {
        files: {
          'dist/js/app.min.js': ['dist/js/app.js']
        }
      }
    },

    includes: {
      build: {
        src: ['*.html'], 
        dest: 'documentation/', 
        flatten: true,
        cwd: 'documentation/build',
        options: {
          silent: true,
          includePath: 'documentation/build/include'
        }
      }
    },

    image: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'build/img/',
          src: ['**/*.{png,jpg,gif,svg,jpeg}'],
          dest: 'dist/img/'
        }]
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      core: {
        src: 'dist/js/app.js'
      },
      demo: {
        src: 'dist/js/demo.js'
      },
      pages: {
        src: 'dist/js/pages/*.js'
      }
    },

    csslint: {
      options: {
        csslintrc: 'build/less/.csslintrc'
      },
      dist: [
        'dist/css/AdminLTE.css',
      ]
    },

    clean: {
      build: ["build/img/*"]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  // Watch File Changes
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Compress JS Files
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Include Files Within HTML
  grunt.loadNpmTasks('grunt-includes');
  // Optimize images
  grunt.loadNpmTasks('grunt-image');
  // Validate JS code
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Delete not needed files
  grunt.loadNpmTasks('grunt-contrib-clean');
  // Lint CSS
  grunt.loadNpmTasks('grunt-contrib-csslint');

  grunt.registerTask('default', ['watch']);
};
