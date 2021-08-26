import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule()
export class OneModule {
  static forRoot(): ModuleWithProviders<OneModule> {
    return {ngModule: OneModule};
  }
}