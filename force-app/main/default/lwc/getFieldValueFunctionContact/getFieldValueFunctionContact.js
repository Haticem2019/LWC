import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { LightningElement, api, wire } from 'lwc';

import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import DEPARTMENT_FIELD from '@salesforce/schema/Contact.Department';

const FIELDS = [FIRST_NAME_FIELD,LAST_NAME_FIELD,EMAIL_FIELD,PHONE_FIELD,TITLE_FIELD,DEPARTMENT_FIELD];

export default class GetFieldValueFunctionContact extends LightningElement {
    /*
        Use-Case: Display the following Contact fields by using getFieldValue and getFieldDisplayValue Functions. 
         FirstName, LastName, Email, Phone, title, Department
    */
   //Step-1: By using getRecord Adapter, bring all the fields information(data) into JS. 

   fName;
   lName;
   email;
   phone;
   title;
   department;

   @api  recordId;
   @wire(getRecord,{recordId:'$recordId', fields:FIELDS})
    contactRecordInfo({data,error}){
        if(data){
            console.log(data);
          this.fName=getFieldValue(data,FIRST_NAME_FIELD);
          this.lName=getFieldValue(data,LAST_NAME_FIELD);
          this.email=getFieldValue(data,EMAIL_FIELD);
          this.phone=getFieldValue(data,PHONE_FIELD);
          this.title=getFieldValue(data,TITLE_FIELD);
          this.department=getFieldValue(data,DEPARTMENT_FIELD);
        }
        if(error){
            console.log(error);
        }
    }

}