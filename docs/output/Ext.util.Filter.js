Ext.data.JsonP.Ext_util_Filter({"singleton":false,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[{"owner":"Ext.Base","meta":{"static":true},"name":"addMembers","id":"static-method-addMembers","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"addStatics","id":"static-method-addStatics","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"create","id":"static-method-create","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"createAlias","id":"static-method-createAlias","tagname":"method"},{"owner":"Ext.Base","meta":{"static":true},"name":"getName","id":"static-method-getName","tagname":"method"},{"owner":"Ext.Base","meta":{"deprecated":{"version":"4.1.0","text":"Please use {@link Ext#define Ext.define} instead"},"static":true},"name":"override","id":"static-method-override","tagname":"method"}]},"files":[{"filename":"ext-all-debug.js","href":"ext-all-debug.html#Ext-util-Filter"},{"filename":"sencha-touch-all-debug.js","href":"sencha-touch-all-debug.html#Ext-util-Filter"},{"filename":"Filter.js","href":"Filter2.html#Ext-util-Filter"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.util.Filter</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ext-all-debug.html#Ext-util-Filter' target='_blank'>ext-all-debug.js</a></div><div class='dependency'><a href='source/sencha-touch-all-debug.html#Ext-util-Filter' target='_blank'>sencha-touch-all-debug.js</a></div><div class='dependency'><a href='source/Filter2.html#Ext-util-Filter' target='_blank'>Filter.js</a></div></pre><div class='doc-contents'><p>Represents a filter that can be applied to a <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#!/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new <a href=\"#!/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a>({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new <a href=\"#!/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Ext.util.Filter</a>({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-anyMatch' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-anyMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-anyMatch' class='name expandable'>anyMatch</a><span> : Boolean</span></div><div class='description'><div class='short'>True to allow any match - no regex start/end line anchors will be added. ...</div><div class='long'><p>True to allow any match - no regex start/end line anchors will be added.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-caseSensitive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-caseSensitive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-caseSensitive' class='name expandable'>caseSensitive</a><span> : Boolean</span></div><div class='description'><div class='short'>True to make the regex case sensitive (adds 'i' switch to regex). ...</div><div class='long'><p>True to make the regex case sensitive (adds 'i' switch to regex).</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-exactMatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-exactMatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-exactMatch' class='name expandable'>exactMatch</a><span> : Boolean</span></div><div class='description'><div class='short'>True to force exact match (^ and $ characters added to the regex). ...</div><div class='long'><p>True to force exact match (^ and $ characters added to the regex). Ignored if anyMatch is true.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-filterFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-filterFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-filterFn' class='name expandable'>filterFn</a><span> : Function</span></div><div class='description'><div class='short'>A custom filter function which is passed each item in the Ext.util.MixedCollection in turn. ...</div><div class='long'><p>A custom filter function which is passed each item in the <a href=\"#!/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a> in turn. Should\nreturn true to accept each item or false to reject it</p>\n</div></div></div><div id='cfg-id' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-id' class='name expandable'>id</a><span> : String</span></div><div class='description'><div class='short'>An optional id this filter can be keyed by in Collections. ...</div><div class='long'><p>An optional id this filter can be keyed by in Collections. If no id is specified it will generate an id by\nfirst trying a combination of property-value, and if none if these were specified (like when having a\nfilterFn) it will generate a random id.</p>\n</div></div></div><div id='cfg-property' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-property' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-property' class='name expandable'>property</a><span> : String</span></div><div class='description'><div class='short'>The property to filter on. ...</div><div class='long'><p>The property to filter on. Required unless a <code>filter</code> is passed</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-root' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-root' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-root' class='name expandable'>root</a><span> : String</span></div><div class='description'><div class='short'>Optional root property. ...</div><div class='long'><p>Optional root property. This is mostly useful when filtering a Store, in which case we set the root to 'data'\nto make the filter pull the <a href=\"#!/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-scope' class='name expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'>The scope in which to run the filterFn ...</div><div class='long'><p>The scope in which to run the filterFn</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-cfg-value' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Filter-cfg-value' class='name expandable'>value</a><span> : RegExp/Mixed</span></div><div class='description'><div class='short'>The value you want to match against. ...</div><div class='long'><p>The value you want to match against. Can be a regular expression which will be used as matcher or any other\nvalue.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Filter'>Ext.util.Filter</span><br/><a href='source/Filter2.html#Ext-util-Filter-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.Filter-method-constructor' class='name expandable'>Ext.util.Filter</a>( <span class='pre'>Object config</span> ) : Object</div><div class='description'><div class='short'>Creates new Filter. ...</div><div class='long'><p>Creates new Filter.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>Config object</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-callOverridden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[String name]</span> ) : Object/Mixed</div><div class='description'><div class='short'>Returns the initial configuration passed to constructor. ...</div><div class='long'><p>Returns the initial configuration passed to constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>When supplied, value for particular configuration\noption is returned, otherwise the full config object is returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object instanceConfig</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-addMembers' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addMembers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addMembers' class='name expandable'>addMembers</a>( <span class='pre'>Object members</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add methods / properties to the prototype of this class. ...</div><div class='long'><p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-addStatics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Add / override static properties of this class. ...</div><div class='long'><p>Add / override static properties of this class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='static-method-create' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-create' class='name expandable'>create</a>( <span class='pre'></span> ) : Object<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create a new instance of this Class. ...</div><div class='long'><p>Create a new instance of this Class.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the created instance.</p>\n</div></li></ul></div></div></div><div id='static-method-createAlias' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-createAlias' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-createAlias' class='name expandable'>createAlias</a>( <span class='pre'>String/Object alias, String/Object origin</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Create aliases for existing prototype methods. ...</div><div class='long'><p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>alias</span> : String/Object<div class='sub-desc'><p>The new method name, or an object to set multiple aliases. See\n<a href=\"#!/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n</div></li><li><span class='pre'>origin</span> : String/Object<div class='sub-desc'><p>The original method name</p>\n</div></li></ul></div></div></div><div id='static-method-getName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-getName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : String<strong class='static signature'>static</strong></div><div class='description'><div class='short'>Get the current class' name in string format. ...</div><div class='long'><p>Get the current class' name in string format.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>className</p>\n</div></li></ul></div></div></div><div id='static-method-override' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-static-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-static-method-override' class='name expandable'>override</a>( <span class='pre'>Object members</span> ) : <a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a><strong class='deprecated signature'>deprecated</strong><strong class='static signature'>static</strong></div><div class='description'><div class='short'>Override members of this class. ...</div><div class='long'><p>Override members of this class. Overridden methods can be invoked via\n<a href=\"#!/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">callParent</a>.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n\n<p>As of 4.1, direct use of this method is deprecated. Use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\ninstead:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.CatOverride', {\n    override: 'My.Cat',\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callParent(arguments);\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n</code></pre>\n\n<p>The above accomplishes the same result but can be managed by the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a>\nwhich can properly order the override and its target class and the build process\ncan determine whether the override is needed based on the required state of the\ntarget class (My.Cat).</p>\n        <div class='signature-box deprecated'>\n        <p>This member has been <strong>deprecated</strong> since 4.1.0</p>\n        <p>Please use <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>members</span> : Object<div class='sub-desc'><p>The properties to add to this class. This should be\nspecified as an object literal containing one or more properties.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Base\" rel=\"Ext.Base\" class=\"docClass\">Ext.Base</a></span><div class='sub-desc'><p>this class</p>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"ext_define","inheritdoc":null,"superclasses":["Ext.Base","Ext.util.Filter"],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"Ext.Base","meta":{"protected":true},"name":"self","id":"property-self","tagname":"property"}],"cfg":[{"owner":"Ext.util.Filter","meta":{},"name":"anyMatch","id":"cfg-anyMatch","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"caseSensitive","id":"cfg-caseSensitive","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"exactMatch","id":"cfg-exactMatch","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"filterFn","id":"cfg-filterFn","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"id","id":"cfg-id","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"property","id":"cfg-property","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"root","id":"cfg-root","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"scope","id":"cfg-scope","tagname":"cfg"},{"owner":"Ext.util.Filter","meta":{},"name":"value","id":"cfg-value","tagname":"cfg"}],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"Ext.util.Filter","meta":{},"name":"constructor","id":"method-constructor","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"callOverridden","id":"method-callOverridden","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"callParent","id":"method-callParent","tagname":"method"},{"owner":"Ext.Base","meta":{},"name":"getInitialConfig","id":"method-getInitialConfig","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"initConfig","id":"method-initConfig","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"statics","id":"method-statics","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"Ext.util.Filter","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":"Ext.Base","requires":[],"id":"class-Ext.util.Filter","subclasses":[],"inheritable":false});