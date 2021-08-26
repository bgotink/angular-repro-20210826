(function (global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@scope/one')) :
        typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@scope/one'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['scope.two'] = {}, global.ng.core, global.scope.one));
}(this, (function (exports, i0, i1) { 'use strict';

        function _interopNamespace(e) {
                if (e && e.__esModule) return e;
                var n = Object.create(null);
                if (e) {
                        Object.keys(e).forEach(function (k) {
                                if (k !== 'default') {
                                        var d = Object.getOwnPropertyDescriptor(e, k);
                                        Object.defineProperty(n, k, d.get ? d : {
                                                enumerable: true,
                                                get: function () {
                                                        return e[k];
                                                }
                                        });
                                }
                        });
                }
                n['default'] = e;
                return Object.freeze(n);
        }

        var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
        var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

        class TwoModule {
        }
        TwoModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TwoModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
        TwoModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TwoModule, imports: [i1__namespace.OneModule] });
        TwoModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TwoModule, imports: [[i1.OneModule.forRoot()]] });
        i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: TwoModule, decorators: [{
                    type: i0.NgModule,
                    args: [{
                            imports: [i1.OneModule.forRoot()]
                        }]
                }] });

        exports.TwoModule = TwoModule;

        Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=two.umd.js.map
