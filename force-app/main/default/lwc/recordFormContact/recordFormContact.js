import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import CONTACT_OBJECT from '@salesforce/schema/Contact';
import FIRST_NAME_FIELD from '@salesforce/schema/Contact.FirstName';
import LAST_NAME_FIELD from '@salesforce/schema/Contact.LastName';
import ACCOUNTID_FIELD from '@salesforce/schema/Contact.AccountId';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import DEPERMENT_FIELD from '@salesforce/schema/Contact.Department';

export default class RecordFormContact extends LightningElement {

    /* RecordForm Use Case-2:
Component Name : recordFormContact
Object: Contact
Record-Id: Pick one from your Org.
Fields: FirstName, LastName, AccountId, Title, Email, Phone, Department
OnSuccess :Show green success banner with a success message.
mode=view
    */

    testMessage;
    objectName =CONTACT_OBJECT;
    recordId='003Hr00002UGrHyIAL';
  
    fields =[FIRST_NAME_FIELD,LAST_NAME_FIELD,ACCOUNTID_FIELD,TITLE_FIELD,EMAIL_FIELD,PHONE_FIELD,DEPERMENT_FIELD];
    

    showSuccessHandler(){
        this.testMessage="This is a sample text message to show the affect of onSuccess attribute in Lightning Record Form."

      

        const successToastMsg = new ShowToastEvent({
            title : 'SUCCESS!!!',
            message : 'The Contact record has been saved successfully!!!',
            variant : 'success',
            mode :'pester'
        });
        this.dispatchEvent(successToastMsg);
    }

}