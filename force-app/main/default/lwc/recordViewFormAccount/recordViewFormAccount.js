import { LightningElement , api} from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import RATING_FIELD from '@salesforce/schema/Account.Rating';

export default class RecordViewFormAccount extends LightningElement {
    showContent= false;
    objectName = ACCOUNT_OBJECT;
    recordId = '001Hr00001oa3V7IAI';
   // @api recordId;
    fields = {
         name : NAME_FIELD,
         type : TYPE_FIELD,
         industry : INDUSTRY_FIELD,
         aRevenue : ANNUAL_REVENUE_FIELD,
         rating : RATING_FIELD
    }


}