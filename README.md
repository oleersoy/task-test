# superfly-css-task-test

The [superfly-css-task-test](https://github.com/superfly-css/superfly-css-task-test):
- Supports nunjucks templating
- Highlights content contained in `Test-markup`
- Generates a corresponding `Test-render` block that displays the markup contained in the `Test-markup` block

## Usage

Clone the package:
``` console
git clone https://github.com/superfly-css/superfly-css-task-test
```

Move to the root of the package
``` console
cd supefly-css-task-test
```

Build the test `src/test/html/index.html` by running:
``` console
gulp test:css
```
The prebuilt contents are shown below.  Once `src/test/html/index.html` is built the markup contained in `Test-markup` will be highlighted, and a corresponding `Test-render` block will be generated after the `Test-then` block. 

```html
  <div class="Test">
    <h3 class="Test-when">When the <code>.Grid</code> container holds 2 <code>.Grid-cell</code> instances:</h3>
    <!--Markup contained by the code block is escaped and highlighted by gulp-highlight-->
    <pre class="Test-markup">
      <code class="html">
        <div class="Grid">
            <!-- Use Nunjucks to keep markup DRY -->
            {% for cell in ['1', '2'] %}
                <div class="Grid-cell">{{cell}}/2</div>
            {% endfor %}
         </div>
      </code>
    </pre>
    <h3 id="then" class="Test-then">Each grid cell occupies the same amount of space witin the grid container row.</h3>
  </div>
```
Post build the test file looks like this:

```html
...
  <div class="Test">
    <h3 class="Test-when">When the <code class="hljs"><span class="hljs-title">.Grid</span></code> container holds 2 <code class="hljs"><span class="hljs-title">.Grid-cell</span></code> instances:</h3>
    <!--Markup contained by the code block is escaped and highlighted by gulp-highlight-->
    <pre class="Test-markup">
      <code class="html hljs">
&lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"Grid"</span>&gt;
    
        &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"Grid-cell"</span>&gt;<span class="hljs-number">1</span>/<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
    
        &lt;<span class="hljs-keyword">div</span> <span class="hljs-built_in">class</span>=<span class="hljs-string">"Grid-cell"</span>&gt;<span class="hljs-number">2</span>/<span class="hljs-number">2</span>&lt;/<span class="hljs-keyword">div</span>&gt;
    
 &lt;/<span class="hljs-keyword">div</span>&gt;
      </code>
    </pre>
    <h3 id="then" class="Test-then">Each grid cell occupies the same amount of space.</h3>
    <div class="Test-render">
        <div class="Grid">
            
                <div class="Grid-cell">1/2</div>
            
                <div class="Grid-cell">2/2</div>
            
         </div>
      </div>
  </div>
...
```
