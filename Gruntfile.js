module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['js/jquery-2.2.0.min.js', 'js/bootstrap.min.js'],
                dest: 'js/production.js'
            }  
        },

        uglify: {
            build: {
                src: 'js/production.js',
                dest: 'dist/js/production.min.js'
            }
        },

        responsive_images: {
            dev: {
                options: {
                    engine: 'gm',
                    sizes: [{
                        width: 1600,
                        name: "extra-large",
                        suffix: "",
                        quality: 100
                    },
                        {
                            width: 1200,
                            name: "large",
                            suffix: "",
                            quality: 100
                        },
                        {
                            width: 800,
                            name: "meduim",
                            suffix: "",
                            quality: 60
                        },
                        {
                            width: 400,
                            name: "small",
                            suffix: "",
                            quality: 40
                        },
                        {
                            width: 40,
                            name: "logo",
                            suffix: "",
                            quality: 100
                        },
                        {
                            width: 758,
                            height: 60,
                            name: "banner",
                            suffix: "",
                            quality: 100
                        }                        

                    ]
                },

                files: [{
                    expand: true,
                    src: ['**/*.{gif,jpg,png}'],
                    cwd: 'images',
                    dest: 'dist/images/'
                }]
            }
        },

        cssmin: {
            dist: {
                files: {
                    'dist/css/style.min.css': ['css/boostrap.css', 'css/**/*.css', 'css/main.css']
                }
            }
        },
        


        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            },
            scripts2: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            }



        }


    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'responsive_images', 'cssmin']);
    grunt.registerTask('watch', ['concat', 'uglify', 'responsive_images', 'cssmin','watch']);
    grunt.registerTask('responsive', ['responsive_images']);
};