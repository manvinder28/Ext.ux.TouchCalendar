Ext.data.JsonP.Ext_data_writer_Json({"singleton":false,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[{"owner":"Ext.Base","meta":{"static":true},"name":"addMembers","id":"static-method-addMembers","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"addStatics","id":"static-method-addStatics","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"create","id":"static-method-create","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"createAlias","id":"static-method-createAlias","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"getName","id":"static-method-getName","tagname":"method"},{"owner":"Ext.Base","meta":{"deprecated":{"version":"4.1.0","text":"Please use {@link Ext#define Ext.define} instead"},"static":true},"name":"override","id":"static-method-override","tagname":"method"}]},"files":[{"filename":"sencha-touch-all-debug.js","href":"sencha-touch-all-debug.html#Ext-data-writer-Json"},{"filename":"Json.js","href":"Json3.html#Ext-data-writer-Json"}],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.JsonWriter</div><div class='alternate-class-name'>Ext.data.JsonWriter</div><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='docClass'>Ext.data.writer.Writer</a><div class='subclass '><strong>Ext.data.writer.Json</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-all-debug.html#Ext-data-writer-Json' target='_blank'>sencha-touch-all-debug.js</a></div><div class='dependency'><a href='source/Json3.html#Ext-data-writer-Json' target='_blank'>Json.js</a></div></pre><div class='doc-contents'><p>This class is used to write <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#!/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-allowSingle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Json'>Ext.data.writer.Json</span><br/><a href='source/Json3.html#Ext-data-writer-Json-cfg-allowSingle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Json-cfg-allowSingle' class='name expandable'>allowSingle</a><span> : Boolean</span></div><div class='description'><div class='short'>False to ensure that records are always wrapped in an array, even if there is only one record being sent. ...</div><div class='long'><p>False to ensure that records are always wrapped in an array, even if there is only one record being sent.\nWhen there is more than one record, they will always be encoded into an array.</p>\n\n<p>Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-encode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Json'>Ext.data.writer.Json</span><br/><a href='source/Json3.html#Ext-data-writer-Json-cfg-encode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Json-cfg-encode' class='name expandable'>encode</a><span> : Boolean</span></div><div class='description'><div class='short'>True to use Ext.encode() on the data before sending. ...</div><div class='long'><p>True to use <a href=\"#!/api/Ext-method-encode\" rel=\"Ext-method-encode\" class=\"docClass\">Ext.encode</a>() on the data before sending. The encode option should only be set to true when a\n<a href=\"#!/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be sent as part of the request parameters as opposed to\na raw post. The root will be the name of the parameter sent to the server.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-nameProperty' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-cfg-nameProperty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-cfg-nameProperty' class='name expandable'>nameProperty</a><span> : String</span></div><div class='description'><div class='short'>This property is used to read the key for each value that will be sent to the server. ...</div><div class='long'><p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>    <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Person', {\n        extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n        fields: [{\n            name: 'first',\n            mapping: 'firstName'\n        }, {\n            name: 'last',\n            mapping: 'lastName'\n        }, {\n            name: 'age'\n        }]\n    });\n    new <a href=\"#!/api/Ext.data.writer.Writer\" rel=\"Ext.data.writer.Writer\" class=\"docClass\">Ext.data.writer.Writer</a>({\n        writeAllFields: true,\n        nameProperty: 'mapping'\n    });\n\n    // This will be sent to the server\n    {\n        firstName: 'first name value',\n        lastName: 'last name value',\n        age: 1\n    }\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n<p>Defaults to: <code>&quot;name&quot;</code></p></div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Json'>Ext.data.writer.Json</span><br/><a href='source/Json3.html#Ext-data-writer-Json-cfg-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Json-cfg-root' class='name expandable'>root</a><span> : String</span></div><div class='description'><div class='short'>The key under which the records in this Writer will be placed. ...</div><div class='long'><p>The key under which the records in this Writer will be placed. If you specify <a href=\"#!/api/Ext.data.writer.Json-cfg-encode\" rel=\"Ext.data.writer.Json-cfg-encode\" class=\"docClass\">encode</a> to be true,\nwe default this to 'records'.</p>\n\n<p>Example generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n</div></div></div><div id='cfg-writeAllFields' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-cfg-writeAllFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-cfg-writeAllFields' class='name expandable'>writeAllFields</a><span> : Boolean</span></div><div class='description'><div class='short'>True to write all fields from the record to the server. ...</div><div class='long'><p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#!/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.data.writer.Writer-method-constructor' class='name expandable'>Ext.data.writer.Json</a>( <span class='pre'>[Object config]</span> ) : Object</div><div class='description'><div class='short'>Creates new Writer. ...</div><div class='long'><p>Creates new Writer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object (optional)<div class='sub-desc'><p>Config object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[String name]</span> ) : Object/Mixed</div><div class='description'><div class='short'>Returns the initial configuration passed to constructor. ...</div><div class='long'><p>Returns the initial configuration passed to constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>When supplied, value for particular configuration\noption is returned, otherwise the full config object is returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecordData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-getRecordData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-method-getRecordData' class='name expandable'>getRecordData</a>( <span class='pre'>Object record</span> ) : Object</div><div class='description'><div class='short'>Formats the data for each record before sending it to the server. ...</div><div class='long'><p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>The record that we are writing to the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object instanceConfig</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-write' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.writer.Writer' rel='Ext.data.writer.Writer' class='defined-in docClass'>Ext.data.writer.Writer</a><br/><a href='source/Writer.html#Ext-data-writer-Writer-method-write' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Writer-method-write' class='name expandable'>write</a>( <span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> request</span> ) : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></div><div class='description'><div class='short'>Prepares a Proxy's Ext.data.Request object ...</div><div class='long'><p>Prepares a Proxy's <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : <a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a><div class='sub-desc'><p>The request object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a></span><div class='sub-desc'><p>The modified request object</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addMembers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'>Object members</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : Object<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-createAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'>String/Object alias, String/Object origin</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String/Object<div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : String/Object<div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='deprecated signature'>deprecated</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n        <div class='signature-box deprecated'>\n        <p>This member has been <strong>deprecated</strong> since 4.1.0</p>\n        <p>Please use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"ext_define","inheritdoc":null,"superclasses":["Ext.Base","Ext.data.writer.Writer","Ext.data.writer.Json"],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"Ext.Base","meta":{"protected":true},"name":"self","id":"property-self","tagname":"property"}],"cfg":[{"owner":"Ext.data.writer.Json","meta":{},"name":"allowSingle","id":"cfg-allowSingle","tagname":"cfg"},{"owner":"Ext.data.writer.Json","meta":{},"name":"encode","id":"cfg-encode","tagname":"cfg"},{"owner":"Ext.data.writer.Writer","meta":{},"name":"nameProperty","id":"cfg-nameProperty","tagname":"cfg"},{"owner":"Ext.data.writer.Json","meta":{},"name":"root","id":"cfg-root","tagname":"cfg"},{"owner":"Ext.data.writer.Writer","meta":{},"name":"writeAllFields","id":"cfg-writeAllFields","tagname":"cfg"}],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"Ext.data.writer.Writer","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"callOverridden","id":"method-callOverridden","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"callParent","id":"method-callParent","tagname":"method"},{"owner":"Ext.Base","meta":{},"name":"getInitialConfig","id":"method-getInitialConfig","tagname":"method"},{"owner":"Ext.data.writer.Writer","meta":{},"name":"getRecordData","id":"method-getRecordData","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"initConfig","id":"method-initConfig","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"statics","id":"method-statics","tagname":"method"},{"owner":"Ext.data.writer.Writer","meta":{},"name":"write","id":"method-write","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"Ext.data.writer.Json","alternateClassNames":["Ext.data.JsonWriter","Ext.data.JsonWriter"],"aliases":{"writer":["json","json"]},"html_meta":{},"tagname":"class","extends":"Ext.data.writer.Writer","requires":[],"id":"class-Ext.data.writer.Json","subclasses":[],"inheritable":false});