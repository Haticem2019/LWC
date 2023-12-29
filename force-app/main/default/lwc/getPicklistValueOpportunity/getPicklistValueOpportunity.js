import { getObjectInfo ,getPicklistValues} from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import STAGE_NAME_FIELD from '@salesforce/schema/Opportunity.StageName';


export default class GetPicklistValueOpportunity extends LightningElement {
    //Step 1 : start with your wire services. Type Wire ans select the wire from the given options to import the wire decorator.
    //Step 2: Go ahead and write your adapter you are going to use inside of wire's paranthesis.
    //Step 3: Check out the configurations of this adapter
   
    kitchenRtId;
    selectedValue;
    options=[];

    @wire(getObjectInfo,{objectApiName:OPPORTUNITY_OBJECT})
    opportunityInfo({data,error}){
        if(data){
            console.log(data);
            const recordTypesMap = data.recordTypeInfos;
            console.log(recordTypesMap);
        
          this.kitchenRtId =Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Kitchen Appliances');
          console.log('The Kitchen Appliances Record Type Id is:' +this.kitchenRtId);

         

        }
        if(error){
            console.log(error);

        }
    }
    @wire(getPicklistValues,{fieldApiName: STAGE_NAME_FIELD, recordTypeId:'$kitchenRtId' })
    stageNamePicklist({data,error}){
   if(data){
    console.log(data);
     this.options = this.picklistGenerator(data);
   }
   if(error){
       console.log(error);
   }
}
handleChange(event){
   this.selectedValue = event.target.value;

}
/*I will use a map method here which creates a new array from calling a function for every array element. map method does not change the original array
 */
picklistGenerator(data){
    return data.values.map(w=>({
        label : w.label,
        value : w.value
  }));
}}