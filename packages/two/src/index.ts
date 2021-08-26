import {NgModule} from '@angular/core';
import { OneModule } from '@scope/one';

@NgModule({
  imports: [OneModule.forRoot()]
})
export class TwoModule {}