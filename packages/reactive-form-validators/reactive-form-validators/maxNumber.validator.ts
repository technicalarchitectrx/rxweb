import {
    ValidatorFn,
    AbstractControl} from "@angular/forms";
import { RegexValidator } from "../util/regex-validator";
import { NumberConfig } from "../models/config/number-config";
import { ObjectMaker } from "../util/object-maker";
import { AnnotationTypes } from "../core/validator.static";
import { FormProvider } from '../util/form-provider';
import { ApplicationUtil } from '../util/app-util';
export function maxNumberValidator(config:NumberConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        config = ApplicationUtil.getConfigObject(config);
          if (FormProvider.ProcessRule(control,config)) {
            if (RegexValidator.isNotBlank(control.value)) {
                if (!(parseFloat(control.value) <= config.value))
                    return ObjectMaker.toJson(AnnotationTypes.maxNumber, config.message || null, [control.value,config.value])
            }
        }
        return ObjectMaker.null();
    }
}
