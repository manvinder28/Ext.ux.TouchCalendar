Ext.data.JsonP.Ext_Anim({"singleton":true,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"sencha-touch-all-debug.js","href":"sencha-touch-all-debug.html#Ext-Anim"},{"filename":"Anim.js","href":"Anim.html#Ext-Anim"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-all-debug.html#Ext-Anim' target='_blank'>sencha-touch-all-debug.js</a></div><div class='dependency'><a href='source/Anim.html#Ext-Anim' target='_blank'>Anim.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a> is used to excute simple animations defined in <a href=\"#!/api/Ext.anims\" rel=\"Ext.anims\" class=\"docClass\">Ext.anims</a>. The <a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">run</a> method can take any of the\nproperties defined below.</p>\n\n<pre><code><a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">Ext.Anim.run</a>(this, 'fade', {\n    out: false,\n    autoClear: true\n});\n</code></pre>\n\n<p>When using <a href=\"#!/api/Ext.Anim-method-run\" rel=\"Ext.Anim-method-run\" class=\"docClass\">run</a>, ensure you require <a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a> in your application. Either do this using <a href=\"#!/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a>:</p>\n\n<pre><code>Ext.requires('<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>');\n</code></pre>\n\n<p>when using <a href=\"#!/api/Ext-method-setup\" rel=\"Ext-method-setup\" class=\"docClass\">Ext.setup</a>:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-setup\" rel=\"Ext-method-setup\" class=\"docClass\">Ext.setup</a>({\n    requires: ['<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>'],\n    onReady: function() {\n        //do something\n    }\n});\n</code></pre>\n\n<p>or when using <a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-application\" rel=\"Ext-method-application\" class=\"docClass\">Ext.application</a>({\n    requires: ['<a href=\"#!/api/Ext.Anim\" rel=\"Ext.Anim\" class=\"docClass\">Ext.Anim</a>'],\n    launch: function() {\n        //do something\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-after' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-after' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-after' class='name not-expandable'>after</a><span> : Function</span></div><div class='description'><div class='short'><p>Code to execute after the animation ends.</p>\n</div><div class='long'><p>Code to execute after the animation ends.</p>\n</div></div></div><div id='cfg-autoClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-autoClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-autoClear' class='name expandable'>autoClear</a><span> : Boolean</span></div><div class='description'><div class='short'>True to remove all custom CSS defined in the to config when the animation is over. ...</div><div class='long'><p>True to remove all custom CSS defined in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config when the animation is over.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-before' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-before' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-before' class='name not-expandable'>before</a><span> : Function</span></div><div class='description'><div class='short'><p>Code to execute before starting the animation.</p>\n</div><div class='long'><p>Code to execute before starting the animation.</p>\n</div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-delay' class='name expandable'>delay</a><span> : Number</span></div><div class='description'><div class='short'>Time to delay before starting the animation. ...</div><div class='long'><p>Time to delay before starting the animation.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-direction' class='name expandable'>direction</a><span> : String</span></div><div class='description'><div class='short'>Valid values are 'left', 'right', 'up', 'down' and null. ...</div><div class='long'><p>Valid values are 'left', 'right', 'up', 'down' and null.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-disableAnimations' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-disableAnimations' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-disableAnimations' class='name expandable'>disableAnimations</a><span> : Boolean</span></div><div class='description'><div class='short'>True to disable animations. ...</div><div class='long'><p>True to disable animations.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-duration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-duration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-duration' class='name expandable'>duration</a><span> : Number</span></div><div class='description'><div class='short'>Time in milliseconds for the animation to last. ...</div><div class='long'><p>Time in milliseconds for the animation to last.</p>\n<p>Defaults to: <code>250</code></p></div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-easing' class='name expandable'>easing</a><span> : String</span></div><div class='description'><div class='short'>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS. ...</div><div class='long'><p>Valid values are 'ease', 'linear', ease-in', 'ease-out', 'ease-in-out' or a cubic-bezier curve as defined by CSS.</p>\n<p>Defaults to: <code>&quot;ease-in-out&quot;</code></p></div></div></div><div id='cfg-from' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-from' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-from' class='name expandable'>from</a><span> : Object</span></div><div class='description'><div class='short'>An object of CSS values which the animation begins with. ...</div><div class='long'><p>An object of CSS values which the animation begins with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-to\" rel=\"Ext.Anim-cfg-to\" class=\"docClass\">to</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-out' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-out' class='name expandable'>out</a><span> : Boolean</span></div><div class='description'><div class='short'>True if you want the animation to slide out of the screen. ...</div><div class='long'><p>True if you want the animation to slide out of the screen.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-reverse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-reverse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-reverse' class='name expandable'>reverse</a><span> : Boolean</span></div><div class='description'><div class='short'>True to reverse the animation direction. ...</div><div class='long'><p>True to reverse the animation direction. For example, if the animation direction was set to 'left', it would\nthen use 'right'.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'><p>Scope to run the <a href=\"#!/api/Ext.Anim-cfg-before\" rel=\"Ext.Anim-cfg-before\" class=\"docClass\">before</a> function in.</p>\n</div><div class='long'><p>Scope to run the <a href=\"#!/api/Ext.Anim-cfg-before\" rel=\"Ext.Anim-cfg-before\" class=\"docClass\">before</a> function in.</p>\n</div></div></div><div id='cfg-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-cfg-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-cfg-to' class='name expandable'>to</a><span> : Object</span></div><div class='description'><div class='short'>An object of CSS values which the animation ends with. ...</div><div class='long'><p>An object of CSS values which the animation ends with. If you define a CSS property here, you must also\ndefine it in the <a href=\"#!/api/Ext.Anim-cfg-from\" rel=\"Ext.Anim-cfg-from\" class=\"docClass\">from</a> config.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-run' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Anim'>Ext.Anim</span><br/><a href='source/Anim.html#Ext-Anim-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Anim-method-run' class='name expandable'>run</a>( <span class='pre'><a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a>/HTMLElement el, String anim, Object config</span> )</div><div class='description'><div class='short'>Used to run an animation on a specific element. ...</div><div class='long'><p>Used to run an animation on a specific element. Use the config argument to customize the animation</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>el</span> : <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.Element</a>/HTMLElement<div class='sub-desc'><p>The element to animate</p>\n</div></li><li><span class='pre'>anim</span> : String<div class='sub-desc'><p>The animation type, defined in <a href=\"#!/api/Ext.anims\" rel=\"Ext.anims\" class=\"docClass\">Ext.anims</a></p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The config object for the animation</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"assignment","inheritdoc":null,"superclasses":[],"mixedInto":[],"mixins":[],"members":{"property":[],"cfg":[{"owner":"Ext.Anim","meta":{},"name":"after","id":"cfg-after","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"autoClear","id":"cfg-autoClear","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"before","id":"cfg-before","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"delay","id":"cfg-delay","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"direction","id":"cfg-direction","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"disableAnimations","id":"cfg-disableAnimations","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"duration","id":"cfg-duration","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"easing","id":"cfg-easing","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"from","id":"cfg-from","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"out","id":"cfg-out","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"reverse","id":"cfg-reverse","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"scope","id":"cfg-scope","tagname":"cfg"},{"owner":"Ext.Anim","meta":{},"name":"to","id":"cfg-to","tagname":"cfg"}],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"Ext.Anim","meta":{},"name":"run","id":"method-run","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"Ext.Anim","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":"Object","requires":[],"id":"class-Ext.Anim","subclasses":[],"inheritable":false});