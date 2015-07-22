module.exports = (grunt) ->
  #    Project configuration.
  grunt.initConfig

    pkg: grunt.file.readJSON('package.json')

    karma:
      unit:
        configFile: 'spec/karma.config.coffee'

    clean:
      dist: [ 'dist/**/*.js']

    coffee:
      compile:
        files:
          "dist/eboss-js.js": [
            "src/coffee/helpers/*.coffee",
            "src/coffee/controllers/*.coffee",
            "src/coffee/handlers/*.coffee",
            "src/coffee/*.coffee",
          ]

    coffeelint:
      src: ['src/**/*.coffee']

    uglify:
      my_target:
        files:
          "dist/eboss-js.min.js": ["dist/eboss-js.js"]

    bump:
      options:
        commitFiles: ["dist", "src", "test"]
        commitMessage: 'Release v%VERSION%'
        tagMessage: 'Version %VERSION%'
        pushTo: 'https://github.com/seomaster/eboss.js.git'

    shell:
      git_add:
        command: 'git add -A'
    
    watch:
      coffee:
        files: ['src/coffee/**/*.coffee']
        tasks: ['coffeelint']

      uglify:
        files: ['dist/**/*.js']
        task:  ['uglify']
  
  #    Load the plugin
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-coffeelint'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-bump'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  #   Default task
  grunt.registerTask( 'default', ['coffeelint','coffee' ])
  grunt.registerTask( 'minor', [
    'coffeelint',
    'coffee',
    'uglify',
    'bump:minor'])
  grunt.registerTask( 'major', [
    'coffeelint',
    'coffee',
    'uglify',
    'bump:major'])