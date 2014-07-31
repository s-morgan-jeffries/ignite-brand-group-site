// Generated on 2014-07-20 using generator-static-site 0.0.1
// jshint node: true
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

//var _ = require('lodash');
//var assemble = require('assemble');
//console.log(assemble);

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);
  // This one has to be specified explicitly (doesn't have 'grunt' in the name)
  grunt.loadNpmTasks('assemble');

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: {
      // configurable paths
      src: 'src',
      temp: '.tmp',
      dist: 'dist'
    },

    assemble: {
      options: {
        // Don't use this. We're using the base_layout.hbs file for usemin, so we
//        assets: 'assets',
        // No plugins for now
//        plugins: ['assemble-middleware-lunr'],
        lunr: {},
        partials: ['<%= yeoman.src %>/views/partials/*.hbs'],
        layoutdir: '<%= yeoman.src %>/views/layouts',
        data: '<%= yeoman.src %>/views/data/data.json',
        flatten: true
      },
//      home: {
//        options: {
//          layout: 'base_layout.hbs'
//        },
//        src: [
//          '<%= yeoman.src %>/views/static/home.hbs'
//        ],
//        dest: '<%= yeoman.temp %>/'
//      },
      static: {
//        options: {
//          layout: 'standard_layout.hbs'
//        },
        expand: true,
        cwd: '<%= yeoman.src %>/views/static',
        src: [
          './**/*.hbs'
        ],
        dest: '<%= yeoman.temp %>/'
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.temp %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= yeoman.temp %>/styles/'
        }]
      }
    },

    bump: {
      options: {
        files: ['bower.json', 'package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['bower.json', 'package.json'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        // NEVER change this.
        push: false,
        pushTo: 'upstream',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
      }
    },

    // Replace Google CDN references
    cdnify: {
      build: {
        html: ['<%= yeoman.dist %>/*.html']
      }
    },

    // Empties folders to start fresh
    clean: {
      build: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.temp %>',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*',
            '!<%= yeoman.dist %>/CNAME',
            '!<%= yeoman.dist %>/_00.txt'
          ]
        }]
      },
      server: '<%= yeoman.temp %>'
    },

    compass: {
      options: {
        sassDir: '<%= yeoman.src %>/styles',
        cssDir: '<%= yeoman.src %>/styles',
        generatedImagesDir: '<%= yeoman.temp %>/images/generated',
        imagesDir: '<%= yeoman.src %>/images',
        javascriptsDir: '<%= yeoman.src %>/scripts',
        fontsDir: '<%= yeoman.src %>/styles/fonts',
        importPath: '<%= yeoman.src %>/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false
      },
      build: {},
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server',
        'copy:scripts'
      ],
      test: [
        'compass:build'
      ],
      build: [
        'compass:build',
        'imagemin',
        'svgmin'
      ]
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      develop: {
        options: {
          open: true,
          base: [
            '<%= yeoman.temp %>',
            '<%= yeoman.src %>'
          ],
          livereload: 35729
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '<%= yeoman.temp %>',
            'test',
            '<%= yeoman.src %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      build1: {
        expand: true,
        cwd: '<%= yeoman.src %>/views/layouts/',
        src: 'base_layout.hbs',
        dest: '<%= yeoman.temp %>'
      },
      build2: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= yeoman.src %>',
            dest: '<%= yeoman.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/{,*/}*.html',
              'images/{,*/}*.{webp}',
              'fonts/*'
            ]
          },
          {
            expand: true,
            cwd: '<%= yeoman.temp %>/images',
            dest: '<%= yeoman.dist %>/images',
            src: ['generated/*']
          },
          {
            expand: true,
            cwd: '<%= yeoman.temp %>',
            dest: '<%= yeoman.dist %>',
            src: ['**/*.html']
          },
          // You have to have this to copy fonts
          {
            expand: true,
            cwd: '<%= yeoman.src %>',
            dest: '<%= yeoman.dist %>',
//            src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'],

            src: [
              'bower_components/**/*.eot',
              'bower_components/**/*.svg',
              'bower_components/**/*.ttf',
              'bower_components/**/*.woff',
              'bower_components/**/*.png',
              'bower_components/**/*.gif',
              'components/**/*.eot',
              'components/**/*.svg',
              'components/**/*.ttf',
              'components/**/*.woff',
              'components/**/*.png',
              'components/**/*.gif',
              'components/**/*.css'
            ]
          }
        ]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.src %>/styles',
        dest: '<%= yeoman.temp %>/styles/',
        src: '{,*/}*.css'
      },
      scripts: {
        expand: true,
        cwd: '<%= yeoman.src %>/scripts',
        dest: '<%= yeoman.temp %>/scripts/',
        src: '{,*/}*.js'
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    cssmin: {
      options: {
        root: '<%= yeoman.src %>'
      }
    },

    htmlmin: {
      build: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    imagemin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: [
            '**/*.{png,jpg,jpeg,gif}'
          ],
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },


    inline: {
      server: {
        options: {
//          uglify: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.temp %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.temp %>'
        }]
      },
      build: {
        options: {
          uglify: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: ['*.html', 'views/**/*.html'],
          dest: '<%= yeoman.dist %>'
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: ['Gruntfile.js']
      },
      scripts: {
        src: [
          '<%= yeoman.src %>/scripts/**/*.js'
        ]
      },
//      e2eTests: {
//        options: {
//          jshintrc: 'test/e2e/.jshintrc'
//        },
//        src: ['test/e2e/spec/{,*/}*.js']
//      },
//      integrationTests: {
//        options: {
//          jshintrc: 'test/integration/.jshintrc'
//        },
//        src: ['test/integration/spec/{,*/}*.js']
//      },
      unitTests: {
        options: {
          jshintrc: 'test/unit/.jshintrc'
        },
        src: ['test/unit/spec/{,*/}*.js']
      }
    },

    // Test settings
    karma: {
      options: {
        files: [
          // Add polyfill for bind, which is missing from PhantomJS
          '../bindPolyfill.js',
          // Add jasmine-matchers
          '../../node_modules/jasmine-expect/dist/jasmine-matchers.js',
          // Add sinon
          '../../<%= yeoman.src %>/bower_components/sinonjs/sinon.js',
          '../../<%= yeoman.src %>/bower_components/jasmine-sinon/lib/jasmine-sinon.js',
          // Dependencies (if any)
          '../../<%= yeoman.src %>/bower_components/jquery/dist/jquery.js',
          '../../<%= yeoman.src %>/bower_components/facebox/src/facebox.js',
          '../../<%= yeoman.src %>/components/tipuedrop/tipuedrop/tipuedrop.js',
          '../../<%= yeoman.src %>/components/tipuesearch/tipuesearch/tipuesearch.js',
          // Utilities (if any)
          '../../node_modules/lodash/lodash.js',
//          '../../<%= yeoman.src %>/bower_components/lodash/dist/lodash.js',
          // The source files for the scripts under test
          '../../<%= yeoman.src %>/scripts/**/*.js',
          // These are all the tests.
          'spec/**/*.js'
        ]
      },
      unitCI: {
        configFile: 'test/unit/karma.unit.ci.conf.js',
        singleRun: true
      },
      unitBuild: {
        configFile: 'test/unit/karma.unit.build.conf.js',
        singleRun: true
      },
      unitTravis: {
        configFile: 'test/unit/karma.unit.travis.conf.js',
        singleRun: true
      }
//      ,
//      integrationCI: {
//        configFile: 'test/integration/karma.integration.ci.conf.js',
//        singleRun: true
//      },
//      integrationBuild: {
//        configFile: 'test/integration/karma.integration.build.conf.js',
//        singleRun: true
//      },
//      integrationTravis: {
//        configFile: 'test/integration/karma.integration.travis.conf.js',
//        singleRun: true
//      }
    },

    replace: {
      develop: {
        options: {
          patterns: [
            {
              match: '../../bower_components',
              replacement: '/bower_components'
            }
          ],
          usePrefix: false
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['<%= yeoman.src %>/views/layouts/base_layout.hbs'],
            dest: '<%= yeoman.src %>/views/layouts/'
          }
        ]
      }
    },

    // Renames files for browser caching purposes
    rev: {
      build: {
        files: {
          src: [
            '<%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%= yeoman.dist %>/styles/{,*/}*.css',
            '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '!<%= yeoman.dist %>/images/norev/*',
            '<%= yeoman.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    sass: {
      build: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/styles',
          src: ['*.scss'],
          dest: '<%= yeoman.src %>/styles',
          ext: '.css'
        }]
      },
      server: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/styles',
          src: ['*.scss'],
          dest: '<%= yeoman.src %>/styles',
          ext: '.css'
        }]
      }
    },

    svgmin: {
      build: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.src %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
//        assetsDirs: ['<%= yeoman.dist %>/**/']
        assetsDirs: ['<%= yeoman.dist %>']
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.temp %>/base_layout.hbs',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat', 'uglifyjs'],
//              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css',
    //         '<%= yeoman.src %>/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    // uglify: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/scripts/scripts.js': [
    //         '<%= yeoman.dist %>/scripts/scripts.js'
    //       ]
    //     }
    //   }
    // },
    // concat: {
    //   dist: {}
    // },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep', 'replace:develop']
      },
      handlebars: {
        files: ['<%= yeoman.src %>/views/**/*.hbs'],
        tasks: ['assemble', 'inline:server'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['<%= yeoman.src %>/styles/{,*/}*.{scss,sass}'],
//        tasks: ['sass:server', 'autoprefixer'],
        tasks: ['compass:server', 'autoprefixer'],
        options: {
          livereload: true
        }
      },
      scripts: {
        files: ['<%= yeoman.src %>/scripts/**/*.js'],
//        tasks: ['jshint:scripts', 'karma:unitCI', 'copy:scripts', 'assemble', 'inline:server'],
        tasks: ['jshint:scripts', 'copy:scripts', 'assemble', 'inline:server'],
        options: {
          livereload: true
        }
      },
      unitTests: {
        files: ['test/unit/spec/**/*.js'],
        tasks: ['jshint:unitTests', 'karma:unitCI']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.src %>/{,*/}*.html',
          '<%= yeoman.temp %>/styles/{,*/}*.css',
          '<%= yeoman.src %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // Automatically inject Bower components into the html
    wiredep: {
      src: {
        src: ['<%= yeoman.src %>/views/layouts/base_layout.hbs'],
        exclude: [
          '<%= yeoman.src %>/bower_components/json3/lib/json3.min.js',
          '<%= yeoman.src %>/bower_components/es5-shim/es5-shim.js'
        ],
        bowerJson: require('./bower.json'),
        directory: '<%= yeoman.src %>/bower_components',
        cwd: '<%= yeoman.src %>/views/layouts'
      }
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'wiredep',
      'replace:develop',
      'assemble',
      // Have to do this before inlining so scripts are in the right place
      'concurrent:server',
      'inline:server',
      'autoprefixer',
      'connect:develop',
      'watch'
    ]);
  });

//  grunt.registerTask('develop', [
//    'clean:server',
//    'wiredep',
//    'replace:develop',
//    'assemble',
//    'concurrent:server',
//    'autoprefixer',
//    'connect:develop',
//    'watch'
//  ]);

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:build',
    'wiredep',
    'replace',
    'assemble',
    'copy:build1',
    'useminPrepare',
    'concurrent:build',
    'autoprefixer',
    'concat',
    'copy:build2',
    'cdnify',
    'cssmin',
    'uglify',
    'rev',
    'usemin',
    'inline:build'/*,
    'htmlmin'*/
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);

//  console.log(_.keys(grunt));
////  console.log(grunt.config.data);
//  console.log(grunt.task);
//  console.log(grunt.tasks);
//  console.log(grunt.config.data);
};
