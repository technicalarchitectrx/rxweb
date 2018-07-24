import {  lessThanEqualTo, } from "@rxweb/reactive-form-validators"
export class User {

	@lessThanEqualTo() 
	totalMarks: number;

	@lessThanEqualTo({fieldName:'totalMarks' }) 
	marks: number;

}