import {
    ValidatorFn,AbstractControl
} from "@angular/forms";
import { ComposeConfig } from "../models/config/compose-config";
import { composeValidator  } from '../reactive-form-validators/index'
import { defaultContainer } from "../core/defaultContainer"
import { AnnotationTypes } from "../core/validator.static"
import {STRING } from '../const/validator.const';
import {ApplicationUtil} from '../util/app-util';

export function composeValidatorExtension(config?: ComposeConfig): ValidatorFn {
    var validator = composeValidator(config) ;
    var rxwebValidator = (control:any,target?:object): { [key: string]: any } => {
        if (typeof control == STRING)
          defaultContainer.init(target, 0, control, AnnotationTypes.compose, config);
        else
          return ApplicationUtil.configureControl(control,config,AnnotationTypes.compose), validator(control);
      return null
    }
    return rxwebValidator;
}
