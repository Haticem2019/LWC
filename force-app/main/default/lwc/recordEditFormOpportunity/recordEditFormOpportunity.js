import { LightningElement , api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';
import ACCOUNT_FIELD from '@salesforce/schema/Opportunity.AccountId';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';

export default class RecordEditFormOpportunity extends LightningElement {

    /*
    Please prepare an LWc Component to display the following editable fields by using Lightning record edit form. 
        Name - Stage Name - Account - Amount - Close Date
    */

        objectName = OPPORTUNITY_OBJECT;
        recordId = '006Hr00001LhiR9IAJ';
       // @api recordId;
        
        fields = {
            name : NAME_FIELD,
            stage : STAGE_NAME_FIELD,
            account : ACCOUNT_FIELD,
            amount : AMOUNT_FIELD,
            close_date : CLOSE_DATE_FIELD
        }


        successHandler(){

            const successToastMsg = new ShowToastEvent({
                title : 'SUCCESS!!!',
                message : 'The Opportunity record has been saved successfully!!!',
                variant : 'success',
                mode :'pester'
            });
            this.dispatchEvent(successToastMsg);
        }


        errorHandler(){

            const errorToastMsg = new ShowToastEvent({
                title : 'ERROR!!!',
                message : 'The Opportunity record has NOT been saved successfully!!!',
                variant : 'error',
                mode :'pester'
            });
            this.dispatchEvent(successToastMsg);
        }
        }