webpackJsonp([1],{7:function(module,exports){eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n  data: function data() {\n    return {\n      \"transactions\": []\n    };\n  },\n  methods: {\n    getTransactions: function getTransactions() {\n      var _this = this;\n\n      this.$http.get('http://private-9eece1-adminpanelmock.apiary-mock.com/transactions').then(function (response) {\n        console.log('ok');\n        _this.transactions = response.body.transactions;\n        //          this.disabled = false\n      }, function (response) {\n        _this.transactions = [];\n        //          this.product = {}\n        //          this.disabled = true\n      });\n    }\n  },\n  mounted: function mounted() {\n    this.getTransactions();\n  }\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/components/Transaction.vue\n// module id = 7\n// module chunks = 1\n//# sourceURL=webpack:///./src/js/components/Transaction.vue?./~/babel-loader/lib!./~/vue-loader/lib/selector.js?type=script&index=0")},16:function(module,exports,__webpack_require__){eval("var Component = __webpack_require__(1)(\n  /* script */\n  __webpack_require__(7),\n  /* template */\n  __webpack_require__(18),\n  /* scopeId */\n  null,\n  /* cssModules */\n  null\n)\n\nmodule.exports = Component.exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/components/Transaction.vue\n// module id = 16\n// module chunks = 1\n//# sourceURL=webpack:///./src/js/components/Transaction.vue?")},18:function(module,exports){eval('module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'div\', [_c(\'h1\', [_vm._v("Lista transakcji")]), _vm._v(" "), _c(\'button\', {\n    staticClass: "btn btn-default",\n    on: {\n      "click": _vm.getTransactions\n    }\n  }, [_vm._v("Sprawdź na stronie")]), _vm._v(" "), _c(\'table\', {\n    staticClass: "table table-condensed"\n  }, [_vm._m(0), _vm._v(" "), _c(\'tbody\', _vm._l((_vm.transactions), function(transaction, index) {\n    return _c(\'tr\', [_c(\'td\', [_vm._v(_vm._s(transaction.programName))]), _vm._v(" "), _c(\'td\', [_vm._v(_vm._s(transaction.orderCost))]), _vm._v(" "), _c(\'td\', [_vm._v(_vm._s(transaction.commission))]), _vm._v(" "), _c(\'td\', [_vm._v(_vm._s(transaction.auctionDate))])])\n  }))])])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c(\'thead\', [_c(\'tr\', [_c(\'th\', [_vm._v("\\n          Program\\n        ")]), _vm._v(" "), _c(\'th\', [_vm._v("\\n          Wartość\\n        ")]), _vm._v(" "), _c(\'th\', [_vm._v("\\n          Prowizja\\n        ")]), _vm._v(" "), _c(\'th\', [_vm._v("\\n          Data\\n        ")])])])\n}]}\n\n//////////////////\n// WEBPACK FOOTER\n// ./~/vue-loader/lib/template-compiler.js?id=data-v-138a70fc!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/components/Transaction.vue\n// module id = 18\n// module chunks = 1\n//# sourceURL=webpack:///./src/js/components/Transaction.vue?./~/vue-loader/lib/template-compiler.js?id=data-v-138a70fc!./~/vue-loader/lib/selector.js?type=template&index=0')}});