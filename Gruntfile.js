module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      sass: {
        files: 'sass/**/*.scss',
        tasks: ['sass'],
        options: {}
      },
      copyto: {
        files: 'out/**',
        tasks: ['copyto'],
        options: {}
      }
    },
    copyto: {
      ghpages: {
        files: [
          {cwd: 'out/', src: ['**/*'], dest: 'gh-pages/', expand: true}
        ],
        options: {
          // array of ignored paths, can be specific files or a glob
          ignore: [
            'stuffdir/**/*.bak',
            'stuffdir/dontcopyme.txt',
            // ignore both a directory and it's contents (brace expansion)
            'stuffdir/somedir{,/**/*}'
          ]
        }
      }
    }
  });

  grunt.registerTask('default', ['copyto']);

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-copy-to');
};
