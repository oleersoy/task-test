//==================================================
//  Task
//  test:css
//  For the description see
//  [SupeflyCSS Test Task](https://github.com/superflycss/task-test/)
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
var highlight = require('gulp-highlight');
var dom  = require('gulp-jsdom');
var gutil = require('gulp-util');

var transform = require('vinyl-transform');
var predentation = require('predentation');

var pre = transform(function(options) {
  return predentation(options);
});

var PLI = require('@superflycss/pli');

var renderTestBlock = '\n    <div class="Test_render"></div>';

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

//---------------------------------
gulp.task('test:css', function() {
  return gulp
    .src(PLI.SRC_TEST_HTML)
    .pipe(nunjucksRender({
      path: [PLI.src.main.nunjucks]
    }))
    .pipe(dom(function(document){
        document.querySelectorAll('.Test_markup > code').forEach((node)=>
        {
          var markup = node.innerHTML;
          var testDescriptionNode =
          node.parentElement.parentElement.nextElementSibling.querySelector('.Test_description');
          var renderTestBlock = document.createElement('div');
          renderTestBlock.innerHTML = markup;
          renderTestBlock.setAttribute('class', "Test_render");
          insertAfter(testDescriptionNode, renderTestBlock);
        });
    }))
    .pipe(highlight())
    .pipe(pre)
    .pipe(gulp.dest(PLI.target.test.html));
});
