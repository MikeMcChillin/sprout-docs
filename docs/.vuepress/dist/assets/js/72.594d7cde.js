(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{186:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",[t._v("Translating Error Messages")]),a("p",[t._v("If you need to translate your Form error messages, currently, you will need to setup your Forms using custom HTML and prepare translations using translation files.  Craft has a helpful How To article: "),a("a",{attrs:{href:"https://craftcms.com/support/static-translations",target:"_blank",rel:"noopener noreferrer"}},[t._v("How can I translate static text in my templates?"),a("OutboundLink")],1),t._v(".")]),a("p",[t._v("Let's look at a brief overview of this method in the context of the Form plugin.")]),t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),a("p",[t._v("In that file, add add an array of the translations you wish to include:")]),t._m(7),a("p",[t._v("The first item in the array is the default message that you want to translate.  The second item in the array is your translation.  You can translate from one language into another, or even within the same language if you want to change the default error messaging.")]),a("p",[t._v("If you need to translate multiple phrases, you can add multiple phrases to your translation file and separate them by commas:")]),t._m(8)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Wrap your error messages in the translate filter")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-twig extra-class"},[a("pre",{pre:!0,attrs:{class:"language-twig"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token property"}},[t._v("translate")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("{# You can abbreviate the translate filter with a 't' #}")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token property"}},[t._v("t")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("{# If you are using a macro to display your errors, you only\n   have to wrap the error variable in a 't' #}")]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("macro")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("errorList")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token property"}},[t._v("errors")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("if")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("errors")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ul")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("errors"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("for")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("errors")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{{")])]),t._v(" "),a("span",{attrs:{class:"token property"}},[t._v("error")]),a("span",{attrs:{class:"token operator"}},[t._v("|")]),a("span",{attrs:{class:"token property"}},[t._v("t")]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("}}")])])]),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("li")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t\t\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endfor")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n\t\t"),a("span",{attrs:{class:"token other"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("ul")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])])]),t._v("\n\t"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endif")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token ld"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("{%")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("endmacro")])]),t._v(" "),a("span",{attrs:{class:"token rd"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("%}")])])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("ol",{attrs:{start:"2"}},[s("li",[this._v("Add a "),s("code",[this._v("translations")]),this._v(" folder to your project")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("craft/app\ncraft/config\ncraft/plugins\ncraft/storage\ncraft/translations **\npublic\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"3"}},[s("li",[this._v("Add a locale-specific translation file to your project")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{pre:!0},[s("p",[this._v("Add a file to the "),s("code",[this._v("craft/translations")]),this._v(" folder for the locale you wish to provide translations.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("craft/translations/en_gb.php\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Email Field cannot be blank'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Whatever you want to translate the original message to'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("array")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Email Field cannot be blank'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Whatever you want to translate the original message to'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Phone Field cannot be blank'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n\t"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'A new error message'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);