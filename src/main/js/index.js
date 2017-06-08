//==================================================
//  Task
//  test:css
//  For the description see
//  [SupeflyCSS Test Task](https://github.com/superfly-css/superfly-css-task-test/)
//  IMPLEMENTATION
//  0: Support nunjucks template rendering within test markup
//  1: Cheerio copies content from `Test-markup`
//     and appends it to the markup to the `Test-render`
//
//==================================================

var gulp = require('gulp');

// -0-
var nunjucksRender = require('gulp-nunjucks-render');

// -1-
var cheerio = require('gulp-cheerio');
var highlight = require('gulp-highlight');

var transform = require('vinyl-transform');
var predentation = require('predentation');

var pre = transform(function(options) {
  return predentation(options);
});

var PLI = require('superfly-css-pli');

var renderTestBlock = '\n    <div class="Test_render"></div>';

//---------------------------------
gulp.task('test:css', function() {
  return gulp
    .src(PLI.SRC_TEST_HTML)
    .pipe(nunjucksRender({
      path: [PLI.src.main.nunjucks]
    }))
    .pipe(cheerio(function($, file) {
      $('.Test_markup > code').each(function() {
        var markup = $(this).html();
        //Insert the Test-render block after the Test-then block
        //Append the markup block to the Test-render block
        $($(this).parent().parent().next().children('.Test_description')).after(renderTestBlock).next().append(markup);
      });
    }))
    .pipe(highlight())
    .pipe(pre)
    .pipe(gulp.dest(PLI.target.test.html));
});
