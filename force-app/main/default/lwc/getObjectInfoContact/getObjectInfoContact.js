import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

export default class GetObjectInfoContact extends LightningElement {
    //Step 1 : start with your wire services. Type Wire ans select the wire from the given options to import the wire decorator.
    //Step 2: Go ahead and write your adapter you are going to use inside of wire's paranthesis.
    //Step 3: Check out the configurations of this adapter
   
    rtId;
    name;
   
    @wire(getObjectInfo,{objectApiName:CONTACT_OBJECT})
    contactInfo({data}){
        if(data){
            console.log(data);
            this.rtId = data.defaultRecordTypeId;
            this.name= data.apiName;
            console.log('The Master Record Type Id is:' +this.defaultRecordTypeId);
          
        }}}