module.exports = function(config) {
  var report = './report/';
  config.set({
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    files: [
      'node_modules/angular/**/angular.js',
      'app/client/**/*.module.js',
      'app/client/**/*.js'
    ],
    reporters: ['progress', 'coverage'],

    /*coverageReporter: {
        dir: gulpConfig.karma.coverage.dir,
        reporters: gulpConfig.karma.coverage.reporters
    },*/
    coverage: {
                dir: report + 'coverage',
                reporters: [
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'}
                ]
            },
    preprocessors: {'app/client/**/!(*.spec)+(.js)' : 'coverage'}        
  });
};