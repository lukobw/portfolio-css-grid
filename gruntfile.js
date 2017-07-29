module.exports = function (grunt){


  grunt.initConfig({
    concat: {
      options: {
        separator: '',
      },
      dist: {
        src: ['style/*.css'],
        dest: 'main/main.css',
      },
    },

browserSync: {
    bsFiles: {
      src: ['main/*.css', 'index.html', 'style/*.css']
    },
    options: {
      watchTask: true,
      server: {
        baseDir: './'
      }
    }
  },

 watch: {
    scripts: {
        files: ['main/*.css', 'style/*.css'],
        tasks: ['concat'],
        options: {
            spawn: false
        },
    }
}
});


grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');


grunt.registerTask('default', ['concat', 'browserSync', 'watch']);

};
