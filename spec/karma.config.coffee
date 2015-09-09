# Karma configuration
# Generated on Fri Mar 06 2015 13:46:18 GMT+0100 (CET)

module.exports = (config) ->
  config.set

  # base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..'

  # frameworks to use
  # available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['bower', 'fixture', 'jasmine-jquery','jasmine', 'sinon' ]

    bowerPackages: ['jquery', 'jasmine-ajax', 'jasmine-jquery', 'underscore', 'underscore.inflection', 'bootstrap', 'i18next']

  # list of files / patterns to load in the browser
    files: [
      'lib/accounting/accounting.js',
      
    # Load all the libraries your build needs while testing
      {pattern: 'lib/**/*.js', included: false},

    # load all shims your build needs while testing
      {pattern: 'shims/**/*.js', included: false},

    # serve html fixtures
      { pattern: 'spec/fixtures/**/*.html' },

    # Load all the CoffeeScripts
      {pattern: 'src/coffee/**/*.coffee', included: true},
      {pattern: 'src/coffee/*.coffee', included: true},

    # Load all the karma tests
      {pattern: 'spec/coffee/**/*.coffee', included: true},
      {pattern: 'spec/coffee/*.spec.coffee', included: true}
    ]


  # list of files to exclude
    exclude: [
    ]


  # preprocess matching files before serving them to the browser
  # available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '**/*.html'   : ['html2js']
      '**/*.coffee': ['coffee']
    }


  # test results reporter to use
  # possible values: 'dots', 'progress'
  # available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'html']


  # web server port
    port: 9876


  # enable / disable colors in the output (reporters and logs)
    colors: true


  # level of logging
  # possible values:
  # - config.LOG_DISABLE
  # - config.LOG_ERROR
  # - config.LOG_WARN
  # - config.LOG_INFO
  # - config.LOG_DEBUG
    logLevel: config.LOG_INFO


  # enable / disable watching file and executing tests whenever any file changes
    autoWatch: true


  # start browser
  # Only Chrome comes pre installed! Find more here: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome']


  # Continuous Integration mode
  # if true, Karma captures browsers, runs the tests and exits
    singleRun: false