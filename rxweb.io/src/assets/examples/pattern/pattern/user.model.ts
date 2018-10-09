import {  pattern,prop,} from "@rxweb/reactive-form-validators"

export class User {

	@pattern({pattern:{'onlyDigit': RegExp('/^[0-9]*$/')}  ,conditionalExpression:x=>x.userName=="John" }) 
	age: string;
}