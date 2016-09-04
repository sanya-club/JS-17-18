module.exports = function (grunt) {


  grunt.initConfig({
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/script.js',
      },
    },
    uglify: {
      options: {

      },
      dist: {
        src: ['build/js/script.js'],
        dest: 'build/js/script.min.js',
      },
    },
    concat_css: {
      options: {
        // Task-specific options go here. 
      },
      all: {
        src: ["src/css/*.css"],
        dest: "build/css/style.css"
      },
    },
    cssmin: {
      options: {

      },
      dist: {
        src: ['build/css/style.css'],
        dest: 'build/css/style.min.css',
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/', // Src matches are relative to this path 
          src: ['**/*.{png,jpg,gif}'], // Actual patterns to match 
          dest: 'build/'
        }]
      }
    },
    csscomb: {
      style: {
        expand: true,
        src: ["build/css/style.css"]
      }
    },

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-csscomb');

  grunt.registerTask('default', [
    'concat',
    'uglify',
    'concat_css',
    'cssmin',
    'imagemin',
    'csscomb']);
};