# Test task

The [superflycss/task-test](https://github.com/superflycss/task-test) supports the visual testing of [superflycss](https://github.com/superflycss/superflycss) [components](https://github.com/superflycss?utf8=%E2%9C%93&q=components&type=&language=) and [utilities](https://github.com/superflycss?utf8=%E2%9C%93&q=utilities&type=&language=) in general and has the folowing features:
- [Nunjucks](https://mozilla.github.io/nunjucks/) templating
- Highlights content contained in `Test-markup`
- Generates a corresponding `Test-render` block that displays the markup contained in the `Test-markup` block

## Usage

The [task-test github project](https://github.com/superflycss/task-test) contains the example referred to here.  First clone the project:
``` console
git clone https://github.com/superflycss/task-test
```

Move to the root of the project and install dependencies.
``` console
cd task-test
npm i
```

Build the test `src/test/html/index.html` by running:
``` console
npm run test
```
The prebuilt contents are shown below.  Once `src/test/html/index.html` is built the markup contained in `Test_markup` will be highlighted, and a corresponding `Test-render` block will be generated after the `Test_description` block.  <em>Note that the tree structure of the test markup must match the structure shown.</em>

```html
<div class="Test">
    <span class="Test_counter"></span>
    <span class="Test_component">Button</span>

    <div class="Test_container">
      <div class="Test_input">
          <div class="Test_when"></div>
          <div class="Test_description">When the <code>.Grid</code> container holds 2 <code>.Grid-cell</code> instances.</div>
          <pre class="Test_markup">
            <code class="html">
              <div class="Grid">
                  <!-- Use Nunjucks to keep markup DRY -->
                  {% for cell in ['1', '2'] %}
                      <div class="Grid_cell">{{cell}}/2</div>
                  {% endfor %}
               </div>
            </code>
          </pre>
      </div>
      <div class="Test_output">
          <div class="Test_then"></div>
          <div class="Test_description">Each grid cell occupies the same amount of space witin the grid container row.</div>
      </div>
  </div>
```
Post the test build the content looks like this:

```html
<div class="Test">
  <span class="Test_counter"></span>
  <span class="Test_component">Button</span>

  <div class="Test_container">
    <div class="Test_input">
      <div class="Test_when"></div>
      <div class="Test_description">When the <code class="hljs"><span class="hljs-title">.Grid</span></code> container holds 2 <code class="hljs"><span class="hljs-title">.Grid-cell</span></code> instances.</div>
      <pre class="Test_markup">
            <code class="html hljs">
&lt;div <span class="hljs-class"><span class="hljs-keyword">class</span></span>=<span class="hljs-string">"Grid"</span>&gt;
  <span class="xml"><span class="hljs-comment">&lt;!-- Use Nunjucks to keep markup DRY --&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"Grid_cell"</span>&gt;</span>1/2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"Grid_cell"</span>&gt;</span>2/2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
            </code>
          </pre>
    </div>
    <div class="Test_output">
      <div class="Test_then"></div>
      <div class="Test_description">Each grid cell occupies the same amount of space witin the grid container row.</div>
      <div class="Test_render">
        <div class="Grid">
          <!-- Use Nunjucks to keep markup DRY -->
          <div class="Grid_cell">1/2</div>
          <div class="Grid_cell">2/2</div>
        </div>
      </div>
    </div>
  </div>
</div>
...
```
