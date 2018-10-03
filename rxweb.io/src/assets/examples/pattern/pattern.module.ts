import { CommonModule } from '@angular/common';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { PatternCompleteComponent } from './complete/pattern-complete.component';
import { PatternPatternComponent } from './pattern/pattern-pattern.component';
import { PatternMessageComponent } from './message/pattern-message.component';
import { PatternConditionalExpressionsComponent } from './conditionalExpressions/pattern-conditional-expressions.component';
import { PatternAddComponent } from './add/pattern-add.component';
import { PatternEditComponent } from './edit/pattern-edit.component';

@NgModule({
  declarations: [
	PatternCompleteComponent,
	PatternPatternComponent,
	PatternMessageComponent,
	PatternConditionalExpressionsComponent,
	PatternAddComponent,
	PatternEditComponent,
  ],
entryComponents: [
	PatternCompleteComponent,
	PatternPatternComponent,
	PatternMessageComponent,
	PatternConditionalExpressionsComponent,
	PatternAddComponent,
	PatternEditComponent,
  ],
  imports: [
    CommonModule,HttpClientModule,ReactiveFormsModule,FormsModule,RxReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
	PatternCompleteComponent,
	PatternPatternComponent,
	PatternMessageComponent,
	PatternConditionalExpressionsComponent,
	PatternAddComponent,
	PatternEditComponent,
  ],

})
export class  PatternExtendedModule { }