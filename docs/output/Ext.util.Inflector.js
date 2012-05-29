Ext.data.JsonP.Ext_util_Inflector({"singleton":true,"statics":{"cfg":[],"property":[],"css_var":[],"event":[],"css_mixin":[],"method":[]},"files":[{"filename":"sencha-touch-all-debug.js","href":"sencha-touch-all-debug.html#Ext-util-Inflector"},{"filename":"Inflector.js","href":"Inflector.html#Ext-util-Inflector"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.Base' rel='Ext.Base' class='docClass'>Ext.Base</a><div class='subclass '><strong>Ext.util.Inflector</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/sencha-touch-all-debug.html#Ext-util-Inflector' target='_blank'>sencha-touch-all-debug.js</a></div><div class='dependency'><a href='source/Inflector.html#Ext-util-Inflector' target='_blank'>Inflector.js</a></div></pre><div class='doc-contents'><p>General purpose inflector class that <a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">pluralizes</a>, <a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">singularizes</a> and \n<a href=\"#!/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">ordinalizes</a> words. Sample usage:</p>\n\n\n\n\n<pre><code>//turning singular words into plurals\n<a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">Ext.util.Inflector.pluralize</a>('word'); //'words'\n<a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">Ext.util.Inflector.pluralize</a>('person'); //'people'\n<a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">Ext.util.Inflector.pluralize</a>('sheep'); //'sheep'\n\n//turning plurals into singulars\n<a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">Ext.util.Inflector.singularize</a>('words'); //'word'\n<a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">Ext.util.Inflector.singularize</a>('people'); //'person'\n<a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">Ext.util.Inflector.singularize</a>('sheep'); //'sheep'\n\n//ordinalizing numbers\n<a href=\"#!/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">Ext.util.Inflector.ordinalize</a>(11); //\"11th\"\n<a href=\"#!/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">Ext.util.Inflector.ordinalize</a>(21); //\"21th\"\n<a href=\"#!/api/Ext.util.Inflector-method-ordinalize\" rel=\"Ext.util.Inflector-method-ordinalize\" class=\"docClass\">Ext.util.Inflector.ordinalize</a>(1043); //\"1043rd\"\n</code></pre>\n\n\n\n\n<p><u>Customization</u></p>\n\n\n\n\n<p>The Inflector comes with a default set of US English pluralization rules. These can be augmented with additional\nrules if the default rules do not meet your application's requirements, or swapped out entirely for other languages.\nHere is how we might add a rule that pluralizes \"ox\" to \"oxen\":</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Ext.util.Inflector-method-plural\" rel=\"Ext.util.Inflector-method-plural\" class=\"docClass\">Ext.util.Inflector.plural</a>(/^(ox)$/i, \"$1en\");\n</code></pre>\n\n\n\n\n<p>Each rule consists of two items - a regular expression that matches one or more rules, and a replacement string.\nIn this case, the regular expression will only match the string \"ox\", and will replace that match with \"oxen\". \nHere's how we could add the inverse rule:</p>\n\n\n\n\n<pre><code><a href=\"#!/api/Ext.util.Inflector-method-singular\" rel=\"Ext.util.Inflector-method-singular\" class=\"docClass\">Ext.util.Inflector.singular</a>(/^(ox)en$/i, \"$1\");\n</code></pre>\n\n\n\n\n<p>Note that the ox/oxen rules are present by default.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-self' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-property-self' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-property-self' class='name expandable'>self</a><span> : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the current class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#!/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">statics</a>\nfor a detailed comparison</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependentOL on 'this'\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-callOverridden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callOverridden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callOverridden' class='name expandable'>callOverridden</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi...</div><div class='long'><p>Call the original method that was previously overridden with <a href=\"#!/api/Ext.Base-static-method-override\" rel=\"Ext.Base-static-method-override\" class=\"docClass\">override</a></p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callOverridden(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the overridden method</p>\n</div></li></ul></div></div></div><div id='method-callParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-callParent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-callParent' class='name expandable'>callParent</a>( <span class='pre'>Array/Arguments args</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Call the \"parent\" method of the current method. ...</div><div class='long'><p>Call the \"parent\" method of the current method. That is the method previously\noverridden by derivation or by an override (see <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>).</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Base', {\n     constructor: function (x) {\n         this.x = x;\n     },\n\n     statics: {\n         method: function (x) {\n             return x;\n         }\n     }\n });\n\n <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived', {\n     extend: 'My.Base',\n\n     constructor: function () {\n         this.callParent([21]);\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // alerts 21\n</code></pre>\n\n<p>This can be used with an override as follows:</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.DerivedOverride', {\n     override: 'My.Derived',\n\n     constructor: function (x) {\n         this.callParent([x*2]); // calls original My.Derived constructor\n     }\n });\n\n var obj = new My.Derived();\n\n alert(obj.x);  // now alerts 42\n</code></pre>\n\n<p>This also works with static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2', {\n     extend: 'My.Base',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Base.method\n         }\n     }\n });\n\n alert(My.Base.method(10);     // alerts 10\n alert(My.Derived2.method(10); // alerts 20\n</code></pre>\n\n<p>Lastly, it also works with overridden static methods.</p>\n\n<pre><code> <a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Derived2Override', {\n     override: 'My.Derived2',\n\n     statics: {\n         method: function (x) {\n             return this.callParent([x*2]); // calls My.Derived2.method\n         }\n     }\n });\n\n alert(My.Derived2.method(10); // now alerts 40\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array/Arguments<div class='sub-desc'><p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Returns the result of calling the parent method</p>\n</div></li></ul></div></div></div><div id='method-classify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-classify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-classify' class='name expandable'>classify</a>( <span class='pre'>String word</span> ) : String</div><div class='description'><div class='short'>Returns the correct Model name for a given string. ...</div><div class='long'><p>Returns the correct <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> name for a given string. Mostly used internally by the data\npackage</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : String<div class='sub-desc'><p>The word to classify</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The classified version of the word</p>\n</div></li></ul></div></div></div><div id='method-clearPlurals' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-clearPlurals' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-clearPlurals' class='name expandable'>clearPlurals</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all registered pluralization rules ...</div><div class='long'><p>Removes all registered pluralization rules</p>\n</div></div></div><div id='method-clearSingulars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-clearSingulars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-clearSingulars' class='name expandable'>clearSingulars</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Removes all registered singularization rules ...</div><div class='long'><p>Removes all registered singularization rules</p>\n</div></div></div><div id='method-getInitialConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-getInitialConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-getInitialConfig' class='name expandable'>getInitialConfig</a>( <span class='pre'>[String name]</span> ) : Object/Mixed</div><div class='description'><div class='short'>Returns the initial configuration passed to constructor. ...</div><div class='long'><p>Returns the initial configuration passed to constructor.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'><p>When supplied, value for particular configuration\noption is returned, otherwise the full config object is returned.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-initConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-initConfig' class='name expandable'>initConfig</a>( <span class='pre'>Object instanceConfig</span> ) : Object<strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Initialize configuration for this class. ...</div><div class='long'><p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceConfig</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>mixins The mixin prototypes as key - value pairs</p>\n</div></li></ul></div></div></div><div id='method-isTransnumeral' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-isTransnumeral' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-isTransnumeral' class='name expandable'>isTransnumeral</a>( <span class='pre'>String word</span> ) : Boolean</div><div class='description'><div class='short'>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. ...</div><div class='long'><p>Returns true if the given word is transnumeral (the word is its own singular and plural form - e.g. sheep, fish)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : String<div class='sub-desc'><p>The word to test</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if the word is transnumeral</p>\n</div></li></ul></div></div></div><div id='method-ordinalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-ordinalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-ordinalize' class='name expandable'>ordinalize</a>( <span class='pre'>Number number</span> ) : String</div><div class='description'><div class='short'>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. ...</div><div class='long'><p>Ordinalizes a given number by adding a prefix such as 'st', 'nd', 'rd' or 'th' based on the last digit of the\nnumber. 21 -> 21st, 22 -> 22nd, 23 -> 23rd, 24 -> 24th etc</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>number</span> : Number<div class='sub-desc'><p>The number to ordinalize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The ordinalized number</p>\n</div></li></ul></div></div></div><div id='method-plural' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-plural' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-plural' class='name expandable'>plural</a>( <span class='pre'>RegExp matcher, String replacer</span> )</div><div class='description'><div class='short'>Adds a new pluralization rule to the Inflector. ...</div><div class='long'><p>Adds a new pluralization rule to the Inflector. See the intro docs for more information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matcher</span> : RegExp<div class='sub-desc'><p>The matcher regex</p>\n</div></li><li><span class='pre'>replacer</span> : String<div class='sub-desc'><p>The replacement string, which can reference matches from the matcher argument</p>\n</div></li></ul></div></div></div><div id='method-pluralize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-pluralize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-pluralize' class='name expandable'>pluralize</a>( <span class='pre'>String word</span> ) : String</div><div class='description'><div class='short'>Returns the pluralized form of a word (e.g. ...</div><div class='long'><p>Returns the pluralized form of a word (e.g. <a href=\"#!/api/Ext.util.Inflector-method-pluralize\" rel=\"Ext.util.Inflector-method-pluralize\" class=\"docClass\">Ext.util.Inflector.pluralize</a>('word') returns 'words')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : String<div class='sub-desc'><p>The word to pluralize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The pluralized form of the word</p>\n</div></li></ul></div></div></div><div id='method-singular' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-singular' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-singular' class='name expandable'>singular</a>( <span class='pre'>RegExp matcher, String replacer</span> )</div><div class='description'><div class='short'>Adds a new singularization rule to the Inflector. ...</div><div class='long'><p>Adds a new singularization rule to the Inflector. See the intro docs for more information</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>matcher</span> : RegExp<div class='sub-desc'><p>The matcher regex</p>\n</div></li><li><span class='pre'>replacer</span> : String<div class='sub-desc'><p>The replacement string, which can reference matches from the matcher argument</p>\n</div></li></ul></div></div></div><div id='method-singularize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Inflector'>Ext.util.Inflector</span><br/><a href='source/Inflector.html#Ext-util-Inflector-method-singularize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Inflector-method-singularize' class='name expandable'>singularize</a>( <span class='pre'>String word</span> ) : String</div><div class='description'><div class='short'>Returns the singularized form of a word (e.g. ...</div><div class='long'><p>Returns the singularized form of a word (e.g. <a href=\"#!/api/Ext.util.Inflector-method-singularize\" rel=\"Ext.util.Inflector-method-singularize\" class=\"docClass\">Ext.util.Inflector.singularize</a>('words') returns 'word')</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>word</span> : String<div class='sub-desc'><p>The word to singularize</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The singularized form of the word</p>\n</div></li></ul></div></div></div><div id='method-statics' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.Base' rel='Ext.Base' class='defined-in docClass'>Ext.Base</a><br/><a href='source/Base.html#Ext-Base-method-statics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Base-method-statics' class='name expandable'>statics</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a><strong class='protected signature'>protected</strong></div><div class='description'><div class='short'>Get the reference to the class from which this object was instantiated. ...</div><div class='long'><p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#!/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(<a href=\"#!/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a>(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","component":false,"uses":[],"code_type":"ext_define","inheritdoc":null,"superclasses":["Ext.Base","Ext.util.Inflector"],"mixedInto":[],"mixins":[],"members":{"property":[{"owner":"Ext.Base","meta":{"protected":true},"name":"self","id":"property-self","tagname":"property"}],"cfg":[],"css_var":[],"css_mixin":[],"event":[],"method":[{"owner":"Ext.Base","meta":{"protected":true},"name":"callOverridden","id":"method-callOverridden","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"callParent","id":"method-callParent","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"classify","id":"method-classify","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"clearPlurals","id":"method-clearPlurals","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"clearSingulars","id":"method-clearSingulars","tagname":"method"},{"owner":"Ext.Base","meta":{},"name":"getInitialConfig","id":"method-getInitialConfig","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"initConfig","id":"method-initConfig","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"isTransnumeral","id":"method-isTransnumeral","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"ordinalize","id":"method-ordinalize","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"plural","id":"method-plural","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"pluralize","id":"method-pluralize","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"singular","id":"method-singular","tagname":"method"},{"owner":"Ext.util.Inflector","meta":{},"name":"singularize","id":"method-singularize","tagname":"method"},{"owner":"Ext.Base","meta":{"protected":true},"name":"statics","id":"method-statics","tagname":"method"}]},"allMixins":[],"meta":{},"private":false,"name":"Ext.util.Inflector","alternateClassNames":[],"aliases":{},"html_meta":{},"tagname":"class","extends":"Ext.Base","requires":[],"id":"class-Ext.util.Inflector","subclasses":[],"inheritable":false});