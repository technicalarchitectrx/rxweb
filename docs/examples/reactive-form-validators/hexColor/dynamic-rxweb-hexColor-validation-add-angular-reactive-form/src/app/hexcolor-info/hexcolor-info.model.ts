import {  hexColor, } from "@rxweb/reactive-form-validators"
import {prop} from '@rxweb/reactive-form-validators'
export class HexcolorInfo {

	@prop()
	color: string;

	@prop()
	headerHexcolorCode: string;

	@prop()
	bodyHexcolorCode: string;

	@prop()
	strictHexcolorCode: string;

}