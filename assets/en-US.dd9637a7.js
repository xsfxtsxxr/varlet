import{_ as s}from"./elevation.42ce02b4.js";import{o as t,c as a,M as e}from"./vendor.7d218dee.js";const n={components:{}},o={class:"varlet-site-doc"},d=e(`<h1>Dialog</h1><div class="card"><h3>Intro</h3><p>A dialog pops up to display the content and handle the user interaction <code>Dialog</code> have provided functional and component usage, and there is no essential difference between the two usage effects and parameters.</p></div><div class="card"><h3>Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

createApp().use(Dialog)
</code></pre></div><div class="card"><h3>Scoped Install</h3><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Dialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-attr">components</span>: {
    [Dialog.Component.name]: Dialog
  }
}
</code></pre></div><div class="card"><h3>Functional</h3><h4>Basic Use</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog(<span class="hljs-string">&#39;Don\\&#39;t Wanna See No Blood, Don\\&#39;t Be A Macho Man&#39;</span>)
</code></pre><h4>Modify Title</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog({
  <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Beat It&#39;</span>,
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Don\\&#39;t Wanna See No Blood, Don\\&#39;t Be A Macho Man&#39;</span>,
})
</code></pre><h4>Hide Button</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css">Dialog({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Don\\&#39;t Wanna See No Blood, Don\\&#39;t Be A Macho Man&#39;</span>,
  <span class="hljs-attr">confirmButton</span>: <span class="hljs-literal">false</span>,
  <span class="hljs-attr">cancelButton</span>: <span class="hljs-literal">false</span>,
})
</code></pre><h4>Handling user behavior</h4><p>You can get user behavior from the method\u2019s return value, which is a <code>Promise</code>. Includes <code>confirm</code>, <code>cancel</code>, and <code>close(click the overlay to trigger closure)</code>.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

actions[<span class="hljs-keyword">await</span> Dialog(<span class="hljs-string">&#39;Don\\&#39;t Wanna See No Blood, Don\\&#39;t Be A Macho Man&#39;</span>)]()
</code></pre></div><div class="card"><h3>Asynchronous closing</h3><p>You can use <code>onBeforeClose</code> to intercept before closing, and you can get the user behavior from the parameters, and the callback function that triggers the shutdown.</p><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

<span class="hljs-keyword">const</span> onBeforeClose = <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
  Snackbar.loading(<span class="hljs-string">&#39;Asynchronous shutdown in progress&#39;</span>)
  
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    actions[action]()
    done()
  }, <span class="hljs-number">1000</span>)
}

Dialog({
  <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;Don\\&#39;t Wanna See No Blood, Don\\&#39;t Be A Macho Man&#39;</span>,
  onBeforeClose
})
</code></pre></div><div class="card"><h3>Component Call</h3><h4>Basic Use</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Basic Use<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Beat It&quot;</span>
  <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;Don&#39;t Wanna See No Blood, Don&#39;t Be A Macho Man&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.success(&#39;confirm&#39;)&quot;</span>
  @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.error(&#39;cancel&#39;)&quot;</span>
  @<span class="hljs-attr">closed</span>=<span class="hljs-string">&quot;() =&gt; Snackbar.info(&#39;closed&#39;)&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> {
      show,
      Snackbar,
    }
  }
}
</code></pre><h4>Asynchronous closing</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Asynchronous closing<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;Beat It&quot;</span>
  <span class="hljs-attr">message</span>=<span class="hljs-string">&quot;Don&#39;t Wanna See No Blood, Don&#39;t Be A Macho Man&quot;</span>
  <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>
  @<span class="hljs-attr">before-close</span>=<span class="hljs-string">&quot;onBeforeClose&quot;</span>
/&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { Snackbar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>

<span class="hljs-keyword">const</span> actions = {
  <span class="hljs-attr">confirm</span>: <span class="hljs-function">() =&gt;</span> Snackbar.success(<span class="hljs-string">&#39;confirm&#39;</span>),
  <span class="hljs-attr">cancel</span>: <span class="hljs-function">() =&gt;</span> Snackbar.error(<span class="hljs-string">&#39;cancel&#39;</span>),
  <span class="hljs-attr">close</span>: <span class="hljs-function">() =&gt;</span> Snackbar.info(<span class="hljs-string">&#39;close&#39;</span>),
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">const</span> onBeforeClose = <span class="hljs-function">(<span class="hljs-params">action, done</span>) =&gt;</span> {
      Snackbar.loading(<span class="hljs-string">&#39;Asynchronous shutdown in progress&#39;</span>)

      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        actions[action]()
        done()
      }, <span class="hljs-number">1000</span>)
    }

    <span class="hljs-keyword">return</span> {
      show,
      Snackbar,
      onBeforeClose,
    }
  }
}
</code></pre><h4>Custom Slots</h4><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;warning&quot;</span> <span class="hljs-attr">block</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;show = true&quot;</span>&gt;</span>Custom Slots<span class="hljs-tag">&lt;/<span class="hljs-name">var-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">var-dialog</span> <span class="hljs-attr">v-model:show</span>=<span class="hljs-string">&quot;show&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">title</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">var-icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;information&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#2979ff&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Don&#39;t Wanna See No Blood, Don&#39;t Be A Macho Man<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Don&#39;t Wanna See No Blood, Don&#39;t Be A Macho Man<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">var-cell</span>&gt;</span>Don&#39;t Wanna See No Blood, Don&#39;t Be A Macho Man<span class="hljs-tag">&lt;/<span class="hljs-name">var-cell</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">var-dialog</span>&gt;</span>
</code></pre><pre class="hljs"><code><link rel="stylesheet" href="./highlight.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> show = ref(<span class="hljs-literal">false</span>)

    <span class="hljs-keyword">return</span> { show }
  }
}
</code></pre></div><h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>v-model:show</code></td><td>Whether to display a Dialog</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>message-align</code></td><td>Dialog message content text alignment, optional values <code>center</code>, <code>left</code>, <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirm-button</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancel-button</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirm-button-text</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>Confirm</code></td></tr><tr><td><code>cancel-button-text</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>Cancel</code></td></tr><tr><td><code>confirm-button-text-color</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-text-color</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirm-button-color</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancel-button-color</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlay-class</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay-style</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lock-scroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>close-on-click-overlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>teleport</code></td><td>The location of the Dialog to mount</td><td><em>string</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>open</code></td><td>Triggered when the Dialog is open</td><td><code>-</code></td></tr><tr><td><code>opened</code></td><td>Triggered when the Dialog open-animation ends</td><td><code>-</code></td></tr><tr><td><code>before-close</code></td><td>Triggering before the Dialog closes prevents closure</td><td><code>action: confirm | cancel | close</code> <br> <code>done: Function</code></td></tr><tr><td><code>close</code></td><td>Triggered when the Dialog is close</td><td><code>-</code></td></tr><tr><td><code>closed</code></td><td>Triggered when the Dialog close-animation ends</td><td><code>-</code></td></tr><tr><td><code>confirm</code></td><td>Trigger on confirm</td><td><code>-</code></td></tr><tr><td><code>cancel</code></td><td>Trigger on cancel</td><td><code>-</code></td></tr><tr><td><code>click-overlay</code></td><td>Triggered when you click on overlay</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Dialog Options</h3><h4>Options passed in for a functional call</h4><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>title</code></td><td>Dialog title</td><td><em>string</em></td><td><code>Hint</code></td></tr><tr><td><code>message</code></td><td>Dialog message content</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>messageAlign</code></td><td>Dialog message content text alignment, optional values <code>center</code> <code>left</code> <code>right</code></td><td><em>string</em></td><td><code>left</code></td></tr><tr><td><code>confirmButton</code></td><td>Whether to display the confirm button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>cancelButton</code></td><td>Whether to display the cancel button</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>confirmButtonText</code></td><td>Confirm button text</td><td><em>string</em></td><td><code>\u786E\u8BA4</code></td></tr><tr><td><code>cancelButtonText</code></td><td>Cancel button text</td><td><em>string</em></td><td><code>\u53D6\u6D88</code></td></tr><tr><td><code>confirmButtonTextColor</code></td><td>Confirm button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonTextColor</code></td><td>Cancel button text color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>confirmButtonColor</code></td><td>Confirm button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>cancelButtonColor</code></td><td>Cancel button background color</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlay</code></td><td>Whether to display the overlay</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>overlayClass</code></td><td>Custom overlay class</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>overlayStyle</code></td><td>Custom overlay style</td><td><em>string</em></td><td><code>-</code></td></tr><tr><td><code>lockScroll</code></td><td>Whether to disable scrolling penetration, scrolling the Dialog when disabled will not cause the body to scroll</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>closeOnClickOverlay</code></td><td>Whether to click the overlay to close the Dialog</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>onOpen</code></td><td>Dialog open callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onOpened</code></td><td>Dialog open-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onBeforeClose</code></td><td>Callbacks prevent closure before the Dialog closes</td><td><em>(action: confirm | cancel | close, done: Function) =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClose</code></td><td>Dialog close callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClosed</code></td><td>Dialog close-animation ends callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onConfirm</code></td><td>Confirm callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onCancel</code></td><td>Cancel callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr><tr><td><code>onClickOverlay</code></td><td>Click overlay callback</td><td><em>() =&gt; void</em></td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Slot</th><th>Description</th><th>Arguments</th></tr></thead><tbody><tr><td><code>default</code></td><td>Dialog content message</td><td><code>-</code></td></tr><tr><td><code>title</code></td><td>Dialog title</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td><code>280px</code></td></tr><tr><td><code>--dialog-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--dialog-border-radius</code></td><td><code>2px</code></td></tr><tr><td><code>--dialog-title-padding</code></td><td><code>20px 20px 0</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td><code>var(--font-size-lg)</code></td></tr><tr><td><code>--dialog-message-color</code></td><td><code>#888</code></td></tr><tr><td><code>--dialog-message-padding</code></td><td><code>12px 20px</code></td></tr><tr><td><code>--dialog-message-line-height</code></td><td><code>24px</code></td></tr><tr><td><code>--dialog-message-font-size</code></td><td><code>var(--font-size-md)</code></td></tr><tr><td><code>--dialog-actions-padding</code></td><td><code>0 12px 12px</code></td></tr><tr><td><code>--dialog-button-margin-left</code></td><td><code>6px</code></td></tr><tr><td><code>--dialog-confirm-button-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--dialog-cancel-button-color</code></td><td><code>var(--color-primary)</code></td></tr></tbody></table></div>`,13),c=[d];function l(r,p,h,i,g,m){return t(),a("div",o,c)}var f=s(n,[["render",l]]);export{f as default};