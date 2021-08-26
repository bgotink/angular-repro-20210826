import * as i0 from '@angular/core';
import { NgModule } from '@angular/core';
import * as i1 from '@scope/one';
import { OneModule } from '@scope/one';

class TwoModule {
}
TwoModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TwoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
TwoModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TwoModule, imports: [i1.OneModule] });
TwoModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TwoModule, imports: [[OneModule.forRoot()]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.3", ngImport: i0, type: TwoModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [OneModule.forRoot()]
                }]
        }] });

export { TwoModule };
//# sourceMappingURL=two.js.map
