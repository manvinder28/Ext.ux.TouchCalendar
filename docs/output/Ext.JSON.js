Ext.data.JsonP.Ext_JSON({"singleton":true,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"sencha-touch-all-debug.js","href":"sencha-touch-all-debug.html#Ext-JSON"},{"filename":"sencha-touch-debug.js","href":"sencha-touch-debug.html#Ext-JSON"},{"filename":"JSON.js","href":"JSON.html#Ext-JSON"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-all-debug.html#Ext-JSON' target='_blank'>sencha-touch-all-debug.js</a></div><div class='dependency'><a href='source/sencha-touch-debug.html#Ext-JSON' target='_blank'>sencha-touch-debug.js</a></div><div class='dependency'><a href='source/JSON.html#Ext-JSON' target='_blank'>JSON.js</a></div></pre><div class='doc-contents'><p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-decode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-decode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-decode' class='name expandable'>decode</a>( <span class='pre'>String json, [Boolean safe]</span> ) : Object</div><div class='description'><div class='short'>Decodes (parses) a JSON string to an object. ...</div><div class='long'><p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : String<div class='sub-desc'><p>The JSON string</p>\n\n\n\n</div></li><li><span class='pre'>safe</span> : Boolean (optional)<div class='sub-desc'><p>Whether to return null or throw an exception if the JSON is invalid.</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The resulting object</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-encode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encode' class='name expandable'>encode</a>( <span class='pre'>Object o</span> ) : String</div><div class='description'><div class='short'>Encodes an Object, Array or other value ...</div><div class='long'><p>Encodes an Object, Array or other value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The variable to encode</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The JSON string</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-encodeDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.JSON'>Ext.JSON</span><br/><a href='source/JSON.html#Ext-JSON-method-encodeDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.JSON-method-encodeDate' class='name expandable'>encodeDate</a>( <span class='pre'>Date d</span> ) : String</div><div class='description'><div class='short'>Encodes a Date. ...</div><div class='long'><p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code><a href=\"#!/api/Ext.JSON-method-encodeDate\" rel=\"Ext.JSON-method-encodeDate\" class=\"docClass\">Ext.JSON.encodeDate</a> = function(d) {\n    return <a href=\"#!/api/Ext.Date-method-format\" rel=\"Ext.Date-method-format\" class=\"docClass\">Ext.Date.format</a>(d, '\"Y-m-d\"');\n};\n     </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>d</span> : Date<div class='sub-desc'><p>The Date to encode</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The string literal to use in a JSON string.</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"assignment","inheritdoc":null,"superclasses":[],"mixedInto":[],"mixins":[],"members":{"property":[],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"Ext.JSON","meta":{},"name":"decode","id":"method-decode","tagname":"method"},{"owner":"Ext.JSON","meta":{},"name":"encode","id":"method-encode","tagname":"method"},{"owner":"Ext.JSON","meta":{},"name":"encodeDate","id":"method-encodeDate","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"Ext.JSON","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":null,"requires":[],"id":"class-Ext.JSON","subclasses":[],"inheritable":false});