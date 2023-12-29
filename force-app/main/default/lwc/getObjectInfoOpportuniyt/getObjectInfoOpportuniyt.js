import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import { LightningElement, wire } from 'lwc';
import OPPORTUNITY_OBJECT from "@salesforce/schema/Opportunity";

export default class GetObjectInfoOpportuniyt extends LightningElement {
    rtId;
    apiName;
   HomeRtId;
   KitchenRtId;
   MasterRtId;
  
    @wire(getObjectInfo, { objectApiName: OPPORTUNITY_OBJECT })
    accountInfo({data,error}){
     if(data){
         console.log(data);
         
    this.rtId=data.defaultRecordTypeId;
    this.apiName=data.apiName;
 
     const recordTypesMap =data.recordTypeInfos;
     console.log(recordTypesMap);
     this.HomeRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Home Appliances');
     this.KitchenRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Kitchen Appliances');
     this.MasterRtId = Object.keys(recordTypesMap).find(w=>recordTypesMap[w].name==='Master');
    
       }
      
     }
 
       if(error){
         console.log(error);
       }
    }