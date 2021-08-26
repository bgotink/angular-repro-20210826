(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@scope/one', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.scope = global.scope || {}, global.scope.one = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

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

    var OneModule = /** @class */ (function () {
        function OneModule() {
        }
        OneModule.forRoot = function () {
            return { ngModule: OneModule };
        };
        return OneModule;
    }());
    OneModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: OneModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    OneModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: OneModule });
    OneModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: OneModule });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0__namespace, type: OneModule, decorators: [{
                type: i0.NgModule
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OneModule = OneModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scope-one.umd.js.map
