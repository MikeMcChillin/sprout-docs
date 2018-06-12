(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{181:function(e,t,n){"use strict";n.r(t);var r=n(0),o=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",[e._v("Creating Elements On The Fly")]),n("p",[e._v("There are two methods to make sure that related items exist during your imports. The appropriate method for you will depend on your preference and your specific data set.")]),n("div",{pre:!0},[n("ol",[n("li",[e._v("Import the related items first, then use the "),n("code",[e._v("related")]),e._v(" key to match them based on a known attribute. See "),n("router-link",{attrs:{to:"./resolve-relationships.html"}},[e._v("Resolving Relationships")]),e._v(" for more info on this method.")],1),e._m(0)])]),e._m(1),n("code-toggle",{attrs:{languages:["craft3","craft2"]}},[n("template",{slot:"craft3"},[n("div",{staticClass:"language-craft3 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[\n  {\n    "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Entry",\n    "attributes": { ... },\n    "content": {\n      "title": "In quaerat maiores sit est rerum iusto.",\n      "fields": { ... },\n      "related": {\n        "categoryHandle": {\n          "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Category",\n          "matchBy": "slug",\n          "matchValue": ["san-francisco", "london"],\n          "createIfNotFound": true,\n          "newElements": [\n            {\n              "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Category",\n              "attributes": {\n                "groupId": 1,\n                "enabled": true\n              },\n              "content": {\n                "title": "San Francisco"\n              }\n            },\n            {\n              "@model": "barrelstrength\\\\sproutimport\\\\importers\\\\elements\\\\Category",\n              "attributes": {\n                "groupId": 1,\n                "enabled": true\n              },\n              "content": {\n                "title": "London"\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n]\n')])])])]),n("template",{slot:"craft2"},[n("div",{staticClass:"language-craft2 extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[\n  {\n    "@model": "EntryModel",\n    "attributes": { ... },\n    "content": {\n      "title": "In quaerat maiores sit est rerum iusto.",\n      "fields": { ... },\n      "related": {\n        "categoryHandle": {\n          "@model": "CategoryModel",\n          "matchBy": "slug",\n          "matchValue": ["san-francisco", "london"],\n          "createIfNotFound": true,\n          "newElements": [\n            {\n              "@model": "CategoryModel"\n              "attributes": {\n                "groupId": 1,\n                "enabled": true\n              },\n              "content": {\n                "title": "San Francisco"\n              }\n            },\n            {\n              "@model": "CategoryModel"\n              "attributes": {\n                "groupId": 1,\n                "enabled": true\n              },\n              "content": {\n                "title": "London"\n              }\n            }\n          ]\n        }\n      }\n    }\n  }\n]\n')])])])])],2),e._m(2),e._m(3)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Try to match related items using the "),t("code",[this._v("related")]),this._v(" key, and dynamically create the related items if no match is found using the "),t("code",[this._v("createIfNotFound")]),this._v(" and "),t("code",[this._v("newElements")]),this._v(" keys.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("In this example, we first try to match related categories by slug, and if we don't find them, we also define the elements so they can be created on the fly using the "),t("code",[this._v("createIfNotFound")]),this._v(" and "),t("code",[this._v("newElements")]),this._v(" keys.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{pre:!0},[t("p",[this._v("This behavior requires two keys within the "),t("code",[this._v("related")]),this._v(" tag.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{pre:!0},[n("ul",[n("li",[n("strong",[e._v("createIfNotFound")]),e._v(" must be set to "),n("code",[e._v("true")]),e._v(", to trigger this behavior")]),n("li",[n("strong",[e._v("newElements")]),e._v(" must provide one or more model definitions of an Element that matches the type of Element allowed by the Relation. Each item defined within the "),n("code",[e._v("newElements")]),e._v(" key, follows the same Craft JSON Format syntax as importing an element on its own.")])])])}],!1,null,null,null);t.default=o.exports}}]);